import { useState, useEffect, useRef, ReactNode } from 'react';
import { 
  Shuffle, 
  Settings, 
  Copy, 
  Check, 
  Sliders, 
  Crosshair, 
  Target, 
  Bomb, 
  Shield, 
  Tv, 
  Flame, 
  Zap, 
  Compass, 
  Cpu, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle, 
  BookOpen, 
  HelpCircle,
  Dices,
  Lock,
  Unlock,
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ITEMS, WARBONDS, LoadoutItem, Warbond } from './data';

export default function App() {
  // Enabled keys state (warbonds, slots, constraints, legacy filters)
  const [enabledKeys, setEnabledKeys] = useState<string[]>([]);
  const [isRolling, setIsRolling] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [isUltraRandom, setIsUltraRandom] = useState(false);

  // Active loadout state
  const [loadout, setLoadout] = useState<{
    primary: LoadoutItem | null;
    secondary: LoadoutItem | null;
    throwable: LoadoutItem | null;
    armor: LoadoutItem | null;
    helmet: LoadoutItem | null;
    cape: LoadoutItem | null;
    stratagems: LoadoutItem[];
    booster: LoadoutItem | null;
  }>({
    primary: null,
    secondary: null,
    throwable: null,
    armor: null,
    helmet: null,
    cape: null,
    stratagems: [],
    booster: null,
  });

  const ALL_KEYS = [
    "attachments", "chemical", "control", "cutting", "default", "democratic", "dust",
    "entrenched", "exo", "flame", "justice", "killzone", "law", "limited",
    "loadout-armor", "loadout-backpack", "loadout-booster", "loadout-defensive",
    "loadout-offensive", "loadout-primary", "loadout-secondary", "loadout-support",
    "loadout-throwable", "masters", "odst", "polar", "python", "redacted",
    "servants", "siege", "singlebackpack", "singlesupport", "steeled",
    "superstore", "truth", "urban", "viper"
  ];

  // Load URL state on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sParam = params.get('s');
    let loadedKeys = [...ALL_KEYS];

    if (sParam) {
      try {
        const decoded = decodeURIComponent(sParam);
        const parsed = JSON.parse(decoded);
        if (parsed && Array.isArray(parsed.c)) {
          loadedKeys = parsed.c;
        }
      } catch (e) {
        console.error("Ошибка парсинга URL параметров:", e);
      }
    }
    
    setEnabledKeys(loadedKeys);
    triggerRandomization(loadedKeys);
  }, []);

  const selectRandom = (pool: LoadoutItem[], fallback: LoadoutItem): LoadoutItem => {
    if (pool.length === 0) return fallback;
    return pool[Math.floor(Math.random() * pool.length)];
  };

  const rollStratagems = (pool: LoadoutItem[], count = 4, singleSupport: boolean, singleBackpack: boolean): LoadoutItem[] => {
    let attempts = 0;
    while (attempts < 500) {
      let result: LoadoutItem[] = [];
      let poolCopy = [...pool];
      poolCopy.sort(() => Math.random() - 0.5);

      for (let item of poolCopy) {
        if (result.length >= count) break;

        // Check single support weapon restriction
        if (item.category === 'support' && singleSupport) {
          const supportCount = result.filter(r => r.category === 'support').length;
          if (supportCount >= 1) continue;
        }

        // Check single backpack restriction
        if (item.category === 'backpack' && singleBackpack) {
          const backpackCount = result.filter(r => r.category === 'backpack').length;
          if (backpackCount >= 1) continue;
        }

        result.push(item);
      }

      if (result.length === count || (pool.length < count && result.length === pool.length)) {
        return result;
      }
      attempts++;
    }

    // Fallback: simple randomized selection
    let fallbackResult: LoadoutItem[] = [];
    let uniquePool = [...pool].sort(() => Math.random() - 0.5);
    for (let item of uniquePool) {
      if (fallbackResult.length >= count) break;
      fallbackResult.push(item);
    }
    return fallbackResult;
  };

  // The actual randomized generator function
  const triggerRandomization = (keys: string[], forceUltra: boolean = isUltraRandom) => {
    setLoadout(prev => {
      const newLoadout = { ...prev };

      // Helper to check if item is enabled based on active keys or ultra random mode
      const isItemEnabled = (item: LoadoutItem) => {
        if (forceUltra) return true; // Ultra Random ignores warbond filters
        return keys.includes(item.warbond);
      };

      // 1. Primary Weapon
      if (keys.includes('loadout-primary') || forceUltra) {
        const pool = ITEMS.filter(i => i.category === 'primary' && isItemEnabled(i));
        newLoadout.primary = selectRandom(pool, ITEMS.find(i => i.id === 'liberator')!);
      } else if (!newLoadout.primary) {
        newLoadout.primary = ITEMS.find(i => i.id === 'liberator')!;
      }

      // 2. Secondary Weapon
      if (keys.includes('loadout-secondary') || forceUltra) {
        const pool = ITEMS.filter(i => i.category === 'secondary' && isItemEnabled(i));
        newLoadout.secondary = selectRandom(pool, ITEMS.find(i => i.id === 'peacemaker')!);
      } else if (!newLoadout.secondary) {
        newLoadout.secondary = ITEMS.find(i => i.id === 'peacemaker')!;
      }

      // 3. Throwable
      if (keys.includes('loadout-throwable') || forceUltra) {
        const pool = ITEMS.filter(i => i.category === 'throwable' && isItemEnabled(i));
        newLoadout.throwable = selectRandom(pool, ITEMS.find(i => i.id === 'high-explosive')!);
      } else if (!newLoadout.throwable) {
        newLoadout.throwable = ITEMS.find(i => i.id === 'high-explosive')!;
      }

      // 4. Armor Suite (Armor, Helmet, Cape)
      if (keys.includes('loadout-armor') || forceUltra) {
        const armorPool = ITEMS.filter(i => i.category === 'armor' && isItemEnabled(i));
        newLoadout.armor = selectRandom(armorPool, ITEMS.find(i => i.id === 'b-01-tactical')!);

        const helmetPool = ITEMS.filter(i => i.category === 'helmet' && isItemEnabled(i));
        newLoadout.helmet = selectRandom(helmetPool, ITEMS.find(i => i.id === 'b-01-tactical-helmet')!);

        const capePool = ITEMS.filter(i => i.category === 'cape' && isItemEnabled(i));
        newLoadout.cape = selectRandom(capePool, ITEMS.find(i => i.id === 'will-of-people')!);
      } else {
        if (!newLoadout.armor) newLoadout.armor = ITEMS.find(i => i.id === 'b-01-tactical')!;
        if (!newLoadout.helmet) newLoadout.helmet = ITEMS.find(i => i.id === 'b-01-tactical-helmet')!;
        if (!newLoadout.cape) newLoadout.cape = ITEMS.find(i => i.id === 'will-of-people')!;
      }

      // 5. Booster
      if (keys.includes('loadout-booster') || forceUltra) {
        const pool = ITEMS.filter(i => i.category === 'booster' && isItemEnabled(i));
        newLoadout.booster = selectRandom(pool, ITEMS.find(i => i.id === 'hellpod-optimization')!);
      } else if (!newLoadout.booster) {
        newLoadout.booster = ITEMS.find(i => i.id === 'hellpod-optimization')!;
      }

      // 6. Stratagems
      let stratPool: LoadoutItem[] = [];
      if (keys.includes('loadout-support') || forceUltra) {
        stratPool.push(...ITEMS.filter(i => i.category === 'support' && isItemEnabled(i)));
      }
      if (keys.includes('loadout-backpack') || forceUltra) {
        stratPool.push(...ITEMS.filter(i => i.category === 'backpack' && isItemEnabled(i)));
      }
      if (keys.includes('loadout-offensive') || forceUltra) {
        stratPool.push(...ITEMS.filter(i => i.category === 'offensive' && isItemEnabled(i)));
      }
      if (keys.includes('loadout-defensive') || forceUltra) {
        stratPool.push(...ITEMS.filter(i => i.category === 'defensive' && isItemEnabled(i)));
      }

      if (stratPool.length > 0) {
        const singleSupport = forceUltra ? false : keys.includes('singlesupport');
        const singleBackpack = forceUltra ? false : keys.includes('singlebackpack');
        newLoadout.stratagems = rollStratagems(stratPool, 4, singleSupport, singleBackpack);
      } else if (newLoadout.stratagems.length === 0) {
        newLoadout.stratagems = ITEMS.filter(i => i.category === 'offensive').slice(0, 4);
      }

      return newLoadout;
    });
  };

  const rerollSlot = (category: string, index?: number) => {
    setLoadout(prev => {
      const newLoadout = { ...prev };
      const isItemEnabled = (item: LoadoutItem) => {
        if (isUltraRandom) return true;
        return enabledKeys.includes(item.warbond);
      };

      if (category === 'primary') {
        const pool = ITEMS.filter(i => i.category === 'primary' && isItemEnabled(i));
        newLoadout.primary = selectRandom(pool, ITEMS.find(i => i.id === 'liberator')!);
      } else if (category === 'secondary') {
        const pool = ITEMS.filter(i => i.category === 'secondary' && isItemEnabled(i));
        newLoadout.secondary = selectRandom(pool, ITEMS.find(i => i.id === 'peacemaker')!);
      } else if (category === 'throwable') {
        const pool = ITEMS.filter(i => i.category === 'throwable' && isItemEnabled(i));
        newLoadout.throwable = selectRandom(pool, ITEMS.find(i => i.id === 'high-explosive')!);
      } else if (category === 'armor') {
        const pool = ITEMS.filter(i => i.category === 'armor' && isItemEnabled(i));
        newLoadout.armor = selectRandom(pool, ITEMS.find(i => i.id === 'b-01-tactical')!);
      } else if (category === 'helmet') {
        const pool = ITEMS.filter(i => i.category === 'helmet' && isItemEnabled(i));
        newLoadout.helmet = selectRandom(pool, ITEMS.find(i => i.id === 'b-01-tactical-helmet')!);
      } else if (category === 'cape') {
        const pool = ITEMS.filter(i => i.category === 'cape' && isItemEnabled(i));
        newLoadout.cape = selectRandom(pool, ITEMS.find(i => i.id === 'will-of-people')!);
      } else if (category === 'booster') {
        const pool = ITEMS.filter(i => i.category === 'booster' && isItemEnabled(i));
        newLoadout.booster = selectRandom(pool, ITEMS.find(i => i.id === 'hellpod-optimization')!);
      } else if (category === 'stratagem' && typeof index === 'number') {
        let stratPool: LoadoutItem[] = [];
        if (enabledKeys.includes('loadout-support') || isUltraRandom) {
          stratPool.push(...ITEMS.filter(i => i.category === 'support' && isItemEnabled(i)));
        }
        if (enabledKeys.includes('loadout-backpack') || isUltraRandom) {
          stratPool.push(...ITEMS.filter(i => i.category === 'backpack' && isItemEnabled(i)));
        }
        if (enabledKeys.includes('loadout-offensive') || isUltraRandom) {
          stratPool.push(...ITEMS.filter(i => i.category === 'offensive' && isItemEnabled(i)));
        }
        if (enabledKeys.includes('loadout-defensive') || isUltraRandom) {
          stratPool.push(...ITEMS.filter(i => i.category === 'defensive' && isItemEnabled(i)));
        }

        if (stratPool.length > 0) {
          const singleSupport = isUltraRandom ? false : enabledKeys.includes('singlesupport');
          const singleBackpack = isUltraRandom ? false : enabledKeys.includes('singlebackpack');
          
          const otherStrats = newLoadout.stratagems.filter((_, idx) => idx !== index);
          const otherIds = otherStrats.map(s => s.id);

          let filteredPool = stratPool.filter(item => !otherIds.includes(item.id));
          if (filteredPool.length === 0) filteredPool = stratPool;

          let attempts = 0;
          let selected: LoadoutItem | null = null;
          while (attempts < 200) {
            const candidate = selectRandom(filteredPool, filteredPool[0]);
            
            if (candidate.category === 'support' && singleSupport) {
              const supportCount = otherStrats.filter(s => s.category === 'support').length;
              if (supportCount >= 1) {
                attempts++;
                continue;
              }
            }
            if (candidate.category === 'backpack' && singleBackpack) {
              const backpackCount = otherStrats.filter(s => s.category === 'backpack').length;
              if (backpackCount >= 1) {
                attempts++;
                continue;
              }
            }
            
            selected = candidate;
            break;
          }

          if (!selected) {
            selected = selectRandom(filteredPool, filteredPool[0]);
          }

          const updatedStrats = [...newLoadout.stratagems];
          updatedStrats[index] = selected;
          newLoadout.stratagems = updatedStrats;
        }
      }

      return newLoadout;
    });
  };

  const handleRandomize = () => {
    if (isRolling) return;
    setIsRolling(true);

    let rollCount = 0;
    const maxRolls = 12;

    const interval = setInterval(() => {
      triggerRandomization(enabledKeys);
      rollCount++;
      if (rollCount >= maxRolls) {
        clearInterval(interval);
        setIsRolling(false);
        triggerRandomization(enabledKeys);
      }
    }, 65);
  };

  const toggleKey = (key: string) => {
    setEnabledKeys(prev => {
      const next = prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key];
      updateUrl(next);
      return next;
    });
  };

  const updateUrl = (keys: string[]) => {
    const sObject = {
      v: 2,
      c: keys,
      wu: []
    };
    const sString = JSON.stringify(sObject);
    const sEncoded = encodeURIComponent(sString);
    const newUrl = `${window.location.origin}${window.location.pathname}?v=1783965518613&s=${sEncoded}`;
    window.history.replaceState(null, '', newUrl);
  };

  const handleCopyLink = () => {
    const sObject = {
      v: 2,
      c: enabledKeys,
      wu: []
    };
    const sString = JSON.stringify(sObject);
    const sEncoded = encodeURIComponent(sString);
    const shareUrl = `${window.location.origin}${window.location.pathname}?v=1783965518613&s=${sEncoded}`;

    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const setAllWarbonds = (enable: boolean) => {
    const warbondIds = WARBONDS.map(w => w.id);
    setEnabledKeys(prev => {
      let next = prev.filter(k => !warbondIds.includes(k));
      if (enable) {
        next = [...next, ...warbondIds];
      }
      updateUrl(next);
      return next;
    });
  };

  const setAllSlots = (enable: boolean) => {
    const slotKeys = [
      "loadout-primary", "loadout-secondary", "loadout-throwable", "loadout-armor", 
      "loadout-booster", "loadout-support", "loadout-backpack", "loadout-offensive", 
      "loadout-defensive"
    ];
    setEnabledKeys(prev => {
      let next = prev.filter(k => !slotKeys.includes(k));
      if (enable) {
        next = [...next, ...slotKeys];
      }
      updateUrl(next);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-neutral-100 font-sans selection:bg-[#FFE000] selection:text-black overflow-x-hidden pb-12">
      {/* HAZARD TOP BAR */}
      <div className="h-2 bg-gradient-to-r from-[#FFE000] via-black to-[#FFE000] bg-[size:20px_20px] animate-[pulse_3s_infinite]" />

      {/* HEADER SECTION */}
      <header className="max-w-7xl mx-auto px-4 pt-8 pb-4 text-center border-b border-neutral-800/60">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FFE000] animate-ping" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFE000]">
            Спутник Супер-Земли подключен
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-display mb-2 drop-shadow-[0_4px_12px_rgba(255,224,0,0.15)]">
          HELLDIVERS 2 <span className="text-[#FFE000]">ГЕНЕРАТОР СНАРЯЖЕНИЯ</span>
        </h1>
        <p className="text-sm md:text-base text-neutral-400 font-mono max-w-2xl mx-auto uppercase tracking-wide">
          Случайный подбор снаряжения с точной локализацией на русском языке
        </p>

        {/* TOP STATUS METER */}
        <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-xs text-neutral-500 font-mono">
          <div>
            АКТИВНО ПРЕДМЕТОВ: <span className="text-white font-bold">{ITEMS.length}</span>
          </div>
          <div className="hidden sm:block text-neutral-700">|</div>
          <div>
            АКТИВНО ЗАСЛУГ: <span className="text-white font-bold">
              {WARBONDS.filter(w => enabledKeys.includes(w.id)).length} / {WARBONDS.length}
            </span>
          </div>
          <div className="hidden sm:block text-neutral-700">|</div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#FFE000] font-bold">●</span> ЛОКАЛИЗАЦИЯ: ОФИЦИАЛЬНАЯ РУССКАЯ
          </div>
        </div>
      </header>

      {/* CORE CONTROL HUB */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-10 bg-[#07090c] p-4 border border-neutral-800/60">
          <div className="flex flex-col sm:flex-row items-stretch gap-4 flex-1">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              id="randomize-button"
              onClick={handleRandomize}
              disabled={isRolling}
              className="px-8 py-5 bg-[#FFE000] text-black font-extrabold uppercase text-base rounded-none shadow-[0_0_20px_rgba(255,224,0,0.2)] hover:shadow-[0_0_35px_rgba(255,224,0,0.45)] transition-all flex items-center justify-center gap-3 border-2 border-transparent hover:border-white cursor-pointer group disabled:opacity-80 disabled:cursor-wait min-w-[280px]"
            >
              <Shuffle className={`w-5 h-5 group-hover:rotate-180 transition-transform duration-500 ${isRolling ? 'animate-spin' : ''}`} />
              <span>{isRolling ? 'ПОДБОР СНАРЯЖЕНИЯ...' : 'ГЕНЕРИРОВАТЬ СНАРЯЖЕНИЕ'}</span>
            </motion.button>

            <button
              id="ultra-random-toggle"
              onClick={() => {
                const newVal = !isUltraRandom;
                setIsUltraRandom(newVal);
                // Trigger a roll with the new mode to immediately show the effect
                triggerRandomization(enabledKeys, newVal);
              }}
              className={`px-6 py-5 border text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all relative overflow-hidden cursor-pointer sm:min-w-[210px] ${
                isUltraRandom 
                  ? 'bg-red-950/25 border-red-500/80 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.25)]' 
                  : 'bg-neutral-950 hover:bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
              }`}
              title="Игнорирует любые лимиты (напр. одно оружие поддержки и один рюкзак) и выбирает снаряжение из всей игры без учета выбранных фильтров!"
            >
              {isUltraRandom ? (
                <>
                  <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>УЛЬТРА-ХАОС: АКТИВЕН</span>
                  <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 animate-pulse"></span>
                </>
              ) : (
                <>
                  <Dices className="w-4 h-4 text-neutral-500" />
                  <span>РЕЖИМ УЛЬТРА-ХАОСА</span>
                </>
              )}
            </button>
          </div>

          <div className="flex gap-2">
            <button
              id="share-link-button"
              onClick={handleCopyLink}
              className="flex-1 sm:flex-initial px-5 py-5 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-white font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
              title="Скопировать ссылку со всеми выбранными фильтрами"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-green-500">ССЫЛКА СКОПИРОВАНА</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#FFE000]" />
                  <span>ПОДЕЛИТЬСЯ СБОРКОЙ</span>
                </>
              )}
            </button>

            <button
              id="toggle-filters-button"
              onClick={() => setShowFilters(!showFilters)}
              className={`px-5 py-5 border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                showFilters 
                  ? 'bg-[#FFE000]/10 border-[#FFE000]/60 text-[#FFE000]' 
                  : 'bg-neutral-950 hover:bg-neutral-900 border-neutral-800 text-white'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span className="hidden md:inline">{showFilters ? 'СКРЫТЬ ФИЛЬТРЫ' : 'ПОКАЗАТЬ ФИЛЬТРЫ'}</span>
              <span className="md:hidden">ФИЛЬТРЫ</span>
            </button>
          </div>
        </div>

        {/* LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LOADOUT CARDS DISPLAY */}
          <div className={`space-y-8 ${showFilters ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
            
            {/* WEAPONS & TACTICAL SUITE */}
            <div>
              <div className="flex items-center gap-2 mb-4 border-l-4 border-[#FFE000] pl-3">
                <h3 className="font-display font-extrabold text-xl uppercase tracking-wider text-white">
                  ТАКТИЧЕСКИЙ АРСЕНАЛ
                </h3>
                <span className="text-[10px] font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                  ОРУЖИЕ И ЭКИПИРОВКА
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* PRIMARY WEAPON CARD */}
                <LoadoutCard
                  categoryName="ОСНОВНОЕ ОРУЖИЕ"
                  item={loadout.primary}
                  icon={<Crosshair className="w-4 h-4" />}
                  isRolling={isRolling}
                  locked={!enabledKeys.includes('loadout-primary')}
                  onToggleLock={() => toggleKey('loadout-primary')}
                  onReroll={() => rerollSlot('primary')}
                />

                {/* SECONDARY WEAPON CARD */}
                <LoadoutCard
                  categoryName="ВСП_ ОРУЖИЕ"
                  item={loadout.secondary}
                  icon={<Target className="w-4 h-4" />}
                  isRolling={isRolling}
                  locked={!enabledKeys.includes('loadout-secondary')}
                  onToggleLock={() => toggleKey('loadout-secondary')}
                  onReroll={() => rerollSlot('secondary')}
                />

                {/* THROWABLE CARD */}
                <LoadoutCard
                  categoryName="ГРАНАТА"
                  item={loadout.throwable}
                  icon={<Bomb className="w-4 h-4" />}
                  isRolling={isRolling}
                  locked={!enabledKeys.includes('loadout-throwable')}
                  onToggleLock={() => toggleKey('loadout-throwable')}
                  onReroll={() => rerollSlot('throwable')}
                />
              </div>
            </div>

            {/* STRATAGEMS SECTION */}
            <div>
              <div className="flex items-center gap-2 mb-4 border-l-4 border-[#FFE000] pl-3">
                <h3 className="font-display font-extrabold text-xl uppercase tracking-wider text-white">
                  СУПЕР-РАЗРУШИТЕЛЬНЫЕ СТРАТАГЕМЫ
                </h3>
                <span className="text-[10px] font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                  ПОДДЕРЖКА С ОРБИТЫ
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => {
                  const strat = loadout.stratagems[index] || null;
                  return (
                    <LoadoutCard
                      key={`strat-${index}`}
                      categoryName={`СТРАТАГЕМА ${index + 1}`}
                      item={strat}
                      icon={<Zap className="w-4 h-4 text-[#FFE000]" />}
                      isRolling={isRolling}
                      isStratagem={true}
                      // For stratagems, they are collectively locked or enabled via types
                      locked={
                        !enabledKeys.includes('loadout-support') && 
                        !enabledKeys.includes('loadout-backpack') && 
                        !enabledKeys.includes('loadout-offensive') && 
                        !enabledKeys.includes('loadout-defensive')
                      }
                      onToggleLock={() => {
                        // Toggle all stratagem lock status together for simplicity
                        const stratKeys = ['loadout-support', 'loadout-backpack', 'loadout-offensive', 'loadout-defensive'];
                        const anyActive = stratKeys.some(k => enabledKeys.includes(k));
                        setEnabledKeys(prev => {
                          let next = prev.filter(k => !stratKeys.includes(k));
                          if (!anyActive) {
                            next = [...next, ...stratKeys];
                          }
                          updateUrl(next);
                          return next;
                        });
                      }}
                      onReroll={() => rerollSlot('stratagem', index)}
                    />
                  );
                })}
              </div>
            </div>

            {/* ARMOR SUITE SECTION */}
            <div>
              <div className="flex items-center gap-2 mb-4 border-l-4 border-[#FFE000] pl-3">
                <h3 className="font-display font-extrabold text-xl uppercase tracking-wider text-white">
                  БРОНЕКОМПЛЕКТ «ПАТРИОТ»
                </h3>
                <span className="text-[10px] font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                  ЗАЩИТА И МАВИСКА
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* BODY ARMOR CARD */}
                <LoadoutCard
                  categoryName="КОМПЛЕКТ БРОНИ"
                  item={loadout.armor}
                  icon={<Shield className="w-4 h-4" />}
                  isRolling={isRolling}
                  locked={!enabledKeys.includes('loadout-armor')}
                  onToggleLock={() => toggleKey('loadout-armor')}
                  onReroll={() => rerollSlot('armor')}
                />

                {/* HELMET CARD */}
                <LoadoutCard
                  categoryName="ТАКТИЧЕСКИЙ ШЛЕМ"
                  item={loadout.helmet}
                  icon={<Cpu className="w-4 h-4" />}
                  isRolling={isRolling}
                  locked={!enabledKeys.includes('loadout-armor')}
                  onToggleLock={() => toggleKey('loadout-armor')}
                  onReroll={() => rerollSlot('helmet')}
                />

                {/* CAPE CARD */}
                <LoadoutCard
                  categoryName="ПАТРИОТИЧЕСКИЙ ПЛАЩ"
                  item={loadout.cape}
                  icon={<Compass className="w-4 h-4" />}
                  isRolling={isRolling}
                  locked={!enabledKeys.includes('loadout-armor')}
                  onToggleLock={() => toggleKey('loadout-armor')}
                  onReroll={() => rerollSlot('cape')}
                />
              </div>
            </div>

            {/* MISSION BOOSTER */}
            <div>
              <div className="flex items-center gap-2 mb-4 border-l-4 border-[#FFE000] pl-3">
                <h3 className="font-display font-extrabold text-xl uppercase tracking-wider text-white">
                  УСИЛЕНИЕ ДЕСАНТНОЙ КАПСУЛЫ
                </h3>
                <span className="text-[10px] font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                  БУСТЕРЫ МИССИИ
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {/* BOOSTER CARD */}
                <LoadoutCard
                  categoryName="МИССИОННЫЙ БУСТЕР"
                  item={loadout.booster}
                  icon={<Flame className="w-4 h-4 text-orange-500" />}
                  isRolling={isRolling}
                  locked={!enabledKeys.includes('loadout-booster')}
                  onToggleLock={() => toggleKey('loadout-booster')}
                  onReroll={() => rerollSlot('booster')}
                />
              </div>
            </div>

          </div>

          {/* FILTERS / SETTINGS PANEL */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="lg:col-span-4 space-y-6"
              >
                <div className="bg-[#0e1014] border border-neutral-800 p-6 rounded-none space-y-6 sticky top-6">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-[#FFE000]" />
                      <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white">
                        НАСТРОЙКИ ПОДБОРА
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-[#FFE000] bg-[#FFE000]/10 border border-[#FFE000]/20 px-2 py-0.5 uppercase">
                      Панель HUD
                    </span>
                  </div>

                  {/* SLOTS CONTROL GROUP */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-mono font-bold uppercase text-neutral-400 tracking-wider">
                        1. ВКЛЮЧИТЬ В РАНДОМ:
                      </h4>
                      <div className="flex gap-2 text-[10px] font-mono">
                        <button 
                          onClick={() => setAllSlots(true)}
                          className="text-[#FFE000] hover:underline cursor-pointer"
                        >
                          ВСЕ
                        </button>
                        <span className="text-neutral-700">/</span>
                        <button 
                          onClick={() => setAllSlots(false)}
                          className="text-neutral-500 hover:underline cursor-pointer"
                        >
                          СБРОСИИЬ
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <FilterCheckbox
                        id="loadout-primary"
                        label="Основное оружие"
                        checked={enabledKeys.includes('loadout-primary')}
                        onChange={() => toggleKey('loadout-primary')}
                      />
                      <FilterCheckbox
                        id="loadout-secondary"
                        label="Вспомогательное оружие"
                        checked={enabledKeys.includes('loadout-secondary')}
                        onChange={() => toggleKey('loadout-secondary')}
                      />
                      <FilterCheckbox
                        id="loadout-throwable"
                        label="Граната"
                        checked={enabledKeys.includes('loadout-throwable')}
                        onChange={() => toggleKey('loadout-throwable')}
                      />
                      <FilterCheckbox
                        id="loadout-armor"
                        label="Комплект брони (Шлем/Плащ)"
                        checked={enabledKeys.includes('loadout-armor')}
                        onChange={() => toggleKey('loadout-armor')}
                      />
                      <FilterCheckbox
                        id="loadout-support"
                        label="Оружие поддержки (Стратагема)"
                        checked={enabledKeys.includes('loadout-support')}
                        onChange={() => toggleKey('loadout-support')}
                      />
                      <FilterCheckbox
                        id="loadout-backpack"
                        label="Ранец / Рюкзак (Стратагема)"
                        checked={enabledKeys.includes('loadout-backpack')}
                        onChange={() => toggleKey('loadout-backpack')}
                      />
                      <FilterCheckbox
                        id="loadout-offensive"
                        label="Наступательные стратагемы"
                        checked={enabledKeys.includes('loadout-offensive')}
                        onChange={() => toggleKey('loadout-offensive')}
                      />
                      <FilterCheckbox
                        id="loadout-defensive"
                        label="Оборонительные стратагемы"
                        checked={enabledKeys.includes('loadout-defensive')}
                        onChange={() => toggleKey('loadout-defensive')}
                      />
                      <FilterCheckbox
                        id="loadout-booster"
                        label="Миссионный бустер"
                        checked={enabledKeys.includes('loadout-booster')}
                        onChange={() => toggleKey('loadout-booster')}
                      />
                    </div>
                  </div>

                  {/* WARBONDS CONTROL GROUP */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-mono font-bold uppercase text-neutral-400 tracking-wider">
                        2. АКТИВНЫЕ ЗАСЛУГ И НАБОРЫ:
                      </h4>
                      <div className="flex gap-2 text-[10px] font-mono">
                        <button 
                          onClick={() => setAllWarbonds(true)}
                          className="text-[#FFE000] hover:underline cursor-pointer"
                        >
                          ВСЕ
                        </button>
                        <span className="text-neutral-700">/</span>
                        <button 
                          onClick={() => setAllWarbonds(false)}
                          className="text-neutral-500 hover:underline cursor-pointer"
                        >
                          СБРОСИИЬ
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {WARBONDS.map(w => (
                        <FilterCheckbox
                          key={w.id}
                          id={w.id}
                          label={w.nameRu}
                          subLabel={w.nameEn}
                          checked={enabledKeys.includes(w.id)}
                          onChange={() => toggleKey(w.id)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* RULES / CONSTRAINTS */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-neutral-400 tracking-wider mb-3">
                      3. ОГРАНИЧЕНИЯ И ПРАВИЛА ПОДБОРА:
                    </h4>

                    <div className="space-y-2.5">
                      <FilterCheckbox
                        id="singlesupport"
                        label="Не более 1 Оружия поддержки"
                        checked={enabledKeys.includes('singlesupport')}
                        onChange={() => toggleKey('singlesupport')}
                        isRule={true}
                      />
                      <FilterCheckbox
                        id="singlebackpack"
                        label="Не более 1 Рюкзака"
                        checked={enabledKeys.includes('singlebackpack')}
                        onChange={() => toggleKey('singlebackpack')}
                        isRule={true}
                      />
                    </div>
                  </div>

                  {/* URL COMPATIBILITY FLAGS (LEGACY / BACKGROUND CHECKS) */}
                  <div className="border-t border-neutral-800 pt-4">
                    <details className="group">
                      <summary className="text-[10px] font-mono text-neutral-500 hover:text-neutral-300 uppercase tracking-widest cursor-pointer select-none list-none flex items-center justify-between">
                        <span>СОВМЕСТИМОСТЬ ПАКЕТОВ (LEGACY)</span>
                        <ChevronDown className="w-3.5 h-3.5 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="grid grid-cols-2 gap-2 mt-3 text-[10px] font-mono">
                        {[
                          { id: 'attachments', label: 'Attachments' },
                          { id: 'control', label: 'Control' },
                          { id: 'dust', label: 'Dust Pack' },
                          { id: 'entrenched', label: 'Entrenched' },
                          { id: 'justice', label: 'Justice Pack' },
                          { id: 'killzone', label: 'Killzone' },
                          { id: 'law', label: 'Law Enforcer' },
                          { id: 'limited', label: 'Limited Pack' },
                          { id: 'masters', label: 'Masters DLC' },
                          { id: 'odst', label: 'ODST Droppers' },
                          { id: 'python', label: 'Python Set' },
                          { id: 'servants', label: 'Democr. Servants' },
                          { id: 'siege', label: 'Siege Specialist' },
                          { id: 'urban', label: 'Urban Camo' },
                        ].map(legacy => (
                          <label key={legacy.id} className="flex items-center gap-1.5 cursor-pointer hover:text-[#FFE000] py-0.5">
                            <input
                              type="checkbox"
                              checked={enabledKeys.includes(legacy.id)}
                              onChange={() => toggleKey(legacy.id)}
                              className="accent-[#FFE000]"
                            />
                            <span>{legacy.label}</span>
                          </label>
                        ))}
                      </div>
                    </details>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-4 mt-16 text-center text-xs text-neutral-600 font-mono space-y-2 border-t border-neutral-900 pt-8">
        <p className="uppercase tracking-widest">
          РАЗРАБОТАНО ДЛЯ ДЕМОКРАТИЧЕСКИХ ВОЙСК СУПЕР-ЗЕМЛИ. 2026.
        </p>
        <p>
          Снаряжение полностью синхронизировано с обновлениями 2026 года, включая "Стражи истины", "Химические агенты", "Пламя свободы" и др.
        </p>
        <p className="text-[10px] text-neutral-700">
          Helldivers 2 is a registered trademark of Sony Interactive Entertainment LLC. This site is a fan-made, non-commercial Russian localized loadout utility.
        </p>
      </footer>
    </div>
  );
}

// ----------------------------------------------------------------------------
// LOADOUT CARD COMPONENT
// ----------------------------------------------------------------------------
interface LoadoutCardProps {
  key?: any;
  categoryName: string;
  item: LoadoutItem | null;
  icon: ReactNode;
  isRolling: boolean;
  isStratagem?: boolean;
  locked?: boolean;
  onToggleLock?: () => void;
  onReroll?: () => void;
}

function LoadoutCard({ 
  categoryName, 
  item, 
  icon, 
  isRolling, 
  isStratagem = false,
  locked = false,
  onToggleLock,
  onReroll
}: LoadoutCardProps) {
  
  const getWarbondName = (id: string) => {
    const w = WARBONDS.find(wb => wb.id === id);
    return w ? w.nameRu : 'Мобилизация!';
  };

  return (
    <div className={`relative group bg-[#0e1014] border ${
      locked 
        ? 'border-neutral-800/40 opacity-60' 
        : 'border-neutral-800 hover:border-[#FFE000]/60 hover:shadow-[0_0_15px_rgba(255,224,0,0.06)]'
    } p-4 flex flex-col justify-between h-[165px] transition-all relative`}>
      
      {/* SOLID CARD TOP INDICATOR BAR */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] ${locked ? 'bg-neutral-800' : 'bg-[#FFE000]'}`} />

      {/* CARD HEADER */}
      <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-wider text-neutral-400 mb-2">
        <div className="flex items-center gap-1.5">
          <span className={locked ? 'text-neutral-500' : 'text-[#FFE000]'}>{icon}</span>
          <span>{categoryName}</span>
        </div>
        
        {/* LOCK & REROLL TOGGLE */}
        <div className="flex items-center gap-1.5">
          {onReroll && !locked && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onReroll();
              }}
              className="text-neutral-500 hover:text-[#FFE000] p-1 rounded transition-all cursor-pointer group/reroll"
              title="Перегенерировать этот слот"
            >
              <RefreshCw className="w-3.5 h-3.5 text-neutral-400 group-hover/reroll:text-[#FFE000] transition-transform duration-300 group-hover/reroll:rotate-180" />
            </button>
          )}
          {onToggleLock && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onToggleLock();
              }}
              className="text-neutral-500 hover:text-[#FFE000] p-1 rounded transition-colors cursor-pointer"
              title={locked ? "Разблокировать для рандома" : "Заблокировать значение"}
            >
              {locked ? <Lock className="w-3.5 h-3.5 text-neutral-500" /> : <Unlock className="w-3.5 h-3.5 text-[#FFE000]" />}
            </button>
          )}
        </div>
      </div>

      {/* CARD CONTENT (ITEM DETAILS) */}
      <div className="flex-1 flex flex-col justify-center my-1">
        {item ? (
          <motion.div
            key={item.id}
            animate={isRolling ? { scale: [1, 1.04, 1] } : { scale: 1 }}
            transition={{ duration: 0.1 }}
          >
            <h2 className="text-base font-extrabold uppercase leading-snug text-white font-display line-clamp-2 tracking-wide group-hover:text-[#FFE000] transition-colors">
              {item.nameRu}
            </h2>
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-0.5 line-clamp-1">
              {item.typeRu || 'Снаряжение'}
            </div>
            <div className="text-[10px] font-mono text-neutral-600 italic leading-none line-clamp-1 mt-1">
              {item.nameEn}
            </div>
          </motion.div>
        ) : (
          <div className="text-neutral-600 font-mono text-xs uppercase tracking-widest text-center py-4">
            Пусто
          </div>
        )}
      </div>

      {/* CARD FOOTER */}
      <div className="border-t border-neutral-900 pt-2 flex items-center justify-between text-[9px] font-mono">
        {item ? (
          <>
            <span className="text-[#FFE000] font-bold uppercase truncate max-w-[130px]">
              [ {getWarbondName(item.warbond)} ]
            </span>
            <span className="text-neutral-600 text-[8px] uppercase">
              HD2
            </span>
          </>
        ) : (
          <span className="text-neutral-600">[ ОЖИДАНИЕ ]</span>
        )}
      </div>

    </div>
  );
}

// ----------------------------------------------------------------------------
// FILTER CHECKBOX COMPONENT
// ----------------------------------------------------------------------------
interface FilterCheckboxProps {
  key?: any;
  id: string;
  label: string;
  subLabel?: string;
  checked: boolean;
  onChange: () => void;
  isRule?: boolean;
}

function FilterCheckbox({ id, label, subLabel, checked, onChange, isRule = false }: FilterCheckboxProps) {
  return (
    <label 
      className={`flex items-start gap-3 p-2 border transition-all cursor-pointer select-none group ${
        checked 
          ? isRule 
            ? 'bg-blue-950/10 border-blue-900 text-blue-300' 
            : 'bg-[#FFE000]/5 border-[#FFE000]/40 text-white'
          : 'bg-neutral-900/40 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
      }`}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      
      {/* CUSTOM HELLDIVERS CHECKBOX BOX */}
      <div className={`mt-0.5 w-4 h-4 flex items-center justify-center border transition-all ${
        checked 
          ? isRule 
            ? 'border-blue-400 bg-blue-500 text-black' 
            : 'border-[#FFE000] bg-[#FFE000] text-black'
          : 'border-neutral-700 bg-transparent group-hover:border-neutral-500'
      }`}>
        {checked && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
      </div>

      <div className="flex-1 min-w-0">
        <div className={`text-xs font-bold leading-none uppercase tracking-wide transition-colors ${
          checked ? (isRule ? 'text-blue-200' : 'text-[#FFE000]') : 'text-neutral-400 group-hover:text-neutral-200'
        }`}>
          {label}
        </div>
        {subLabel && (
          <div className="text-[9px] font-mono text-neutral-500 mt-0.5 uppercase tracking-wider">
            {subLabel}
          </div>
        )}
      </div>
    </label>
  );
}
