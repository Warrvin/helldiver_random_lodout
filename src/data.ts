export interface Warbond {
  id: string;
  nameRu: string;
  nameEn: string;
}

export interface LoadoutItem {
  id: string;
  nameRu: string;
  nameEn: string;
  category: 'primary' | 'secondary' | 'throwable' | 'booster' | 'support' | 'backpack' | 'offensive' | 'defensive' | 'armor' | 'helmet' | 'cape';
  warbond: string; // matches Warbond id
  typeRu?: string;
  typeEn?: string;
}

export const WARBONDS: Warbond[] = [
  { id: 'default', nameRu: 'Мобилизация!', nameEn: 'Helldivers Mobilize!' },
  { id: 'steeled', nameRu: 'Закаленные ветераны', nameEn: 'Steeled Veterans' },
  { id: 'cutting', nameRu: 'На острие', nameEn: 'Cutting Edge' },
  { id: 'democratic', nameRu: 'Демократический детонатор', nameEn: 'Democratic Detonation' },
  { id: 'polar', nameRu: 'Полярные патриоты', nameEn: 'Polar Patriots' },
  { id: 'viper', nameRu: 'Коммандос Вайпер', nameEn: 'Viper Commandos' },
  { id: 'flame', nameRu: 'Пламя свободы', nameEn: 'Freedom\'s Flame' },
  { id: 'chemical', nameRu: 'Химические агенты', nameEn: 'Chemical Agents' },
  { id: 'truth', nameRu: 'Стражи истины', nameEn: 'Truth Enforcers' },
  { id: 'superstore', nameRu: 'Супермагазин брони', nameEn: 'Superstore' },
  { id: 'exo', nameRu: 'Экзокостюмы', nameEn: 'Exosuits' },
  { id: 'redacted', nameRu: 'Секретные разработки', nameEn: 'Redacted' },
];

export const ITEMS: LoadoutItem[] = [
  // --- PRIMARY WEAPONS ---
  // Assault Rifles
  {
    id: 'liberator',
    nameRu: 'AR-23 «Освободитель»',
    nameEn: 'AR-23 Liberator',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },
  {
    id: 'liberator-penetrator',
    nameRu: 'AR-23P «Освободитель-пробивной»',
    nameEn: 'AR-23P Liberator Penetrator',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },
  {
    id: 'liberator-concussive',
    nameRu: 'AR-23C «Взрывной освободитель»',
    nameEn: 'AR-23C Liberator Concussive',
    category: 'primary',
    warbond: 'steeled',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },
  {
    id: 'sta-52-ar',
    nameRu: 'StA-52 «Штурмовая винтовка»',
    nameEn: 'StA-52 Assault Rifle',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },
  {
    id: 'ar-32-pacifier',
    nameRu: 'AR-32 «Миротворец»',
    nameEn: 'AR-32 Pacifier',
    category: 'primary',
    warbond: 'truth',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },
  {
    id: 'ar-2-coyote',
    nameRu: 'AR-2 «Койот»',
    nameEn: 'AR-2 Coyote',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },
  {
    id: 'ma5c-ar',
    nameRu: 'MA5C «Штурмовая винтовка»',
    nameEn: 'MA5C Assault Rifle',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },
  {
    id: 'liberator-carbine',
    nameRu: 'AR-23A «Карабин Освободитель»',
    nameEn: 'AR-23A Liberator Carbine',
    category: 'primary',
    warbond: 'viper',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },
  {
    id: 'tenderizer',
    nameRu: 'AR-61 «Нежинка»',
    nameEn: 'AR-61 Tenderizer',
    category: 'primary',
    warbond: 'polar',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },
  {
    id: 'adjudicator',
    nameRu: 'BR-14 «Судья»',
    nameEn: 'BR-14 Adjudicator',
    category: 'primary',
    warbond: 'democratic',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },
  {
    id: 'one-two-ar',
    nameRu: 'AR/GL-21 «Раз-два»',
    nameEn: 'AR/GL-21 One-Two',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },
  {
    id: 'suppressor-ar',
    nameRu: 'AR-59 «Глушитель»',
    nameEn: 'AR-59 Suppressor',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },

  // Marksman Rifles
  {
    id: 'r-2-amendment',
    nameRu: 'R-2 «Поправка»',
    nameEn: 'R-2 Amendment',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle'
  },
  {
    id: 'r-2124-constitution',
    nameRu: 'R-2124 «Конституция»',
    nameEn: 'R-2124 Constitution',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle'
  },
  {
    id: 'r-6-deadeye',
    nameRu: 'R-6 «Меткий глаз»',
    nameEn: 'R-6 Deadeye',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle'
  },
  {
    id: 'diligence',
    nameRu: 'R-63 «Прилежание»',
    nameEn: 'R-63 Diligence',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle'
  },
  {
    id: 'diligence-counter-sniper',
    nameRu: 'R-63CS «Прилежание-антиснайпер»',
    nameEn: 'R-63CS Diligence Counter Sniper',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle'
  },
  {
    id: 'r-72-censor',
    nameRu: 'R-72 «Цензор»',
    nameEn: 'R-72 Censor',
    category: 'primary',
    warbond: 'truth',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle'
  },
  {
    id: 'r-4-hyena',
    nameRu: 'R-4 «Гиена»',
    nameEn: 'R-4 Hyena',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle'
  },

  // Submachine Guns
  {
    id: 'knight',
    nameRu: 'MP-98 «Рыцарь»',
    nameEn: 'MP-98 Knight',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun'
  },
  {
    id: 'sta-11-smg',
    nameRu: 'StA-11 «Пистолет-пулемет»',
    nameEn: 'StA-11 SMG',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun'
  },
  {
    id: 'm7s-smg',
    nameRu: 'M7S «Пистолет-пулемет»',
    nameEn: 'M7S SMG',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun'
  },
  {
    id: 'smg-32-reprimand',
    nameRu: 'SMG-32 «Выговор»',
    nameEn: 'SMG-32 Reprimand',
    category: 'primary',
    warbond: 'truth',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun'
  },
  {
    id: 'defender',
    nameRu: 'SMG-37 «Защитник»',
    nameEn: 'SMG-37 Defender',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun'
  },
  {
    id: 'pummeler',
    nameRu: 'SMG-72 «Громила»',
    nameEn: 'SMG-72 Pummeler',
    category: 'primary',
    warbond: 'polar',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun'
  },
  {
    id: 'smg-flam-34-stoker',
    nameRu: 'SMG/FLAM-34 «Кочегар»',
    nameEn: 'SMG/FLAM-34 Stoker',
    category: 'primary',
    warbond: 'flame',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun'
  },
  {
    id: 'smg-203-gallant',
    nameRu: 'SMG-203 «Галантный»',
    nameEn: 'SMG-203 Gallant',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun'
  },

  // Shotguns
  {
    id: 'punisher',
    nameRu: 'SG-8 «Каратель»',
    nameEn: 'SG-8 Punisher',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Помповый дробовик',
    typeEn: 'Pump-Action Shotgun'
  },
  {
    id: 'slugger',
    nameRu: 'SG-8S «Точильщик»',
    nameEn: 'SG-8S Slugger',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Помповый дробовик',
    typeEn: 'Pump-Action Shotgun'
  },
  {
    id: 'sg-20-halt',
    nameRu: 'SG-20 «Стой»',
    nameEn: 'SG-20 Halt',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Дробовик',
    typeEn: 'Shotgun'
  },
  {
    id: 'cookout',
    nameRu: 'SG-451 «Кулинар»',
    nameEn: 'SG-451 Cookout',
    category: 'primary',
    warbond: 'flame',
    typeRu: 'Помповый дробовик',
    typeEn: 'Pump-Action Shotgun'
  },
  {
    id: 'double-freedom',
    nameRu: 'DBS-2 «Двойная свобода»',
    nameEn: 'DBS-2 Double Freedom',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Двуствольный дробовик',
    typeEn: 'Double-Barrel Shotgun'
  },
  {
    id: 'm90a-shotgun',
    nameRu: 'M90A «Дробовик»',
    nameEn: 'M90A Shotgun',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Дробовик',
    typeEn: 'Shotgun'
  },
  {
    id: 'breaker',
    nameRu: 'SG-225 «Разрушитель»',
    nameEn: 'SG-225 Breaker',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Автоматический дробовик',
    typeEn: 'Automatic Shotgun'
  },
  {
    id: 'breaker-spray-pray',
    nameRu: 'SG-225SP «Разрушитель-чистильщик»',
    nameEn: 'SG-225SP Breaker Spray & Pray',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Автоматический дробовик',
    typeEn: 'Automatic Shotgun'
  },
  {
    id: 'breaker-incendiary',
    nameRu: 'SG-225IE «Разрушитель-зажигательный»',
    nameEn: 'SG-225IE Breaker Incendiary',
    category: 'primary',
    warbond: 'steeled',
    typeRu: 'Автоматический дробовик',
    typeEn: 'Automatic Shotgun'
  },
  {
    id: 'sg-97-sweeper',
    nameRu: 'SG-97 «Дворник»',
    nameEn: 'SG-97 Sweeper',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Дробовик',
    typeEn: 'Shotgun'
  },

  // Explosive
  {
    id: 'exploding-crossbow',
    nameRu: 'CB-9 «Разрывной арбалет»',
    nameEn: 'CB-9 Exploding Crossbow',
    category: 'primary',
    warbond: 'democratic',
    typeRu: 'Арбалет',
    typeEn: 'Explosive Crossbow'
  },
  {
    id: 'eruptor',
    nameRu: 'R-36 «Взрыватель»',
    nameEn: 'R-36 Eruptor',
    category: 'primary',
    warbond: 'democratic',
    typeRu: 'Болтовая винтовка',
    typeEn: 'Bolt-Action Rifle'
  },

  // Energy-Based
  {
    id: 'punisher-plasma',
    nameRu: 'SG-8P «Плазменный каратель»',
    nameEn: 'SG-8P Punisher Plasma',
    category: 'primary',
    warbond: 'cutting',
    typeRu: 'Плазменный дробовик',
    typeEn: 'Plasma Shotgun'
  },
  {
    id: 'plas-39-accelerator',
    nameRu: 'PLAS-39 «Ускоритель»',
    nameEn: 'PLAS-39 Accelerator Rifle',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Энергетическая винтовка',
    typeEn: 'Energy Rifle'
  },
  {
    id: 'blitzer',
    nameRu: 'ARC-12 «Блицер»',
    nameEn: 'ARC-12 Blitzer',
    category: 'primary',
    warbond: 'cutting',
    typeRu: 'Дуговое оружие',
    typeEn: 'Arc Weapon'
  },
  {
    id: 'scythe',
    nameRu: 'LAS-5 «Коса»',
    nameEn: 'LAS-5 Scythe',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Лазерное оружие',
    typeEn: 'Laser Weapon'
  },
  {
    id: 'sickle',
    nameRu: 'LAS-16 «Серп»',
    nameEn: 'LAS-16 Sickle',
    category: 'primary',
    warbond: 'cutting',
    typeRu: 'Лазерное оружие',
    typeEn: 'Laser Weapon'
  },
  {
    id: 'las-17-double-edge',
    nameRu: 'LAS-17 «Обоюдоострый серп»',
    nameEn: 'LAS-17 Double-Edge Sickle',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Лазерное оружие',
    typeEn: 'Laser Weapon'
  },
  {
    id: 'scorcher',
    nameRu: 'PLAS-1 «Испепелитель»',
    nameEn: 'PLAS-1 Scorcher',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Плазменное оружие',
    typeEn: 'Plasma Weapon'
  },
  {
    id: 'purifier',
    nameRu: 'PLAS-101 «Очиститель»',
    nameEn: 'PLAS-101 Purifier',
    category: 'primary',
    warbond: 'polar',
    typeRu: 'Плазменное оружие',
    typeEn: 'Plasma Weapon'
  },
  {
    id: 'las-13-trident',
    nameRu: 'LAS-13 «Трезубец»',
    nameEn: 'LAS-13 Trident',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Лазерный дробовик',
    typeEn: 'Laser Shotgun'
  },

  // Special
  {
    id: 'vg-70-variable',
    nameRu: 'VG-70 «Вариабельный»',
    nameEn: 'VG-70 Variable',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Специальное оружие',
    typeEn: 'Special Weapon'
  },
  {
    id: 'torcher',
    nameRu: 'FLAM-66 «Испепелитель»',
    nameEn: 'FLAM-66 Torcher',
    category: 'primary',
    warbond: 'flame',
    typeRu: 'Персональный огнемет',
    typeEn: 'Flamethrower'
  },
  {
    id: 'dominator',
    nameRu: 'JAR-5 «Доминатор»',
    nameEn: 'JAR-5 Dominator',
    category: 'primary',
    warbond: 'steeled',
    typeRu: 'Реактивное оружие',
    typeEn: 'Jet-Assisted Weapon'
  },

  // --- SECONDARY WEAPONS ---
  // Pistols
  {
    id: 'p-92-warrant',
    nameRu: 'P-92 «Ордер»',
    nameEn: 'P-92 Warrant',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Пистолет',
    typeEn: 'Pistol'
  },
  {
    id: 'peacemaker',
    nameRu: 'P-2 «Миротворец»',
    nameEn: 'P-2 Peacemaker',
    category: 'secondary',
    warbond: 'default',
    typeRu: 'Полуавтоматический пистолет',
    typeEn: 'Pistol'
  },
  {
    id: 'redeemer',
    nameRu: 'P-19 «Избавитель»',
    nameEn: 'P-19 Redeemer',
    category: 'secondary',
    warbond: 'default',
    typeRu: 'Автоматический пистолет',
    typeEn: 'Automatic Pistol'
  },
  {
    id: 'verdict',
    nameRu: 'P-113 «Вердикт»',
    nameEn: 'P-113 Verdict',
    category: 'secondary',
    warbond: 'polar',
    typeRu: 'Пистолет',
    typeEn: 'Pistol'
  },
  {
    id: 'm6c-socom',
    nameRu: 'M6C/SOCOM Пистолет',
    nameEn: 'M6C/SOCOM Pistol',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Пистолет',
    typeEn: 'Pistol'
  },
  {
    id: 'senator',
    nameRu: 'P-4 «Сенатор»',
    nameEn: 'P-4 Senator',
    category: 'secondary',
    warbond: 'steeled',
    typeRu: 'Револьвер',
    typeEn: 'Revolver'
  },
  {
    id: 'p-69-veto',
    nameRu: 'P-69 «Вето»',
    nameEn: 'P-69 Veto',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Пистолет',
    typeEn: 'Pistol'
  },

  // Melee
  {
    id: 'cqc-19-stun-lance',
    nameRu: 'CQC-19 «Шоковое копье»',
    nameEn: 'CQC-19 Stun Lance',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Холодное оружие ближнего боя',
    typeEn: 'Melee Weapon'
  },
  {
    id: 'melee-saber',
    nameRu: 'CQC-2 «Сабля»',
    nameEn: 'CQC-2 Saber',
    category: 'secondary',
    warbond: 'default',
    typeRu: 'Холодное оружие ближнего боя',
    typeEn: 'Melee Weapon'
  },
  {
    id: 'cqc-30-stun-baton',
    nameRu: 'CQC-30 «Шоковая дубинка»',
    nameEn: 'CQC-30 Stun Baton',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Холодное оружие ближнего боя',
    typeEn: 'Melee Weapon'
  },
  {
    id: 'cqc-5-hatchet',
    nameRu: 'CQC-5 «Боевой топорик»',
    nameEn: 'CQC-5 Combat Hatchet',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Холодное оружие ближнего боя',
    typeEn: 'Melee Weapon'
  },
  {
    id: 'cqc-73-entrenchment',
    nameRu: 'CQC-73 «Саперная лопатка»',
    nameEn: 'CQC-73 Entrenchment Tool',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Холодное оружие ближнего боя',
    typeEn: 'Melee Weapon'
  },
  {
    id: 'cqc-42-machete',
    nameRu: 'CQC-42 «Мачете»',
    nameEn: 'CQC-42 Machete',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Холодное оружие ближнего боя',
    typeEn: 'Melee Weapon'
  },

  // Special Secondaries
  {
    id: 'stim-pistol',
    nameRu: 'P-11 «Пистолет-стимулятор»',
    nameEn: 'P-11 Stim Pistol',
    category: 'secondary',
    warbond: 'chemical',
    typeRu: 'Вспомогательный пистолет',
    typeEn: 'Support Pistol'
  },
  {
    id: 'bushwhacker',
    nameRu: 'SG-22 «Бушвокер»',
    nameEn: 'SG-22 Bushwhacker',
    category: 'secondary',
    warbond: 'viper',
    typeRu: 'Обрез дробовика',
    typeEn: 'Shotgun Pistol'
  },
  {
    id: 'las-58-talon',
    nameRu: 'LAS-58 «Коготь»',
    nameEn: 'LAS-58 Talon',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Энергетический пистолет',
    typeEn: 'Laser Pistol'
  },
  {
    id: 'crisper',
    nameRu: 'P-72 «Жаришка»',
    nameEn: 'P-72 Crisper',
    category: 'secondary',
    warbond: 'flame',
    typeRu: 'Карманный огнемет',
    typeEn: 'Pocket Flamethrower'
  },
  {
    id: 'grenade-pistol',
    nameRu: 'GP-31 «Гранатометный пистолет»',
    nameEn: 'GP-31 Grenade Pistol',
    category: 'secondary',
    warbond: 'democratic',
    typeRu: 'Гранатометный пистолет',
    typeEn: 'Grenade Pistol'
  },
  {
    id: 'dagger',
    nameRu: 'LAS-7 «Кинжал»',
    nameEn: 'LAS-7 Dagger',
    category: 'secondary',
    warbond: 'cutting',
    typeRu: 'Лазерный пистолет',
    typeEn: 'Laser Pistol'
  },
  {
    id: 'gp-20-ultimatum',
    nameRu: 'GP-20 «Ультиматум»',
    nameEn: 'GP-20 Ultimatum',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Гранатометный пистолет',
    typeEn: 'Grenade Pistol'
  },
  {
    id: 'loyalist',
    nameRu: 'PLAS-15 «Лоялист»',
    nameEn: 'PLAS-15 Loyalist',
    category: 'secondary',
    warbond: 'truth',
    typeRu: 'Плазменный пистолет',
    typeEn: 'Plasma Pistol'
  },
  {
    id: 'p-35-reeducator',
    nameRu: 'P-35 «Перевоспитатель»',
    nameEn: 'P-35 Re-Educator',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Пистолет',
    typeEn: 'Pistol'
  },
  {
    id: 'p-33-missile-pistol',
    nameRu: 'P-33 «Ракетный пистолет»',
    nameEn: 'P-33 Missile Pistol',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Ракетный пистолет',
    typeEn: 'Missile Pistol'
  },

  // --- THROWABLES ---
  // Standard
  {
    id: 'ted-63-dynamite',
    nameRu: 'TED-63 «Динамит»',
    nameEn: 'TED-63 Dynamite',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Взрывчатка',
    typeEn: 'Dynamite'
  },
  {
    id: 'frag-grenade',
    nameRu: 'G-6 «Осколочная»',
    nameEn: 'G-6 Frag',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Осколочная граната',
    typeEn: 'Frag Grenade'
  },
  {
    id: 'high-explosive',
    nameRu: 'G-12 «Фугасная»',
    nameEn: 'G-12 High Explosive',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Фугасная граната',
    typeEn: 'High Explosive Grenade'
  },
  {
    id: 'incendiary-grenade',
    nameRu: 'G-10 «Зажигательная»',
    nameEn: 'G-10 Incendiary',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Зажигательная граната',
    typeEn: 'Incendiary Grenade'
  },
  {
    id: 'g-7-pineapple',
    nameRu: 'G-7 «Ананас»',
    nameEn: 'G-7 Pineapple',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Осколочная граната',
    typeEn: 'Frag Grenade'
  },
  // Special
  {
    id: 'impact-grenade',
    nameRu: 'G-16 «Контактная»',
    nameEn: 'G-16 Impact',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Контактная граната',
    typeEn: 'Impact Grenade'
  },
  {
    id: 'g-13-incendiary-impact',
    nameRu: 'G-13 «Контактная зажигательная»',
    nameEn: 'G-13 Incendiary Impact',
    category: 'throwable',
    warbond: 'flame',
    typeRu: 'Зажигательная граната',
    typeEn: 'Incendiary Impact Grenade'
  },
  {
    id: 'stun-grenade',
    nameRu: 'G-23 «Светошумовая»',
    nameEn: 'G-23 Stun',
    category: 'throwable',
    warbond: 'cutting',
    typeRu: 'Светошумовая граната',
    typeEn: 'Stun Grenade'
  },
  {
    id: 'g-4-gas',
    nameRu: 'G-4 «Газовая»',
    nameEn: 'G-4 Gas',
    category: 'throwable',
    warbond: 'chemical',
    typeRu: 'Газовая граната',
    typeEn: 'Gas Grenade'
  },
  {
    id: 'g-50-seeker',
    nameRu: 'G-50 «Искатель»',
    nameEn: 'G-50 Seeker',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Умная граната',
    typeEn: 'Seeker Grenade'
  },
  {
    id: 'smoke-grenade',
    nameRu: 'G-3 «Дымовая»',
    nameEn: 'G-3 Smoke',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Дымовая граната',
    typeEn: 'Smoke Grenade'
  },
  {
    id: 'thermite-grenade',
    nameRu: 'G-123 «Термитная»',
    nameEn: 'G-123 Thermite',
    category: 'throwable',
    warbond: 'democratic',
    typeRu: 'Термитная граната',
    typeEn: 'Thermite Grenade'
  },
  {
    id: 'throwing-knife',
    nameRu: 'K-2 «Метательный нож»',
    nameEn: 'K-2 Throwing Knife',
    category: 'throwable',
    warbond: 'viper',
    typeRu: 'Метательный нож',
    typeEn: 'Throwing Knife'
  },
  {
    id: 'g-142-pyrotech',
    nameRu: 'G-142 «Пиротех»',
    nameEn: 'G-142 Pyrotech',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Сигнальная граната',
    typeEn: 'Pyrotech Grenade'
  },
  {
    id: 'g-109-urchin',
    nameRu: 'G-109 «Морской еж»',
    nameEn: 'G-109 Urchin',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Игольчатая граната',
    typeEn: 'Urchin Grenade'
  },
  {
    id: 'g-31-arc',
    nameRu: 'G-31 «Дуговая»',
    nameEn: 'G-31 Arc',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Дуговая граната',
    typeEn: 'Arc Grenade'
  },
  {
    id: 'tm-1-lure',
    nameRu: 'TM-1 «Приманка-мина»',
    nameEn: 'TM-1 Lure Mine',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Мина-приманка',
    typeEn: 'Lure Mine'
  },
  {
    id: 'g-89-smokescreen',
    nameRu: 'G-89 «Дымовая завеса»',
    nameEn: 'G-89 Smokescreen',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Дымовая завеса',
    typeEn: 'Smokescreen Grenade'
  },
  {
    id: 'g-sh-39-shield',
    nameRu: 'G/SH-39 «Щит»',
    nameEn: 'G/SH-39 Shield',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Генераторный щит',
    typeEn: 'Shield Grenade'
  },
  {
    id: 'g-48-giga',
    nameRu: 'G-48 «Гига-граната»',
    nameEn: 'G-48 Giga Grenade',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Тяжелая граната',
    typeEn: 'Heavy Grenade'
  },

  // --- BOOSTERS ---
  {
    id: 'booster-space-optimization',
    nameRu: 'Оптимизация пространства хэллоподов',
    nameEn: 'Hellpod Space Optimization',
    category: 'booster',
    warbond: 'default'
  },
  {
    id: 'booster-vitality-enhancement',
    nameRu: 'Повышение жизнеспособности',
    nameEn: 'Vitality Enhancement',
    category: 'booster',
    warbond: 'default'
  },
  {
    id: 'booster-uav-recon',
    nameRu: 'Разведчик БПЛА',
    nameEn: 'UAV Recon Booster',
    category: 'booster',
    warbond: 'default'
  },
  {
    id: 'booster-stamina-enhancement',
    nameRu: 'Повышение выносливости',
    nameEn: 'Stamina Enhancement',
    category: 'booster',
    warbond: 'default'
  },
  {
    id: 'booster-muscle-enhancement',
    nameRu: 'Повышение мускулатуры',
    nameEn: 'Muscle Enhancement',
    category: 'booster',
    warbond: 'steeled'
  },
  {
    id: 'booster-increased-reinforcement',
    nameRu: 'Увеличенный бюджет подкреплений',
    nameEn: 'Increased Reinforcement Budget',
    category: 'booster',
    warbond: 'default'
  },
  {
    id: 'booster-flexible-reinforcement',
    nameRu: 'Гибкий бюджет подкреплений',
    nameEn: 'Flexible Reinforcement Budget',
    category: 'booster',
    warbond: 'steeled'
  },
  {
    id: 'booster-localization-confusion',
    nameRu: 'Сбой локализации',
    nameEn: 'Localization Confusion',
    category: 'booster',
    warbond: 'democratic'
  },
  {
    id: 'booster-expert-pilot',
    nameRu: 'Экстракция с экспертом-пилотом',
    nameEn: 'Expert Extraction Pilot',
    category: 'booster',
    warbond: 'polar'
  },
  {
    id: 'booster-motivational-shocks',
    nameRu: 'Мотивационные удары',
    nameEn: 'Motivational Shocks',
    category: 'booster',
    warbond: 'polar'
  },
  {
    id: 'booster-experimental-infusion',
    nameRu: 'Экспериментальная инъекция',
    nameEn: 'Experimental Infusion',
    category: 'booster',
    warbond: 'viper'
  },
  {
    id: 'booster-firebomb-hellpods',
    nameRu: 'Огненные хэллоподы',
    nameEn: 'Firebomb Hellpods',
    category: 'booster',
    warbond: 'flame'
  },
  {
    id: 'booster-dead-sprint',
    nameRu: 'Смертельный спринт',
    nameEn: 'Dead Sprint',
    category: 'booster',
    warbond: 'chemical'
  },
  {
    id: 'booster-armed-resupply',
    nameRu: 'Вооруженные капсулы снабжения',
    nameEn: 'Armed Resupply Pods',
    category: 'booster',
    warbond: 'truth'
  },
  {
    id: 'booster-sample-extricator',
    nameRu: 'Экстрактор образцов',
    nameEn: 'Sample Extricator',
    category: 'booster',
    warbond: 'redacted'
  },
  {
    id: 'booster-sample-scanner',
    nameRu: 'Сканер образцов',
    nameEn: 'Sample Scanner',
    category: 'booster',
    warbond: 'redacted'
  },
  {
    id: 'booster-stun-pods',
    nameRu: 'Оглушающие капсулы',
    nameEn: 'Stun Pods',
    category: 'booster',
    warbond: 'redacted'
  },
  {
    id: 'booster-concealed-insertion',
    nameRu: 'Скрытное проникновение',
    nameEn: 'Concealed Insertion',
    category: 'booster',
    warbond: 'redacted'
  },

  // --- ORBITAL STRIKES ---
  {
    id: 'orbital-precision',
    nameRu: 'Орбитальный точечный удар',
    nameEn: 'Orbital Precision Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-gatling',
    nameRu: 'Орбитальный обстрел из Гатлинга',
    nameEn: 'Orbital Gatling Barrage',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-gas',
    nameRu: 'Орбитальный газовый удар',
    nameEn: 'Orbital Gas Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-120-he',
    nameRu: 'Орбитальный 120-мм фугасный обстрел',
    nameEn: 'Orbital 120mm HE Barrage',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-airburst',
    nameRu: 'Орбитальный кассетный удар',
    nameEn: 'Orbital Airburst Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-smoke',
    nameRu: 'Орбитальный дымовой удар',
    nameEn: 'Orbital Smoke Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-ems',
    nameRu: 'Орбитальный ЭМ-удар',
    nameEn: 'Orbital EMS Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-380-he',
    nameRu: 'Орбитальный 380-мм фугасный обстрел',
    nameEn: 'Orbital 380mm HE Barrage',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-walking',
    nameRu: 'Орбитальный заградительный обстрел',
    nameEn: 'Orbital Walking Barrage',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-laser',
    nameRu: 'Орбитальный лазер',
    nameEn: 'Orbital Laser',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-napalm',
    nameRu: 'Орбитальный обстрел напалмом',
    nameEn: 'Orbital Napalm Barrage',
    category: 'offensive',
    warbond: 'flame',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-railcannon',
    nameRu: 'Орбитальный удар рельсотроном',
    nameEn: 'Orbital Railcannon Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem'
  },

  // --- EAGLE STRIKES ---
  {
    id: 'eagle-strafing',
    nameRu: 'Орёл: Бреющий полет',
    nameEn: 'Eagle Strafing Run',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem'
  },
  {
    id: 'eagle-airstrike',
    nameRu: 'Орёл: Авиаудар',
    nameEn: 'Eagle Airstrike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem'
  },
  {
    id: 'eagle-cluster',
    nameRu: 'Орёл: Кассетная бомба',
    nameEn: 'Eagle Cluster Bomb',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem'
  },
  {
    id: 'eagle-smoke',
    nameRu: 'Орёл: Дымовой удар',
    nameEn: 'Eagle Smoke Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem'
  },
  {
    id: 'eagle-napalm',
    nameRu: 'Орёл: Напалмовый авиаудар',
    nameEn: 'Eagle Napalm Airstrike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem'
  },
  {
    id: 'eagle-110mm',
    nameRu: 'Орёл: 110-мм ракетные кассеты',
    nameEn: 'Eagle 110mm Rocket Pods',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem'
  },
  {
    id: 'eagle-500kg',
    nameRu: 'Орёл: 500-кг бомба',
    nameEn: 'Eagle 500kg Bomb',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem'
  },

  // --- SUPPORT WEAPONS ---
  {
    id: 'machine-gun',
    nameRu: 'MG-43 «Пулемет»',
    nameEn: 'MG-43 Machine Gun',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'expendable-anti-tank',
    nameRu: 'EAT-17 «Одноразовый бронебойщик»',
    nameEn: 'EAT-17 Expendable Anti-Tank',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'stalwart',
    nameRu: 'M-105 «Доблесть»',
    nameEn: 'M-105 Stalwart',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'laser-cannon',
    nameRu: 'LAS-98 «Лазерная пушка»',
    nameEn: 'LAS-98 Laser Cannon',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'anti-materiel-rifle',
    nameRu: 'APW-1 «Крупнокалиберная винтовка»',
    nameEn: 'APW-1 Anti-Materiel Rifle',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'grenade-launcher',
    nameRu: 'GL-21 «Гранатомет»',
    nameEn: 'GL-21 Grenade Launcher',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'recoilless-rifle',
    nameRu: 'GR-8 «Безоткатное орудие»',
    nameEn: 'GR-8 Recoilless Rifle',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'flamethrower',
    nameRu: 'FLAM-40 «Огнемет»',
    nameEn: 'FLAM-40 Flamethrower',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'heavy-machine-gun',
    nameRu: 'MG-206 «Тяжелый пулемет»',
    nameEn: 'MG-206 Heavy Machine Gun',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'autocannon',
    nameRu: 'AC-8 «Автопушка»',
    nameEn: 'AC-8 Autocannon',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'arc-thrower',
    nameRu: 'ARC-3 «Дуговой метатель»',
    nameEn: 'ARC-3 Arc Thrower',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'quasar-cannon',
    nameRu: 'LAS-99 «Квазарная пушка»',
    nameEn: 'LAS-99 Quasar Cannon',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'airburst-rocket',
    nameRu: 'RL-77 «Ракетная установка кассетного взрыва»',
    nameEn: 'RL-77 Airburst Rocket Launcher',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'commando',
    nameRu: 'MLS-4X «Коммандо»',
    nameEn: 'MLS-4X Commando',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'spear',
    nameRu: 'FAF-14 «Копье»',
    nameEn: 'FAF-14 Spear',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'railgun',
    nameRu: 'RS-422 «Рельсотрон»',
    nameEn: 'RS-422 Railgun',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'wasp-launcher',
    nameRu: 'StA-X3 «Пусковая установка ОСА»',
    nameEn: 'StA-X3 W.A.S.P. Launcher',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'breaching-hammer',
    nameRu: 'CQC-20 «Штурмовой молот»',
    nameEn: 'CQC-20 Breaching Hammer',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'plas-45-epoch',
    nameRu: 'PLAS-45 «Эпоха»',
    nameEn: 'PLAS-45 Epoch',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'bullet-storm',
    nameRu: 'MGX-42 «Ливень пуль»',
    nameEn: 'MGX-42 Bullet Storm',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'speargun',
    nameRu: 'S-11 «Гарпун»',
    nameEn: 'S-11 Speargun',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'defoliation-tool',
    nameRu: 'CQC-9 «Дефолиатор»',
    nameEn: 'CQC-9 Defoliation Tool',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'sterilizer',
    nameRu: 'TX-41 «Стерилизатор»',
    nameEn: 'TX-41 Sterilizer',
    category: 'support',
    warbond: 'chemical',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'expendable-napalm',
    nameRu: 'EAT-700 «Одноразовый напалм»',
    nameEn: 'EAT-700 Expendable Napalm',
    category: 'support',
    warbond: 'flame',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'eat-411-leveller',
    nameRu: 'EAT-411 «Уравнитель»',
    nameEn: 'EAT-411 Leveller',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'gl-52-deescalator',
    nameRu: 'GL-52 «Деэскалатор»',
    nameEn: 'GL-52 De-Escalator',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'gl-28-belt-fed',
    nameRu: 'GL-28 «Ленточный гранатомет»',
    nameEn: 'GL-28 Belt-Fed Grenade Launcher',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'c4-pack',
    nameRu: 'B/MD «Взрывчатка C4»',
    nameEn: 'B/MD C4 Pack',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'solo-silo',
    nameRu: 'MS-11 «Одиночная шахта»',
    nameEn: 'MS-11 Solo Silo',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'cremator',
    nameRu: 'B/FLAM-80 «Крематор»',
    nameEn: 'B/FLAM-80 Cremator',
    category: 'support',
    warbond: 'flame',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'maxigun',
    nameRu: 'M-1000 «Максиган»',
    nameEn: 'M-1000 Maxigun',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'one-true-flag',
    nameRu: 'CQC-1 «Единственный флаг»',
    nameEn: 'CQC-1 One True Flag',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },

  // --- BACKPACKS ---
  {
    id: 'supply-pack',
    nameRu: 'B-1 «Рюкзак с припасами»',
    nameEn: 'B-1 Supply Pack',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'jump-pack',
    nameRu: 'LIFT-850 «Прыжковый ранец»',
    nameEn: 'LIFT-850 Jump Pack',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'ballistic-shield',
    nameRu: 'SH-20 «Баллистический щит»',
    nameEn: 'SH-20 Ballistic Shield Backpack',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'guard-dog-bullet',
    nameRu: 'AX/AR-23 «Сторожевой пес»',
    nameEn: 'AX/AR-23 Guard Dog',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'guard-dog-laser',
    nameRu: 'AX/LAS-5 «Охранитель»',
    nameEn: 'AX/LAS-5 Rover',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'shield-generator-pack',
    nameRu: 'SH-32 «Рюкзак-генератор щита»',
    nameEn: 'SH-32 Shield Generator Pack',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'directional-shield',
    nameRu: 'SH-51 «Направленный щит»',
    nameEn: 'SH-51 Directional Shield',
    category: 'backpack',
    warbond: 'truth',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'hot-dog',
    nameRu: 'AX/FLAM-75 «Хот-дог»',
    nameEn: 'AX/FLAM-75 Hot Dog',
    category: 'backpack',
    warbond: 'flame',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'portable-hellbomb',
    nameRu: 'B-100 «Портативная хэллбомба»',
    nameEn: 'B-100 Portable Hellbomb',
    category: 'backpack',
    warbond: 'redacted',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'k-9-backpack',
    nameRu: 'AX/ARC-3 «К-9»',
    nameEn: 'AX/ARC-3 K-9',
    category: 'backpack',
    warbond: 'redacted',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'hover-pack',
    nameRu: 'LIFT-860 «Летающий ранец»',
    nameEn: 'LIFT-860 Hover Pack',
    category: 'backpack',
    warbond: 'redacted',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'dog-breath',
    nameRu: 'AX/TX-13 «Дыхание пса»',
    nameEn: 'AX/TX-13 Dog Breath',
    category: 'backpack',
    warbond: 'chemical',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'warp-pack',
    nameRu: 'LIFT-182 «Варп-ранец»',
    nameEn: 'LIFT-182 Warp Pack',
    category: 'backpack',
    warbond: 'redacted',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem'
  },

  // --- VEHICLES ---
  {
    id: 'supply-frv',
    nameRu: 'M-103 «Машина снабжения»',
    nameEn: 'M-103 Supply FRV',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Транспорт',
    typeEn: 'Vehicle Stratagem'
  },
  {
    id: 'incinerator-frv',
    nameRu: 'M-104 «Огнеметная машина»',
    nameEn: 'M-104 Incinerator FRV',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Транспорт',
    typeEn: 'Vehicle Stratagem'
  },
  {
    id: 'emancipator-exosuit',
    nameRu: 'EXO-49 Экзокостюм «Освободитель»',
    nameEn: 'EXO-49 Emancipator Exosuit',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Экзокостюм',
    typeEn: 'Exosuit Stratagem'
  },
  {
    id: 'patriot-exosuit',
    nameRu: 'EXO-45 Экзокостюм «Патриот»',
    nameEn: 'EXO-45 Patriot Exosuit',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Экзокостюм',
    typeEn: 'Exosuit Stratagem'
  },
  {
    id: 'recon-vehicle',
    nameRu: 'M-102 «Легкая разведывательная машина»',
    nameEn: 'M-102 Fast Recon Vehicle',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Транспорт',
    typeEn: 'Vehicle Stratagem'
  },
  {
    id: 'bastion-tank',
    nameRu: 'TD-220 «Бастион MK XVI»',
    nameEn: 'TD-220 Bastion MK XVI',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Транспорт',
    typeEn: 'Vehicle Stratagem'
  },
  {
    id: 'breakthrough-exosuit',
    nameRu: 'EXO-55 Экзокостюм «Прорыв»',
    nameEn: 'EXO-55 Breakthrough Exosuit',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Экзокостюм',
    typeEn: 'Exosuit Stratagem'
  },
  {
    id: 'lumberer-exosuit',
    nameRu: 'EXO-51 Экзокостюм «Лесоруб»',
    nameEn: 'EXO-51 Lumberer Exosuit',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Экзокостюм',
    typeEn: 'Exosuit Stratagem'
  },

  // --- SENTRIES ---
  {
    id: 'machine-gun-sentry',
    nameRu: 'A/MG-43 «Турель-пулемет»',
    nameEn: 'A/MG-43 Machine Gun Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'gatling-sentry',
    nameRu: 'A/G-16 «Турель Гатлинга»',
    nameEn: 'A/G-16 Gatling Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'autocannon-sentry',
    nameRu: 'A/AC-8 «Турель-автопушка»',
    nameEn: 'A/AC-8 Autocannon Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'mortar-sentry',
    nameRu: 'A/M-12 «Минометная турель»',
    nameEn: 'A/M-12 Mortar Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'rocket-sentry',
    nameRu: 'A/MLS-4X «Ракетная турель»',
    nameEn: 'A/MLS-4X Rocket Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'tesla-tower',
    nameRu: 'A/ARC-3 «Башня Тесла»',
    nameEn: 'A/ARC-3 Tesla Tower',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem'
  },
  {
    id: 'ems-mortar-sentry',
    nameRu: 'A/M-23 «ЭМ-минометная турель»',
    nameEn: 'A/M-23 EMS Mortar Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'laser-sentry',
    nameRu: 'A/LAS-98 «Лазерная турель»',
    nameEn: 'A/LAS-98 Laser Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'flame-sentry',
    nameRu: 'A/FLAM-40 «Огнеметная турель»',
    nameEn: 'A/FLAM-40 Flame Sentry',
    category: 'defensive',
    warbond: 'flame',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'gas-mortar-sentry',
    nameRu: 'A/GM-17 «Газовая минометная турель»',
    nameEn: 'A/GM-17 Gas Mortar Sentry',
    category: 'defensive',
    warbond: 'chemical',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },

  // --- EMPLACEMENTS ---
  {
    id: 'anti-personnel-mines',
    nameRu: 'MD-6 «Противопехотное минное поле»',
    nameEn: 'MD-6 Anti-Personnel Minefield',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem'
  },
  {
    id: 'incendiary-mines',
    nameRu: 'MD-I4 «Зажигательные мины»',
    nameEn: 'MD-I4 Incendiary Mines',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem'
  },
  {
    id: 'anti-tank-mines',
    nameRu: 'MD-17 «Противотанковые мины»',
    nameEn: 'MD-17 Anti-Tank Mines',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem'
  },
  {
    id: 'shield-relay',
    nameRu: 'FX-12 «Реле генератора щита»',
    nameEn: 'FX-12 Shield Generator Relay',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem'
  },
  {
    id: 'hmg-emplacement',
    nameRu: 'E/MG-101 «Тяжелая пулеметная установка»',
    nameEn: 'E/MG-101 HMG Emplacement',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Bridge Stratagem'
  },
  {
    id: 'grenadier-battlement',
    nameRu: 'E/GL-21 «Гранатометная позиция»',
    nameEn: 'E/GL-21 Grenadier Battlement',
    category: 'defensive',
    warbond: 'redacted',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Bridge Stratagem'
  },
  {
    id: 'gas-mines',
    nameRu: 'MD-8 «Газовые мины»',
    nameEn: 'MD-8 Gas Mines',
    category: 'defensive',
    warbond: 'chemical',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem'
  },
  {
    id: 'anti-tank-emplacement',
    nameRu: 'E/AT-12 «Противотанковая турель»',
    nameEn: 'E/AT-12 Anti-Tank Emplacement',
    category: 'defensive',
    warbond: 'redacted',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Bridge Stratagem'
  },

  // --- BODY ARMOR ---
  {
    id: 'b-01-tactical',
    nameRu: 'B-01 «Тактическая»',
    nameEn: 'B-01 Tactical',
    category: 'armor',
    warbond: 'default',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor'
  },
  {
    id: 'sc-30-trailblazer',
    nameRu: 'SC-30 «Следопыт»',
    nameEn: 'SC-30 Trailblazer Scout',
    category: 'armor',
    warbond: 'default',
    typeRu: 'Легкая броня',
    typeEn: 'Light Armor'
  },
  {
    id: 'ce-35-trench',
    nameRu: 'CE-35 «Траншейный инженер»',
    nameEn: 'CE-35 Trench Engineer',
    category: 'armor',
    warbond: 'default',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor'
  },
  {
    id: 'fs-23-battle',
    nameRu: 'FS-23 «Боевой мастер»',
    nameEn: 'FS-23 Battle Master',
    category: 'armor',
    warbond: 'default',
    typeRu: 'Тяжелая броня',
    typeEn: 'Heavy Armor'
  },
  {
    id: 'ce-81-juggernaut',
    nameRu: 'CE-81 «Джаггернаут»',
    nameEn: 'CE-81 Juggernaut',
    category: 'armor',
    warbond: 'superstore',
    typeRu: 'Тяжелая броня',
    typeEn: 'Heavy Armor'
  },
  {
    id: 'sa-25-steel',
    nameRu: 'SA-25 «Стальной горн»',
    nameEn: 'SA-25 Steel Trooper',
    category: 'armor',
    warbond: 'steeled',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor'
  },
  {
    id: 'ex-03-prototype',
    nameRu: 'EX-03 «Прототип 3»',
    nameEn: 'EX-03 Prototype 3',
    category: 'armor',
    warbond: 'cutting',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor'
  },
  {
    id: 'ce-27-ground',
    nameRu: 'CE-27 «Наземный штурмовик»',
    nameEn: 'CE-27 Ground Breaker',
    category: 'armor',
    warbond: 'democratic',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor'
  },
  {
    id: 'cw-9-white',
    nameRu: 'CW-9 «Белая мгла»',
    nameEn: 'CW-9 White Out',
    category: 'armor',
    warbond: 'polar',
    typeRu: 'Тяжелая броня',
    typeEn: 'Heavy Armor'
  },
  {
    id: 'ph-9-predator',
    nameRu: 'PH-9 «Хищник»',
    nameEn: 'PH-9 Predator',
    category: 'armor',
    warbond: 'viper',
    typeRu: 'Легкая броня',
    typeEn: 'Light Armor'
  },
  {
    id: 'i-09-heat',
    nameRu: 'I-09 «Испепелитель»',
    nameEn: 'I-09 Heatseeker',
    category: 'armor',
    warbond: 'flame',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor'
  },
  {
    id: 'af-50-noxious',
    nameRu: 'AF-50 «Токсичный страж»',
    nameEn: 'AF-50 Noxious Ranger',
    category: 'armor',
    warbond: 'chemical',
    typeRu: 'Легкая броня',
    typeEn: 'Light Armor'
  },
  {
    id: 'uf-16-inspector',
    nameRu: 'UF-16 «Инспектор»',
    nameEn: 'UF-16 Inspector',
    category: 'armor',
    warbond: 'truth',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor'
  },

  // --- HELMETS ---
  {
    id: 'b-01-tactical-helmet',
    nameRu: 'Шлем B-01 «Тактический»',
    nameEn: 'B-01 Tactical Helmet',
    category: 'helmet',
    warbond: 'default',
    typeRu: 'Шлем',
    typeEn: 'Helmet'
  },
  {
    id: 'sc-30-trailblazer-helmet',
    nameRu: 'Шлем SC-30 «Следопыт»',
    nameEn: 'SC-30 Trailblazer Scout Helmet',
    category: 'helmet',
    warbond: 'default',
    typeRu: 'Шлем',
    typeEn: 'Helmet'
  },
  {
    id: 'sa-25-steel-helmet',
    nameRu: 'Шлем SA-25 «Стальной горн»',
    nameEn: 'SA-25 Steel Trooper Helmet',
    category: 'helmet',
    warbond: 'steeled',
    typeRu: 'Шлем',
    typeEn: 'Helmet'
  },
  {
    id: 'ex-03-prototype-helmet',
    nameRu: 'Шлем EX-03 «Прототип 3»',
    nameEn: 'EX-03 Prototype 3 Helmet',
    category: 'helmet',
    warbond: 'cutting',
    typeRu: 'Шлем',
    typeEn: 'Helmet'
  },
  {
    id: 'ce-27-ground-helmet',
    nameRu: 'Шлем CE-27 «Наземный штурмовик»',
    nameEn: 'CE-27 Ground Breaker Helmet',
    category: 'helmet',
    warbond: 'democratic',
    typeRu: 'Шлем',
    typeEn: 'Helmet'
  },
  {
    id: 'cw-9-white-helmet',
    nameRu: 'Шлем CW-9 «Белая мгла»',
    nameEn: 'CW-9 White Out Helmet',
    category: 'helmet',
    warbond: 'polar',
    typeRu: 'Шлем',
    typeEn: 'Helmet'
  },
  {
    id: 'ph-9-predator-helmet',
    nameRu: 'Шлем PH-9 «Хищник»',
    nameEn: 'PH-9 Predator Helmet',
    category: 'helmet',
    warbond: 'viper',
    typeRu: 'Шлем',
    typeEn: 'Helmet'
  },
  {
    id: 'i-09-heat-helmet',
    nameRu: 'Шлем I-09 «Испепелитель»',
    nameEn: 'I-09 Heatseeker Helmet',
    category: 'helmet',
    warbond: 'flame',
    typeRu: 'Шлем',
    typeEn: 'Helmet'
  },
  {
    id: 'af-50-noxious-helmet',
    nameRu: 'Шлем AF-50 «Токсичный страж»',
    nameEn: 'AF-50 Noxious Ranger Helmet',
    category: 'helmet',
    warbond: 'chemical',
    typeRu: 'Шлем',
    typeEn: 'Helmet'
  },
  {
    id: 'uf-16-inspector-helmet',
    nameRu: 'Шлем UF-16 «Инспектор»',
    nameEn: 'UF-16 Inspector Helmet',
    category: 'helmet',
    warbond: 'truth',
    typeRu: 'Шлем',
    typeEn: 'Helmet'
  },

  // --- CAPES ---
  {
    id: 'will-of-people',
    nameRu: 'Воля Народа',
    nameEn: 'Will of the People',
    category: 'cape',
    warbond: 'default',
    typeRu: 'Плащ',
    typeEn: 'Cape'
  },
  {
    id: 'crimson-rider',
    nameRu: 'Багряный Всадник',
    nameEn: 'Crimson Rider',
    category: 'cape',
    warbond: 'steeled',
    typeRu: 'Плащ',
    typeEn: 'Cape'
  },
  {
    id: 'mantle-of-crit-over',
    nameRu: 'Мантия Настоящего Патриота',
    nameEn: 'Mantle of Critical Patriotism',
    category: 'cape',
    warbond: 'default',
    typeRu: 'Плащ',
    typeEn: 'Cape'
  },
  {
    id: 'bot-slayer',
    nameRu: 'Истребитель автоматонов',
    nameEn: 'Automaton Slayer',
    category: 'cape',
    warbond: 'default',
    typeRu: 'Плащ',
    typeEn: 'Cape'
  },
  {
    id: 'executioners-canopy',
    nameRu: 'Навес палача',
    nameEn: 'Executioner\'s Canopy',
    category: 'cape',
    warbond: 'democratic',
    typeRu: 'Плащ',
    typeEn: 'Cape'
  },
  {
    id: 'crest-of-shattered',
    nameRu: 'Герб разбитых надежд',
    nameEn: 'Crest of Shattered Soldiers',
    category: 'cape',
    warbond: 'polar',
    typeRu: 'Плащ',
    typeEn: 'Cape'
  },
  {
    id: 'mark-of-the-crimson',
    nameRu: 'Знак багряного когтя',
    nameEn: 'Mark of the Crimson Fang',
    category: 'cape',
    warbond: 'viper',
    typeRu: 'Плащ',
    typeEn: 'Cape'
  },
  {
    id: 'eclipse-of-valian',
    nameRu: 'Затмение доблести',
    nameEn: 'Eclipse of Valiance',
    category: 'cape',
    warbond: 'flame',
    typeRu: 'Плащ',
    typeEn: 'Cape'
  },
  {
    id: 'standard-of-authority',
    nameRu: 'Штандарт власти',
    nameEn: 'Standard of Authority',
    category: 'cape',
    warbond: 'truth',
    typeRu: 'Плащ',
    typeEn: 'Cape'
  }
];
