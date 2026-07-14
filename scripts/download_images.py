#!/usr/bin/env python3
"""
Скачивание иконок оружия/брони/бустеров/стратагем с helldivers.wiki.gg
и раскладка их по папкам assets/... в соответствии с data.ts.

ВАЖНО: этот скрипт нужно запускать на машине с обычным доступом в интернет
(например, на вашем VPS warrvin.ru или локально) — песочница, в которой
Claude готовил этот проект, не имеет доступа к helldivers.wiki.gg.

Использование:
    pip install requests pillow
    python3 download_images.py                # скачать всё, что ещё не скачано
    python3 download_images.py --force         # перекачать всё заново
    python3 download_images.py --only liberator ce-27-ground   # только конкретные id
    python3 download_images.py --delay 0.5     # задержка между запросами (сек)

Результат:
    - файлы assets/<категория>/<id>.png
    - scripts/report.json — что скачалось, что не найдено (для ручной доработки)
"""

import argparse
import io
import json
import re
import sys
import time
import unicodedata
from pathlib import Path
from urllib.parse import quote

try:
    import requests
except ImportError:
    sys.exit("Нужен пакет requests: pip install requests")

try:
    from PIL import Image
except ImportError:
    sys.exit("Нужен пакет pillow: pip install pillow")

API_URL = "https://helldivers.wiki.gg/api.php"
HEADERS = {
    "User-Agent": "hd2-loadout-randomizer-icon-fetcher/1.0 (personal project; contact: warrvin.ru)"
}

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
ASSETS_DIR = PROJECT_ROOT / "assets"
ITEMS_FILE = SCRIPT_DIR / "items.json"
REPORT_FILE = SCRIPT_DIR / "report.json"

SESSION = requests.Session()
SESSION.headers.update(HEADERS)


def api_get(params: dict) -> dict:
    params = {**params, "format": "json"}
    for attempt in range(3):
        try:
            r = SESSION.get(API_URL, params=params, timeout=20)
            r.raise_for_status()
            return r.json()
        except Exception as e:
            if attempt == 2:
                raise
            time.sleep(1.5 * (attempt + 1))
    return {}


def get_page_image_url(title: str) -> str | None:
    """Пытается получить оригинальную картинку (pageimage) по точному названию страницы."""
    data = api_get(
        {
            "action": "query",
            "titles": title,
            "prop": "pageimages",
            "piprop": "original",
            "redirects": 1,
        }
    )
    pages = data.get("query", {}).get("pages", {})
    for _, page in pages.items():
        if "missing" in page:
            return None
        original = page.get("original")
        if original and "source" in original:
            return original["source"]
    return None


def search_best_title(query: str) -> str | None:
    """Fallback: полнотекстовый поиск по вики, возвращает лучший заголовок."""
    data = api_get(
        {
            "action": "query",
            "list": "search",
            "srsearch": query,
            "srlimit": 3,
        }
    )
    results = data.get("query", {}).get("search", [])
    return results[0]["title"] if results else None


def list_page_images(title: str) -> list[str]:
    """Fallback: список всех файлов, использованных на странице (для сложных случаев,
    например, страниц брони, где на одной странице несколько иконок: броня/шлем/плащ)."""
    data = api_get(
        {
            "action": "query",
            "titles": title,
            "prop": "images",
            "imlimit": 50,
            "redirects": 1,
        }
    )
    pages = data.get("query", {}).get("pages", {})
    filenames = []
    for _, page in pages.items():
        for img in page.get("images", []):
            filenames.append(img["title"])  # e.g. "File:Foo.png"
    return filenames


def get_file_url(file_title: str) -> str | None:
    data = api_get(
        {
            "action": "query",
            "titles": file_title,
            "prop": "imageinfo",
            "iiprop": "url",
        }
    )
    pages = data.get("query", {}).get("pages", {})
    for _, page in pages.items():
        info = page.get("imageinfo")
        if info:
            return info[0]["url"]
    return None


def pick_best_filename(filenames: list[str], hint: str) -> str | None:
    """Из списка файлов страницы пытается выбрать наиболее подходящий по ключевым словам."""
    hint_l = hint.lower()
    candidates = [f for f in filenames if not re.search(r"\.(ogg|webm|mp3|pdf)$", f, re.I)]
    # приоритет: файлы, где есть слово из hint (helmet/cape/armor и т.п.)
    keywords = []
    if "helmet" in hint_l:
        keywords = ["helmet"]
    elif "cape" in hint_l:
        keywords = ["cape"]
    else:
        keywords = ["armor", "icon"]
    for kw in keywords:
        for f in candidates:
            if kw in f.lower():
                return f
    return candidates[0] if candidates else None


def download_and_save(url: str, dest: Path) -> bool:
    try:
        r = SESSION.get(url, timeout=30)
        r.raise_for_status()
        img = Image.open(io.BytesIO(r.content)).convert("RGBA")
        dest.parent.mkdir(parents=True, exist_ok=True)
        img.save(dest, "PNG")
        return True
    except Exception as e:
        print(f"    ! ошибка сохранения {url}: {e}")
        return False


def fetch_item_icon(item: dict) -> tuple[bool, str]:
    """Возвращает (успех, сообщение)."""
    title = item["nameEn"]

    # 1) прямое совпадение по названию
    img_url = get_page_image_url(title)
    source = "exact"

    # 2) если это шлем ("... Helmet") и страницы для шлема отдельно нет —
    #    пробуем страницу без "Helmet" и берём файл по ключевому слову
    if not img_url and title.endswith(" Helmet"):
        base_title = title[: -len(" Helmet")]
        filenames = list_page_images(base_title)
        best = pick_best_filename(filenames, "helmet")
        if best:
            img_url = get_file_url(best)
            source = f"images-list({base_title})"

    # 3) для плащей / брони — аналогично проверяем список картинок страницы
    if not img_url and item["category"] in ("cape", "armor"):
        filenames = list_page_images(title)
        best = pick_best_filename(filenames, item["category"])
        if best:
            img_url = get_file_url(best)
            source = "images-list"

    # 4) fallback — полнотекстовый поиск
    if not img_url:
        found_title = search_best_title(title)
        if found_title and found_title != title:
            img_url = get_page_image_url(found_title)
            source = f"search({found_title})"

    if not img_url:
        return False, "не найдено изображение"

    dest = ASSETS_DIR / item["subfolder"] / f"{item['id']}.png"
    ok = download_and_save(img_url, dest)
    if ok:
        return True, f"OK [{source}] -> {dest.relative_to(PROJECT_ROOT)}"
    return False, f"не удалось скачать [{source}] {img_url}"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--force", action="store_true", help="перекачать даже существующие файлы")
    parser.add_argument("--only", nargs="*", help="скачать только указанные id")
    parser.add_argument("--delay", type=float, default=0.4, help="пауза между запросами, сек")
    args = parser.parse_args()

    items = json.loads(ITEMS_FILE.read_text(encoding="utf-8"))
    if args.only:
        only = set(args.only)
        items = [it for it in items if it["id"] in only]

    report = {"ok": [], "failed": []}

    for i, item in enumerate(items, 1):
        dest = ASSETS_DIR / item["subfolder"] / f"{item['id']}.png"
        if dest.exists() and not args.force:
            print(f"[{i}/{len(items)}] {item['id']}: уже скачано, пропуск")
            report["ok"].append(item["id"])
            continue

        print(f"[{i}/{len(items)}] {item['id']} ({item['nameEn']}) ...")
        try:
            ok, msg = fetch_item_icon(item)
        except Exception as e:
            ok, msg = False, f"исключение: {e}"

        print(f"    {'✓' if ok else '✗'} {msg}")
        (report["ok"] if ok else report["failed"]).append(
            {"id": item["id"], "nameEn": item["nameEn"], "msg": msg} if not ok else item["id"]
        )
        time.sleep(args.delay)

    REPORT_FILE.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nГотово: {len(report['ok'])} успешно, {len(report['failed'])} не найдено.")
    print(f"Подробности по неудачным — в {REPORT_FILE.relative_to(PROJECT_ROOT)}")
    if report["failed"]:
        print("\nНе найденные предметы (проверьте вручную на вики и добавьте иконки самостоятельно):")
        for f in report["failed"]:
            print(f"  - {f['id']} ({f['nameEn']})")


if __name__ == "__main__":
    main()
