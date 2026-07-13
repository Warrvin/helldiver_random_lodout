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
    nameRu: 'AR-23P «Освободитель-пронзатель»',
    nameEn: 'AR-23P Liberator Penetrator',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },
  {
    id: 'liberator-concussive',
    nameRu: 'AR-23 «Взрывной освободитель»',
    nameEn: 'AR-23 Concussive',
    category: 'primary',
    warbond: 'steeled',
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
    id: 'adjudicator',
    nameRu: 'BR-14 «Судья»',
    nameEn: 'BR-14 Adjudicator',
    category: 'primary',
    warbond: 'democratic',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle'
  },
  {
    id: 'diligence',
    nameRu: 'R-63 «Равновесие»',
    nameEn: 'R-63 Diligence',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle'
  },
  {
    id: 'diligence-counter-sniper',
    nameRu: 'R-63CS «Равновесие-антиснайпер»',
    nameEn: 'R-63CS Diligence Counter Sniper',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle'
  },
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
    id: 'halt-smg',
    nameRu: 'SMG-20 «Преграда»',
    nameEn: 'SMG-20 Halt',
    category: 'primary',
    warbond: 'truth',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun'
  },
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
    id: 'punisher-plasma',
    nameRu: 'SG-8P «Плазменный каратель»',
    nameEn: 'SG-8P Punisher Plasma',
    category: 'primary',
    warbond: 'cutting',
    typeRu: 'Плазменный дробовик',
    typeEn: 'Plasma Shotgun'
  },
  {
    id: 'breaker',
    nameRu: 'SG-225 «Крушитель»',
    nameEn: 'SG-225 Breaker',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Автоматический дробовик',
    typeEn: 'Automatic Shotgun'
  },
  {
    id: 'breaker-spray-pray',
    nameRu: 'SG-225SP «Крушитель-пылитель»',
    nameEn: 'SG-225SP Breaker Spray&Pray',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Автоматический дробовик',
    typeEn: 'Automatic Shotgun'
  },
  {
    id: 'breaker-incendiary',
    nameRu: 'SG-225IE «Зажигательный крушитель»',
    nameEn: 'SG-225IE Breaker Incendiary',
    category: 'primary',
    warbond: 'steeled',
    typeRu: 'Автоматический дробовик',
    typeEn: 'Automatic Shotgun'
  },
  {
    id: 'cookout',
    nameRu: 'SG-451 «Жаркое»',
    nameEn: 'SG-451 Cookout',
    category: 'primary',
    warbond: 'flame',
    typeRu: 'Помповый дробовик',
    typeEn: 'Pump-Action Shotgun'
  },
  {
    id: 'halt-shotgun',
    nameRu: 'SG-20 «Преграда»',
    nameEn: 'SG-20 Halt',
    category: 'primary',
    warbond: 'truth',
    typeRu: 'Помповый дробовик',
    typeEn: 'Pump-Action Shotgun'
  },
  {
    id: 'scythe',
    nameRu: 'LAS-5 «Коса»',
    nameEn: 'LAS-5 Scythe',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Энергетическое оружие',
    typeEn: 'Energy Weapon'
  },
  {
    id: 'sickle',
    nameRu: 'LAS-16 «Серп»',
    nameEn: 'LAS-16 Sickle',
    category: 'primary',
    warbond: 'cutting',
    typeRu: 'Энергетическое оружие',
    typeEn: 'Energy Weapon'
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
    id: 'blitzer',
    nameRu: 'ARC-12 «Грозовик»',
    nameEn: 'ARC-12 Blitzer',
    category: 'primary',
    warbond: 'cutting',
    typeRu: 'Дуговое оружие',
    typeEn: 'Arc Weapon'
  },
  {
    id: 'eruptor',
    nameRu: 'R-36 «Взрывотехник»',
    nameEn: 'R-36 Eruptor',
    category: 'primary',
    warbond: 'democratic',
    typeRu: 'Болтовая винтовка',
    typeEn: 'Bolt-Action Rifle'
  },
  {
    id: 'crossbow',
    nameRu: 'CB-9 «Взрывной арбалет»',
    nameEn: 'CB-9 Exploding Crossbow',
    category: 'primary',
    warbond: 'democratic',
    typeRu: 'Взрывной арбалет',
    typeEn: 'Explosive Crossbow'
  },
  {
    id: 'torcher',
    nameRu: 'FLAM-66 «Поджигатель»',
    nameEn: 'FLAM-66 Torcher',
    category: 'primary',
    warbond: 'flame',
    typeRu: 'Огнеметное оружие',
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
  {
    id: 'peacemaker',
    nameRu: 'P-2 «Миротворец»',
    nameEn: 'P-2 Peacemaker',
    category: 'secondary',
    warbond: 'default',
    typeRu: 'Пистолет',
    typeEn: 'Pistol'
  },
  {
    id: 'redeemer',
    nameRu: 'P-19 «Спаситель»',
    nameEn: 'P-19 Redeemer',
    category: 'secondary',
    warbond: 'default',
    typeRu: 'Автоматический пистолет',
    typeEn: 'Automatic Pistol'
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
    id: 'dagger',
    nameRu: 'LAS-7 «Кинжал»',
    nameEn: 'LAS-7 Dagger',
    category: 'secondary',
    warbond: 'cutting',
    typeRu: 'Лазерный пистолет',
    typeEn: 'Laser Pistol'
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
    id: 'verdict',
    nameRu: 'P-113 «Вердикт»',
    nameEn: 'P-113 Verdict',
    category: 'secondary',
    warbond: 'polar',
    typeRu: 'Пистолет',
    typeEn: 'Pistol'
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
    id: 'stim-pistol',
    nameRu: 'С-10 «Пистолет-стимулятор»',
    nameEn: 'C-10 Stim Pistol',
    category: 'secondary',
    warbond: 'chemical',
    typeRu: 'Вспомогательный пистолет',
    typeEn: 'Support Pistol'
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

  // --- THROWABLES ---
  {
    id: 'high-explosive',
    nameRu: 'G-12 Фугасная',
    nameEn: 'G-12 High Explosive',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Фугасная граната',
    typeEn: 'High Explosive Grenade'
  },
  {
    id: 'frag-grenade',
    nameRu: 'G-6 Осколочная',
    nameEn: 'G-6 Frag',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Осколочная граната',
    typeEn: 'Frag Grenade'
  },
  {
    id: 'impact-grenade',
    nameRu: 'G-16 Контактная',
    nameEn: 'G-16 Impact',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Контактная граната',
    typeEn: 'Impact Grenade'
  },
  {
    id: 'incendiary-grenade',
    nameRu: 'G-10 Зажигательная',
    nameEn: 'G-10 Incendiary',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Зажигательная граната',
    typeEn: 'Incendiary Grenade'
  },
  {
    id: 'stun-grenade',
    nameRu: 'G-23 Светошумовая',
    nameEn: 'G-23 Stun',
    category: 'throwable',
    warbond: 'cutting',
    typeRu: 'Светошумовая граната',
    typeEn: 'Stun Grenade'
  },
  {
    id: 'thermite-grenade',
    nameRu: 'G-123 Термитная',
    nameEn: 'G-123 Thermite',
    category: 'throwable',
    warbond: 'democratic',
    typeRu: 'Термитная граната',
    typeEn: 'Thermite Grenade'
  },
  {
    id: 'gas-grenade',
    nameRu: 'G-4 Химическая',
    nameEn: 'G-4 Gas',
    category: 'throwable',
    warbond: 'chemical',
    typeRu: 'Химическая граната',
    typeEn: 'Gas Grenade'
  },
  {
    id: 'throwing-knife',
    nameRu: 'K-2 Метательный нож',
    nameEn: 'K-2 Throwing Knife',
    category: 'throwable',
    warbond: 'viper',
    typeRu: 'Холодное оружие',
    typeEn: 'Throwing Knife'
  },
  {
    id: 'incendiary-impact',
    nameRu: 'G-13 Контактная зажигательная',
    nameEn: 'G-13 Incendiary Impact',
    category: 'throwable',
    warbond: 'flame',
    typeRu: 'Контактная зажигательная граната',
    typeEn: 'Incendiary Impact Grenade'
  },
  {
    id: 'smoke-grenade',
    nameRu: 'G-3 Дымовая',
    nameEn: 'G-3 Smoke',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Дымовая граната',
    typeEn: 'Smoke Grenade'
  },

  // --- BOOSTERS ---
  {
    id: 'hellpod-optimization',
    nameRu: 'Оптимизация пространства адской капсулы',
    nameEn: 'Hellpod Space Optimization',
    category: 'booster',
    warbond: 'default',
    typeRu: 'Усиление',
    typeEn: 'Booster'
  },
  {
    id: 'vitality-enhancement',
    nameRu: 'Повышение жизнеспособности',
    nameEn: 'Vitality Enhancement',
    category: 'booster',
    warbond: 'default',
    typeRu: 'Усиление',
    typeEn: 'Booster'
  },
  {
    id: 'uav-recon',
    nameRu: 'Бустер разведки БПЛА',
    nameEn: 'UAV Recon Booster',
    category: 'booster',
    warbond: 'default',
    typeRu: 'Усиление',
    typeEn: 'Booster'
  },
  {
    id: 'stamina-enhancement',
    nameRu: 'Повышение выносливости',
    nameEn: 'Stamina Enhancement',
    category: 'booster',
    warbond: 'default',
    typeRu: 'Усиление',
    typeEn: 'Booster'
  },
  {
    id: 'muscle-enhancement',
    nameRu: 'Улучшение мускулатуры',
    nameEn: 'Muscle Enhancement',
    category: 'booster',
    warbond: 'default',
    typeRu: 'Усиление',
    typeEn: 'Booster'
  },
  {
    id: 'increased-reinforcement',
    nameRu: 'Увеличенный бюджет подкреплений',
    nameEn: 'Increased Reinforcement Budget',
    category: 'booster',
    warbond: 'default',
    typeRu: 'Усиление',
    typeEn: 'Booster'
  },
  {
    id: 'flexible-reinforcement',
    nameRu: 'Гибкий бюджет подкреплений',
    nameEn: 'Flexible Reinforcement Budget',
    category: 'booster',
    warbond: 'default',
    typeRu: 'Усиление',
    typeEn: 'Booster'
  },
  {
    id: 'expert-extraction',
    nameRu: 'Опытный пилот эвакуационного корабля',
    nameEn: 'Expert Extraction Pilot',
    category: 'booster',
    warbond: 'polar',
    typeRu: 'Усиление',
    typeEn: 'Booster'
  },
  {
    id: 'localization-confusion',
    nameRu: 'Локализационная путаница',
    nameEn: 'Localization Confusion',
    category: 'booster',
    warbond: 'cutting',
    typeRu: 'Усиление',
    typeEn: 'Booster'
  },
  {
    id: 'motivational-shocks',
    nameRu: 'Мотивационные удары',
    nameEn: 'Motivational Shocks',
    category: 'booster',
    warbond: 'polar',
    typeRu: 'Усиление',
    typeEn: 'Booster'
  },
  {
    id: 'experimental-infusion',
    nameRu: 'Экспериментальная инфузия',
    nameEn: 'Experimental Infusion',
    category: 'booster',
    warbond: 'viper',
    typeRu: 'Усиление',
    typeEn: 'Booster'
  },
  {
    id: 'firebomb-hellpods',
    nameRu: 'Адские капсулы с зажигательной бомбой',
    nameEn: 'Firebomb Hellpods',
    category: 'booster',
    warbond: 'flame',
    typeRu: 'Усиление',
    typeEn: 'Booster'
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
    id: 'anti-materiel-rifle',
    nameRu: 'APW-1 «Крупнокалиберная винтовка»',
    nameEn: 'APW-1 Anti-Materiel Rifle',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'stalwart',
    nameRu: 'M-105 «Удалец»',
    nameEn: 'M-105 Stalwart',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'expendable-anti-tank',
    nameRu: 'EAT-17 «Одноразовый ПТ-гранатомет»',
    nameEn: 'EAT-17 Expendable Anti-Tank',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'grenade-launcher',
    nameRu: 'Гранатомет GL-21',
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
    id: 'autocannon',
    nameRu: 'AC-8 «Автопушка»',
    nameEn: 'AC-8 Autocannon',
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
    id: 'airburst-rocket',
    nameRu: 'RL-77 «Ракетная установка возд. подрыва»',
    nameEn: 'RL-77 Airburst Rocket Launcher',
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
    id: 'spear',
    nameRu: 'FAF-14 «Копье»',
    nameEn: 'FAF-14 Spear',
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
    id: 'commando',
    nameRu: 'MLS-4X «Коммандос»',
    nameEn: 'MLS-4X Commando',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },
  {
    id: 'sterilizer',
    nameRu: 'FLAM-88 «Стерилизатор»',
    nameEn: 'FLAM-88 Sterilizer',
    category: 'support',
    warbond: 'chemical',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem'
  },

  // --- BACKPACKS ---
  {
    id: 'jump-pack',
    nameRu: 'Прыжковый ранец LIFT-850',
    nameEn: 'LIFT-850 Jump Pack',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Снаряжение',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'supply-pack',
    nameRu: 'Ранец со снабжением B-1',
    nameEn: 'B-1 Supply Pack',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Снаряжение',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'guard-dog-rover',
    nameRu: 'Сторожевой пес AX/LAS-59 «Скиталец»',
    nameEn: 'AX/LAS-59 "Guard Dog" Rover',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Снаряжение',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'guard-dog-bullet',
    nameRu: 'Сторожевой пес AX/AR-23',
    nameEn: 'AX/AR-23 "Guard Dog"',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Снаряжение',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'ballistic-shield',
    nameRu: 'Баллистический щит SH-20',
    nameEn: 'SH-20 Ballistic Shield Backpack',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Снаряжение',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'shield-generator-pack',
    nameRu: 'Генератор щита SH-32',
    nameEn: 'SH-32 Shield Generator Backpack',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Снаряжение',
    typeEn: 'Backpack Stratagem'
  },
  {
    id: 'guard-dog-breath',
    nameRu: 'Сторожевой пес AX/TX-40 «Дыхание пса»',
    nameEn: 'AX/TX-40 "Guard Dog" Breath',
    category: 'backpack',
    warbond: 'chemical',
    typeRu: 'Снаряжение',
    typeEn: 'Backpack Stratagem'
  },

  // --- OFFENSIVE STRATAGEMS ---
  {
    id: 'orbital-precision',
    nameRu: 'Точный орбитальный удар',
    nameEn: 'Orbital Precision Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальная стратагема',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-120',
    nameRu: '120-мм орбитальный обстрел',
    nameEn: 'Orbital 120mm HE Barrage',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальная стратагема',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-380',
    nameRu: '380-мм орбитальный обстрел',
    nameEn: 'Orbital 380mm HE Barrage',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальная стратагема',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-walking',
    nameRu: 'Орбитальный обстрел со смещением',
    nameEn: 'Orbital Walking Barrage',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальная стратагема',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-laser',
    nameRu: 'Орбитальный лазер',
    nameEn: 'Orbital Laser',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальная стратагема',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-railcannon',
    nameRu: 'Орбитальный удар рельсотроном',
    nameEn: 'Orbital Railcannon Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальная стратагема',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-airburst',
    nameRu: 'Орбитальный осколочный удар',
    nameEn: 'Orbital Airburst Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальная стратагема',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-gas',
    nameRu: 'Орбитальный химический удар',
    nameEn: 'Orbital Gas Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальная стратагема',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-gatling',
    nameRu: 'Орбитальный обстрел из пушки Гатлинга',
    nameEn: 'Orbital Gatling Barrage',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальная стратагема',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-ems',
    nameRu: 'Орбитальный ЭМИ-удар',
    nameEn: 'Orbital EMS Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальная стратагема',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'orbital-smoke',
    nameRu: 'Орбитальный дымовой удар',
    nameEn: 'Orbital Smoke Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальная стратагема',
    typeEn: 'Orbital Cannon Stratagem'
  },
  {
    id: 'eagle-strafing',
    nameRu: 'Бреющий полет «Игла»',
    nameEn: 'Eagle Strafing Run',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Стратагема ангара',
    typeEn: 'Hangar (Eagle) Stratagem'
  },
  {
    id: 'eagle-airstrike',
    nameRu: 'Авиаудар «Игла»',
    nameEn: 'Eagle Airstrike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Стратагема ангара',
    typeEn: 'Hangar (Eagle) Stratagem'
  },
  {
    id: 'eagle-cluster',
    nameRu: 'Кассетная бомба «Игла»',
    nameEn: 'Eagle Cluster Bomb',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Стратагема ангара',
    typeEn: 'Hangar (Eagle) Stratagem'
  },
  {
    id: 'eagle-napalm',
    nameRu: 'Напалмовый авиаудар «Игла»',
    nameEn: 'Eagle Napalm Airstrike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Стратагема ангара',
    typeEn: 'Hangar (Eagle) Stratagem'
  },
  {
    id: 'eagle-smoke',
    nameRu: 'Дымовой удар «Игла»',
    nameEn: 'Eagle Smoke Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Стратагема ангара',
    typeEn: 'Hangar (Eagle) Stratagem'
  },
  {
    id: 'eagle-rocket-pods',
    nameRu: '110-мм ракетные кассеты «Игла»',
    nameEn: 'Eagle 110mm Rocket Pods',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Стратагема ангара',
    typeEn: 'Hangar (Eagle) Stratagem'
  },
  {
    id: 'eagle-500kg',
    nameRu: '500-кг бомба «Игла»',
    nameEn: 'Eagle 500kg Bomb',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Стратагема ангара',
    typeEn: 'Hangar (Eagle) Stratagem'
  },

  // --- DEFENSIVE STRATAGEMS ---
  {
    id: 'hmg-emplacement',
    nameRu: 'Турель с тяжелым пулеметом',
    nameEn: 'HMG Emplacement',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Bridge / Defence Stratagem'
  },
  {
    id: 'anti-personnel-mines',
    nameRu: 'Противопехотное минное поле MD-6',
    nameEn: 'MD-6 Anti-Personnel Minefield',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem'
  },
  {
    id: 'incendiary-mines',
    nameRu: 'Зажигательные мины MD-I4',
    nameEn: 'MD-I4 Incendiary Mines',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem'
  },
  {
    id: 'anti-tank-mines',
    nameRu: 'Противотанковые мины MD-17',
    nameEn: 'MD-17 Anti-Tank Mines',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem'
  },
  {
    id: 'gas-mines',
    nameRu: 'Химические мины MD-8',
    nameEn: 'MD-8 Gas Mines',
    category: 'defensive',
    warbond: 'chemical',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem'
  },
  {
    id: 'machine-gun-sentry',
    nameRu: 'Турель с пулеметом A/MG-43',
    nameEn: 'A/MG-43 Machine Gun Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'gatling-sentry',
    nameRu: 'Турель с пушкой Гатлинга A/G-16',
    nameEn: 'A/G-16 Gatling Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'mortar-sentry',
    nameRu: 'Минометная турель A/M-12',
    nameEn: 'A/M-12 Mortar Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'autocannon-sentry',
    nameRu: 'Турель с автопушкой A/AC-8',
    nameEn: 'A/AC-8 Autocannon Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'rocket-sentry',
    nameRu: 'Ракетная турель A/MLS-12',
    nameEn: 'A/MLS-12 Rocket Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'tesla-tower',
    nameRu: 'Башня Тесла A/ARC-3',
    nameEn: 'A/ARC-3 Tesla Tower',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem'
  },
  {
    id: 'ems-mortar-sentry',
    nameRu: 'ЭМИ-минометная турель A/M-23',
    nameEn: 'A/M-23 EMS Mortar Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'flame-sentry',
    nameRu: 'Огнеметная турель A/FLAM-40',
    nameEn: 'A/FLAM-40 Flame Sentry',
    category: 'defensive',
    warbond: 'flame',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'anti-air-sentry',
    nameRu: 'Зенитная турель A/AA-12',
    nameEn: 'A/AA-12 Anti-Air Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem'
  },
  {
    id: 'shield-relay',
    nameRu: 'Реле генератора щита FX-12',
    nameEn: 'FX-12 Shield Generator Relay',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem'
  },
  {
    id: 'patriot-exosuit',
    nameRu: 'Экзокостюм EXO-45 «Патриот»',
    nameEn: 'EXO-45 Patriot Exosuit',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Экзокостюм',
    typeEn: 'Exosuit Stratagem'
  },
  {
    id: 'emancipator-exosuit',
    nameRu: 'Экзокостюм EXO-49 «Освободитель»',
    nameEn: 'EXO-49 Emancipator Exosuit',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Экзокостюм',
    typeEn: 'Exosuit Stratagem'
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
