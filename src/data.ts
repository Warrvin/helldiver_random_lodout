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
  imageUrl?: string;
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
    typeEn: 'Assault Rifle',
    imageUrl: '/assets/weapons/primary/assault-rifles/liberator.png'
  },
  {
    id: 'liberator-penetrator',
    nameRu: 'AR-23P «Пробивной освободитель»',
    nameEn: 'AR-23P Liberator Penetrator',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle',
    imageUrl: '/assets/weapons/primary/assault-rifles/liberator-penetrator.png'
  },
  {
    id: 'liberator-concussive',
    nameRu: 'AR-23C «Сотрясающий освободитель»',
    nameEn: 'AR-23C Liberator Concussive',
    category: 'primary',
    warbond: 'steeled',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle',
    imageUrl: '/assets/weapons/primary/assault-rifles/liberator-concussive.png'
  },
  {
    id: 'sta-52-ar',
    nameRu: 'StA-52 «Штурмовая винтовка»',
    nameEn: 'StA-52 Assault Rifle',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle',
    imageUrl: '/assets/weapons/primary/assault-rifles/sta-52-ar.png'
  },
  {
    id: 'ar-32-pacifier',
    nameRu: 'AR-32 «Миротворец»',
    nameEn: 'AR-32 Pacifier',
    category: 'primary',
    warbond: 'truth',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle',
    imageUrl: '/assets/weapons/primary/assault-rifles/ar-32-pacifier.png'
  },
  {
    id: 'ar-2-coyote',
    nameRu: 'AR-2 «Койот»',
    nameEn: 'AR-2 Coyote',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle',
    imageUrl: '/assets/weapons/primary/assault-rifles/ar-2-coyote.png'
  },
  {
    id: 'ma5c-ar',
    nameRu: 'MA5C «Штурмовая винтовка»',
    nameEn: 'MA5C Assault Rifle',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle',
    imageUrl: '/assets/weapons/primary/assault-rifles/ma5c-ar.png'
  },
  {
    id: 'liberator-carbine',
    nameRu: 'AR-23A «Карабин Освободитель»',
    nameEn: 'AR-23A Liberator Carbine',
    category: 'primary',
    warbond: 'viper',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle',
    imageUrl: '/assets/weapons/primary/assault-rifles/liberator-carbine.png'
  },
  {
    id: 'tenderizer',
    nameRu: 'AR-61 «Нежинка»',
    nameEn: 'AR-61 Tenderizer',
    category: 'primary',
    warbond: 'polar',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle',
    imageUrl: '/assets/weapons/primary/assault-rifles/tenderizer.png'
  },
  {
    id: 'adjudicator',
    nameRu: 'BR-14 «Эксперт»',
    nameEn: 'BR-14 Adjudicator',
    category: 'primary',
    warbond: 'democratic',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle',
    imageUrl: '/assets/weapons/primary/assault-rifles/adjudicator.png'
  },
  {
    id: 'one-two-ar',
    nameRu: 'AR/GL-21 «Раз-два»',
    nameEn: 'AR/GL-21 One-Two',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle',
    imageUrl: '/assets/weapons/primary/assault-rifles/one-two-ar.png'
  },
  {
    id: 'suppressor-ar',
    nameRu: 'AR-59 «Глушитель»',
    nameEn: 'AR-59 Suppressor',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Штурмовая винтовка',
    typeEn: 'Assault Rifle',
    imageUrl: '/assets/weapons/primary/assault-rifles/suppressor-ar.png'
  },

  // Marksman Rifles
  {
    id: 'r-2-amendment',
    nameRu: 'R-2 «Поправка»',
    nameEn: 'R-2 Amendment',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle',
    imageUrl: '/assets/weapons/primary/marksman-rifles/r-2-amendment.png'
  },
  {
    id: 'r-2124-constitution',
    nameRu: 'R-2124 «Конституция»',
    nameEn: 'R-2124 Constitution',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle',
    imageUrl: '/assets/weapons/primary/marksman-rifles/r-2124-constitution.png'
  },
  {
    id: 'r-6-deadeye',
    nameRu: 'R-6 «Меткий глаз»',
    nameEn: 'R-6 Deadeye',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle',
    imageUrl: '/assets/weapons/primary/marksman-rifles/r-6-deadeye.png'
  },
  {
    id: 'diligence',
    nameRu: 'R-63 «Рвение»',
    nameEn: 'R-63 Diligence',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle',
    imageUrl: '/assets/weapons/primary/marksman-rifles/diligence.png'
  },
  {
    id: 'diligence-counter-sniper',
    nameRu: 'R-63CS «Рвение антиснайпер»',
    nameEn: 'R-63CS Diligence Counter Sniper',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle',
    imageUrl: '/assets/weapons/primary/marksman-rifles/diligence-counter-sniper.png'
  },
  {
    id: 'r-72-censor',
    nameRu: 'R-72 «Цензор»',
    nameEn: 'R-72 Censor',
    category: 'primary',
    warbond: 'truth',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle',
    imageUrl: '/assets/weapons/primary/marksman-rifles/r-72-censor.png'
  },
  {
    id: 'r-4-hyena',
    nameRu: 'R-4 «Гиена»',
    nameEn: 'R-4 Hyena',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Марксманская винтовка',
    typeEn: 'Marksman Rifle',
    imageUrl: '/assets/weapons/primary/marksman-rifles/r-4-hyena.png'
  },

  // Submachine Guns
  {
    id: 'knight',
    nameRu: 'MP-98 «Рыцарь»',
    nameEn: 'MP-98 Knight',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun',
    imageUrl: '/assets/weapons/primary/smgs/knight.png'
  },
  {
    id: 'sta-11-smg',
    nameRu: 'StA-11 «Пистолет-пулемет»',
    nameEn: 'StA-11 SMG',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun',
    imageUrl: '/assets/weapons/primary/smgs/sta-11-smg.png'
  },
  {
    id: 'm7s-smg',
    nameRu: 'M7S «Пистолет-пулемет»',
    nameEn: 'M7S SMG',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun',
    imageUrl: '/assets/weapons/primary/smgs/m7s-smg.png'
  },
  {
    id: 'smg-32-reprimand',
    nameRu: 'SMG-32 «Выговор»',
    nameEn: 'SMG-32 Reprimand',
    category: 'primary',
    warbond: 'truth',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun',
    imageUrl: '/assets/weapons/primary/smgs/smg-32-reprimand.png'
  },
  {
    id: 'defender',
    nameRu: 'SMG-37 «Защитник»',
    nameEn: 'SMG-37 Defender',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun',
    imageUrl: '/assets/weapons/primary/smgs/defender.png'
  },
  {
    id: 'pummeler',
    nameRu: 'SMG-72 «Громила»',
    nameEn: 'SMG-72 Pummeler',
    category: 'primary',
    warbond: 'polar',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun',
    imageUrl: '/assets/weapons/primary/smgs/pummeler.png'
  },
  {
    id: 'smg-flam-34-stoker',
    nameRu: 'SMG/FLAM-34 «Кочегар»',
    nameEn: 'SMG/FLAM-34 Stoker',
    category: 'primary',
    warbond: 'flame',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun',
    imageUrl: '/assets/weapons/primary/smgs/smg-flam-34-stoker.png'
  },
  {
    id: 'smg-203-gallant',
    nameRu: 'SMG-203 «Галантный»',
    nameEn: 'SMG-203 Gallant',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Пистолет-пулемет',
    typeEn: 'Submachine Gun',
    imageUrl: '/assets/weapons/primary/smgs/smg-203-gallant.png'
  },

  // Shotguns
  {
    id: 'punisher',
    nameRu: 'SG-8 «Каратель»',
    nameEn: 'SG-8 Punisher',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Помповый дробовик',
    typeEn: 'Pump-Action Shotgun',
    imageUrl: '/assets/weapons/primary/shotguns/punisher.png'
  },
  {
    id: 'slugger',
    nameRu: 'SG-8S «Крушила»',
    nameEn: 'SG-8S Slugger',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Помповый дробовик',
    typeEn: 'Pump-Action Shotgun',
    imageUrl: '/assets/weapons/primary/shotguns/slugger.png'
  },
  {
    id: 'sg-20-halt',
    nameRu: 'SG-20 «Стой»',
    nameEn: 'SG-20 Halt',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Дробовик',
    typeEn: 'Shotgun',
    imageUrl: '/assets/weapons/primary/shotguns/sg-20-halt.png'
  },
  {
    id: 'cookout',
    nameRu: 'SG-451 «Кулинар»',
    nameEn: 'SG-451 Cookout',
    category: 'primary',
    warbond: 'flame',
    typeRu: 'Помповый дробовик',
    typeEn: 'Pump-Action Shotgun',
    imageUrl: '/assets/weapons/primary/shotguns/cookout.png'
  },
  {
    id: 'double-freedom',
    nameRu: 'DBS-2 «Двойная свобода»',
    nameEn: 'DBS-2 Double Freedom',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Двуствольный дробовик',
    typeEn: 'Double-Barrel Shotgun',
    imageUrl: '/assets/weapons/primary/shotguns/double-freedom.png'
  },
  {
    id: 'm90a-shotgun',
    nameRu: 'M90A «Дробовик»',
    nameEn: 'M90A Shotgun',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Дробовик',
    typeEn: 'Shotgun',
    imageUrl: '/assets/weapons/primary/shotguns/m90a-shotgun.png'
  },
  {
    id: 'breaker',
    nameRu: 'SG-225 «Крушитель»',
    nameEn: 'SG-225 Breaker',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Автоматический дробовик',
    typeEn: 'Automatic Shotgun',
    imageUrl: '/assets/weapons/primary/shotguns/breaker.png'
  },
  {
    id: 'breaker-spray-pray',
    nameRu: 'SG-225SP «Крушитель ураган»',
    nameEn: 'SG-225SP Breaker Spray & Pray',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Автоматический дробовик',
    typeEn: 'Automatic Shotgun',
    imageUrl: '/assets/weapons/primary/shotguns/breaker-spray-pray.png'
  },
  {
    id: 'breaker-incendiary',
    nameRu: 'SG-225IE «Зажигательный крушитель»',
    nameEn: 'SG-225IE Breaker Incendiary',
    category: 'primary',
    warbond: 'steeled',
    typeRu: 'Автоматический дробовик',
    typeEn: 'Automatic Shotgun',
    imageUrl: '/assets/weapons/primary/shotguns/breaker-incendiary.png'
  },
  {
    id: 'sg-97-sweeper',
    nameRu: 'SG-97 «Дворник»',
    nameEn: 'SG-97 Sweeper',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Дробовик',
    typeEn: 'Shotgun',
    imageUrl: '/assets/weapons/primary/shotguns/sg-97-sweeper.png'
  },

  // Explosive
  {
    id: 'exploding-crossbow',
    nameRu: 'CB-9 «Взрывной арбалет»',
    nameEn: 'CB-9 Exploding Crossbow',
    category: 'primary',
    warbond: 'democratic',
    typeRu: 'Арбалет',
    typeEn: 'Explosive Crossbow',
    imageUrl: '/assets/weapons/primary/explosive/exploding-crossbow.png'
  },
  {
    id: 'eruptor',
    nameRu: 'R-36 «Извергатель»',
    nameEn: 'R-36 Eruptor',
    category: 'primary',
    warbond: 'democratic',
    typeRu: 'Болтовая винтовка',
    typeEn: 'Bolt-Action Rifle',
    imageUrl: '/assets/weapons/primary/marksman-rifles/eruptor.png'
  },

  // Energy-Based
  {
    id: 'punisher-plasma',
    nameRu: 'SG-8P «Плазменный каратель»',
    nameEn: 'SG-8P Punisher Plasma',
    category: 'primary',
    warbond: 'cutting',
    typeRu: 'Плазменный дробовик',
    typeEn: 'Plasma Shotgun',
    imageUrl: '/assets/weapons/primary/shotguns/punisher-plasma.png'
  },
  {
    id: 'plas-39-accelerator',
    nameRu: 'PLAS-39 «Ускоритель»',
    nameEn: 'PLAS-39 Accelerator Rifle',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Энергетическая винтовка',
    typeEn: 'Energy Rifle',
    imageUrl: '/assets/weapons/primary/energy/plas-39-accelerator.png'
  },
  {
    id: 'blitzer',
    nameRu: 'ARC-12 «Налётчик»',
    nameEn: 'ARC-12 Blitzer',
    category: 'primary',
    warbond: 'cutting',
    typeRu: 'Дуговое оружие',
    typeEn: 'Arc Weapon',
    imageUrl: '/assets/weapons/primary/energy/blitzer.png'
  },
  {
    id: 'scythe',
    nameRu: 'LAS-5 «Коса»',
    nameEn: 'LAS-5 Scythe',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Лазерное оружие',
    typeEn: 'Laser Weapon',
    imageUrl: '/assets/weapons/primary/energy/scythe.png'
  },
  {
    id: 'sickle',
    nameRu: 'LAS-16 «Серп»',
    nameEn: 'LAS-16 Sickle',
    category: 'primary',
    warbond: 'cutting',
    typeRu: 'Лазерное оружие',
    typeEn: 'Laser Weapon',
    imageUrl: '/assets/weapons/primary/energy/sickle.png'
  },
  {
    id: 'las-17-double-edge',
    nameRu: 'LAS-17 «Обоюдоострый серп»',
    nameEn: 'LAS-17 Double-Edge Sickle',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Лазерное оружие',
    typeEn: 'Laser Weapon',
    imageUrl: '/assets/weapons/primary/energy/las-17-double-edge.png'
  },
  {
    id: 'scorcher',
    nameRu: 'PLAS-1 «Поджигатель»',
    nameEn: 'PLAS-1 Scorcher',
    category: 'primary',
    warbond: 'default',
    typeRu: 'Плазменное оружие',
    typeEn: 'Plasma Weapon',
    imageUrl: '/assets/weapons/primary/energy/scorcher.png'
  },
  {
    id: 'purifier',
    nameRu: 'PLAS-101 «Очиститель»',
    nameEn: 'PLAS-101 Purifier',
    category: 'primary',
    warbond: 'polar',
    typeRu: 'Плазменное оружие',
    typeEn: 'Plasma Weapon',
    imageUrl: '/assets/weapons/primary/energy/purifier.png'
  },
  {
    id: 'las-13-trident',
    nameRu: 'LAS-13 «Трезубец»',
    nameEn: 'LAS-13 Trident',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Лазерный дробовик',
    typeEn: 'Laser Shotgun',
    imageUrl: '/assets/weapons/primary/shotguns/las-13-trident.png'
  },

  // Special
  {
    id: 'vg-70-variable',
    nameRu: 'VG-70 «Вариабельный»',
    nameEn: 'VG-70 Variable',
    category: 'primary',
    warbond: 'redacted',
    typeRu: 'Специальное оружие',
    typeEn: 'Special Weapon',
    imageUrl: '/assets/weapons/primary/explosive/vg-70-variable.png'
  },
  {
    id: 'torcher',
    nameRu: 'FLAM-66 «Испепелитель»',
    nameEn: 'FLAM-66 Torcher',
    category: 'primary',
    warbond: 'flame',
    typeRu: 'Персональный огнемет',
    typeEn: 'Flamethrower',
    imageUrl: '/assets/weapons/primary/energy/torcher.png'
  },
  {
    id: 'dominator',
    nameRu: 'JAR-5 «Угнетатель»',
    nameEn: 'JAR-5 Dominator',
    category: 'primary',
    warbond: 'steeled',
    typeRu: 'Реактивное оружие',
    typeEn: 'Jet-Assisted Weapon',
    imageUrl: '/assets/weapons/primary/explosive/dominator.png'
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
    typeEn: 'Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/p-92-warrant.png'
  },
  {
    id: 'peacemaker',
    nameRu: 'P-2 «Миротворец»',
    nameEn: 'P-2 Peacemaker',
    category: 'secondary',
    warbond: 'default',
    typeRu: 'Полуавтоматический пистолет',
    typeEn: 'Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/peacemaker.png'
  },
  {
    id: 'redeemer',
    nameRu: 'P-19 «Избавитель»',
    nameEn: 'P-19 Redeemer',
    category: 'secondary',
    warbond: 'default',
    typeRu: 'Автоматический пистолет',
    typeEn: 'Automatic Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/redeemer.png'
  },
  {
    id: 'verdict',
    nameRu: 'P-113 «Вердикт»',
    nameEn: 'P-113 Verdict',
    category: 'secondary',
    warbond: 'polar',
    typeRu: 'Пистолет',
    typeEn: 'Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/verdict.png'
  },
  {
    id: 'm6c-socom',
    nameRu: 'M6C/SOCOM Пистолет',
    nameEn: 'M6C/SOCOM Pistol',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Пистолет',
    typeEn: 'Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/m6c-socom.png'
  },
  {
    id: 'senator',
    nameRu: 'P-4 «Сенатор»',
    nameEn: 'P-4 Senator',
    category: 'secondary',
    warbond: 'steeled',
    typeRu: 'Револьвер',
    typeEn: 'Revolver',
    imageUrl: '/assets/weapons/secondary/pistols/senator.png'
  },
  {
    id: 'p-69-veto',
    nameRu: 'P-69 «Вето»',
    nameEn: 'P-69 Veto',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Пистолет',
    typeEn: 'Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/p-69-veto.png'
  },

  // Melee
  {
    id: 'cqc-19-stun-lance',
    nameRu: 'CQC-19 «Шоковое копье»',
    nameEn: 'CQC-19 Stun Lance',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Холодное оружие ближнего боя',
    typeEn: 'Melee Weapon',
    imageUrl: '/assets/weapons/secondary/melee/cqc-19-stun-lance.png'
  },
  {
    id: 'melee-saber',
    nameRu: 'CQC-2 «Сабля»',
    nameEn: 'CQC-2 Saber',
    category: 'secondary',
    warbond: 'default',
    typeRu: 'Холодное оружие ближнего боя',
    typeEn: 'Melee Weapon',
    imageUrl: '/assets/weapons/secondary/melee/melee-saber.png'
  },
  {
    id: 'cqc-30-stun-baton',
    nameRu: 'CQC-30 «Шоковая дубинка»',
    nameEn: 'CQC-30 Stun Baton',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Холодное оружие ближнего боя',
    typeEn: 'Melee Weapon',
    imageUrl: '/assets/weapons/secondary/melee/cqc-30-stun-baton.png'
  },
  {
    id: 'cqc-5-hatchet',
    nameRu: 'CQC-5 «Боевой топорик»',
    nameEn: 'CQC-5 Combat Hatchet',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Холодное оружие ближнего боя',
    typeEn: 'Melee Weapon',
    imageUrl: '/assets/weapons/secondary/melee/cqc-5-hatchet.png'
  },
  {
    id: 'cqc-73-entrenchment',
    nameRu: 'CQC-73 «Саперная лопатка»',
    nameEn: 'CQC-73 Entrenchment Tool',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Холодное оружие ближнего боя',
    typeEn: 'Melee Weapon',
    imageUrl: '/assets/weapons/secondary/melee/cqc-73-entrenchment.png'
  },
  {
    id: 'cqc-42-machete',
    nameRu: 'CQC-42 «Мачете»',
    nameEn: 'CQC-42 Machete',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Холодное оружие ближнего боя',
    typeEn: 'Melee Weapon',
    imageUrl: '/assets/weapons/secondary/melee/cqc-42-machete.png'
  },

  // Special Secondaries
  {
    id: 'stim-pistol',
    nameRu: 'P-11 «Пистолет-стимулятор»',
    nameEn: 'P-11 Stim Pistol',
    category: 'secondary',
    warbond: 'chemical',
    typeRu: 'Вспомогательный пистолет',
    typeEn: 'Support Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/stim-pistol.png'
  },
  {
    id: 'bushwhacker',
    nameRu: 'SG-22 «Бушвокер»',
    nameEn: 'SG-22 Bushwhacker',
    category: 'secondary',
    warbond: 'viper',
    typeRu: 'Обрез дробовика',
    typeEn: 'Shotgun Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/bushwhacker.png'
  },
  {
    id: 'las-58-talon',
    nameRu: 'LAS-58 «Коготь»',
    nameEn: 'LAS-58 Talon',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Энергетический пистолет',
    typeEn: 'Laser Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/las-58-talon.png'
  },
  {
    id: 'crisper',
    nameRu: 'P-72 «Жаришка»',
    nameEn: 'P-72 Crisper',
    category: 'secondary',
    warbond: 'flame',
    typeRu: 'Карманный огнемет',
    typeEn: 'Pocket Flamethrower',
    imageUrl: '/assets/weapons/secondary/pistols/crisper.png'
  },
  {
    id: 'grenade-pistol',
    nameRu: 'GP-31 «Пистолет-гранатомёт»',
    nameEn: 'GP-31 Grenade Pistol',
    category: 'secondary',
    warbond: 'democratic',
    typeRu: 'Гранатометный пистолет',
    typeEn: 'Grenade Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/grenade-pistol.png'
  },
  {
    id: 'dagger',
    nameRu: 'LAS-7 «Кинжал»',
    nameEn: 'LAS-7 Dagger',
    category: 'secondary',
    warbond: 'cutting',
    typeRu: 'Лазерный пистолет',
    typeEn: 'Laser Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/dagger.png'
  },
  {
    id: 'gp-20-ultimatum',
    nameRu: 'GP-20 «Ультиматум»',
    nameEn: 'GP-20 Ultimatum',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Гранатометный пистолет',
    typeEn: 'Grenade Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/gp-20-ultimatum.png'
  },
  {
    id: 'loyalist',
    nameRu: 'PLAS-15 «Лоялист»',
    nameEn: 'PLAS-15 Loyalist',
    category: 'secondary',
    warbond: 'truth',
    typeRu: 'Плазменный пистолет',
    typeEn: 'Plasma Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/loyalist.png'
  },
  {
    id: 'p-35-reeducator',
    nameRu: 'P-35 «Перевоспитатель»',
    nameEn: 'P-35 Re-Educator',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Пистолет',
    typeEn: 'Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/p-35-reeducator.png'
  },
  {
    id: 'p-33-missile-pistol',
    nameRu: 'P-33 «Ракетный пистолет»',
    nameEn: 'P-33 Missile Pistol',
    category: 'secondary',
    warbond: 'redacted',
    typeRu: 'Ракетный пистолет',
    typeEn: 'Missile Pistol',
    imageUrl: '/assets/weapons/secondary/pistols/p-33-missile-pistol.png'
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
    typeEn: 'Dynamite',
    imageUrl: '/assets/throwables/ted-63-dynamite.png'
  },
  {
    id: 'frag-grenade',
    nameRu: 'G-6 «Осколочная»',
    nameEn: 'G-6 Frag',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Осколочная граната',
    typeEn: 'Frag Grenade',
    imageUrl: '/assets/throwables/frag-grenade.png'
  },
  {
    id: 'high-explosive',
    nameRu: 'G-12 «Фугасная»',
    nameEn: 'G-12 High Explosive',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Фугасная граната',
    typeEn: 'High Explosive Grenade',
    imageUrl: '/assets/throwables/high-explosive.png'
  },
  {
    id: 'incendiary-grenade',
    nameRu: 'G-10 «Зажигательная»',
    nameEn: 'G-10 Incendiary',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Зажигательная граната',
    typeEn: 'Incendiary Grenade',
    imageUrl: '/assets/throwables/incendiary-grenade.png'
  },
  {
    id: 'g-7-pineapple',
    nameRu: 'G-7 «Ананас»',
    nameEn: 'G-7 Pineapple',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Осколочная граната',
    typeEn: 'Frag Grenade',
    imageUrl: '/assets/throwables/g-7-pineapple.png'
  },
  // Special
  {
    id: 'impact-grenade',
    nameRu: 'G-16 «Ударная»',
    nameEn: 'G-16 Impact',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Контактная граната',
    typeEn: 'Impact Grenade',
    imageUrl: '/assets/throwables/impact-grenade.png'
  },
  {
    id: 'g-13-incendiary-impact',
    nameRu: 'G-13 «Контактная зажигательная»',
    nameEn: 'G-13 Incendiary Impact',
    category: 'throwable',
    warbond: 'flame',
    typeRu: 'Зажигательная граната',
    typeEn: 'Incendiary Impact Grenade',
    imageUrl: '/assets/throwables/g-13-incendiary-impact.png'
  },
  {
    id: 'stun-grenade',
    nameRu: 'G-23 «Оглушающая»',
    nameEn: 'G-23 Stun',
    category: 'throwable',
    warbond: 'cutting',
    typeRu: 'Светошумовая граната',
    typeEn: 'Stun Grenade',
    imageUrl: '/assets/throwables/stun-grenade.png'
  },
  {
    id: 'g-4-gas',
    nameRu: 'G-4 «Газовая»',
    nameEn: 'G-4 Gas',
    category: 'throwable',
    warbond: 'chemical',
    typeRu: 'Газовая граната',
    typeEn: 'Gas Grenade',
    imageUrl: '/assets/throwables/g-4-gas.png'
  },
  {
    id: 'g-50-seeker',
    nameRu: 'G-50 «Искатель»',
    nameEn: 'G-50 Seeker',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Умная граната',
    typeEn: 'Seeker Grenade',
    imageUrl: '/assets/throwables/g-50-seeker.png'
  },
  {
    id: 'smoke-grenade',
    nameRu: 'G-3 «Дымовая»',
    nameEn: 'G-3 Smoke',
    category: 'throwable',
    warbond: 'default',
    typeRu: 'Дымовая граната',
    typeEn: 'Smoke Grenade',
    imageUrl: '/assets/throwables/smoke-grenade.png'
  },
  {
    id: 'thermite-grenade',
    nameRu: 'G-123 «Термитная»',
    nameEn: 'G-123 Thermite',
    category: 'throwable',
    warbond: 'democratic',
    typeRu: 'Термитная граната',
    typeEn: 'Thermite Grenade',
    imageUrl: '/assets/throwables/thermite-grenade.png'
  },
  {
    id: 'throwing-knife',
    nameRu: 'K-2 «Метательный нож»',
    nameEn: 'K-2 Throwing Knife',
    category: 'throwable',
    warbond: 'viper',
    typeRu: 'Метательный нож',
    typeEn: 'Throwing Knife',
    imageUrl: '/assets/throwables/throwing-knife.png'
  },
  {
    id: 'g-142-pyrotech',
    nameRu: 'G-142 «Пиротех»',
    nameEn: 'G-142 Pyrotech',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Сигнальная граната',
    typeEn: 'Pyrotech Grenade',
    imageUrl: '/assets/throwables/g-142-pyrotech.png'
  },
  {
    id: 'g-109-urchin',
    nameRu: 'G-109 «Морской еж»',
    nameEn: 'G-109 Urchin',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Игольчатая граната',
    typeEn: 'Urchin Grenade',
    imageUrl: '/assets/throwables/g-109-urchin.png'
  },
  {
    id: 'g-31-arc',
    nameRu: 'G-31 «Дуговая»',
    nameEn: 'G-31 Arc',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Дуговая граната',
    typeEn: 'Arc Grenade',
    imageUrl: '/assets/throwables/g-31-arc.png'
  },
  {
    id: 'tm-1-lure',
    nameRu: 'TM-1 «Приманка-мина»',
    nameEn: 'TM-1 Lure Mine',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Мина-приманка',
    typeEn: 'Lure Mine',
    imageUrl: '/assets/throwables/tm-1-lure.png'
  },
  {
    id: 'g-89-smokescreen',
    nameRu: 'G-89 «Дымовая завеса»',
    nameEn: 'G-89 Smokescreen',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Дымовая завеса',
    typeEn: 'Smokescreen Grenade',
    imageUrl: '/assets/throwables/g-89-smokescreen.png'
  },
  {
    id: 'g-sh-39-shield',
    nameRu: 'G/SH-39 «Щит»',
    nameEn: 'G/SH-39 Shield',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Генераторный щит',
    typeEn: 'Shield Grenade',
    imageUrl: '/assets/throwables/g-sh-39-shield.png'
  },
  {
    id: 'g-48-giga',
    nameRu: 'G-48 «Гига-граната»',
    nameEn: 'G-48 Giga Grenade',
    category: 'throwable',
    warbond: 'redacted',
    typeRu: 'Тяжелая граната',
    typeEn: 'Heavy Grenade',
    imageUrl: '/assets/throwables/g-48-giga.png'
  },

  // --- BOOSTERS ---
  {
    id: 'booster-space-optimization',
    nameRu: 'Оптимизация пространства хэллоподов',
    nameEn: 'Hellpod Space Optimization',
    category: 'booster',
    warbond: 'default',
    imageUrl: '/assets/boosters/booster-space-optimization.png'
  },
  {
    id: 'booster-vitality-enhancement',
    nameRu: 'Повышение жизнеспособности',
    nameEn: 'Vitality Enhancement',
    category: 'booster',
    warbond: 'default',
    imageUrl: '/assets/boosters/booster-vitality-enhancement.png'
  },
  {
    id: 'booster-uav-recon',
    nameRu: 'Разведчик БПЛА',
    nameEn: 'UAV Recon Booster',
    category: 'booster',
    warbond: 'default',
    imageUrl: '/assets/boosters/booster-uav-recon.png'
  },
  {
    id: 'booster-stamina-enhancement',
    nameRu: 'Повышение выносливости',
    nameEn: 'Stamina Enhancement',
    category: 'booster',
    warbond: 'default',
    imageUrl: '/assets/boosters/booster-stamina-enhancement.png'
  },
  {
    id: 'booster-muscle-enhancement',
    nameRu: 'Повышение мускулатуры',
    nameEn: 'Muscle Enhancement',
    category: 'booster',
    warbond: 'steeled',
    imageUrl: '/assets/boosters/booster-muscle-enhancement.png'
  },
  {
    id: 'booster-increased-reinforcement',
    nameRu: 'Увеличенный бюджет подкреплений',
    nameEn: 'Increased Reinforcement Budget',
    category: 'booster',
    warbond: 'default',
    imageUrl: '/assets/boosters/booster-increased-reinforcement.png'
  },
  {
    id: 'booster-flexible-reinforcement',
    nameRu: 'Гибкий бюджет подкреплений',
    nameEn: 'Flexible Reinforcement Budget',
    category: 'booster',
    warbond: 'steeled',
    imageUrl: '/assets/boosters/booster-flexible-reinforcement.png'
  },
  {
    id: 'booster-localization-confusion',
    nameRu: 'Сбой локализации',
    nameEn: 'Localization Confusion',
    category: 'booster',
    warbond: 'democratic',
    imageUrl: '/assets/boosters/booster-localization-confusion.png'
  },
  {
    id: 'booster-expert-pilot',
    nameRu: 'Экстракция с экспертом-пилотом',
    nameEn: 'Expert Extraction Pilot',
    category: 'booster',
    warbond: 'polar',
    imageUrl: '/assets/boosters/booster-expert-pilot.png'
  },
  {
    id: 'booster-motivational-shocks',
    nameRu: 'Мотивационные удары',
    nameEn: 'Motivational Shocks',
    category: 'booster',
    warbond: 'polar',
    imageUrl: '/assets/boosters/booster-motivational-shocks.png'
  },
  {
    id: 'booster-experimental-infusion',
    nameRu: 'Экспериментальная инъекция',
    nameEn: 'Experimental Infusion',
    category: 'booster',
    warbond: 'viper',
    imageUrl: '/assets/boosters/booster-experimental-infusion.png'
  },
  {
    id: 'booster-firebomb-hellpods',
    nameRu: 'Огненные хэллоподы',
    nameEn: 'Firebomb Hellpods',
    category: 'booster',
    warbond: 'flame',
    imageUrl: '/assets/boosters/booster-firebomb-hellpods.png'
  },
  {
    id: 'booster-dead-sprint',
    nameRu: 'Смертельный спринт',
    nameEn: 'Dead Sprint',
    category: 'booster',
    warbond: 'chemical',
    imageUrl: '/assets/boosters/booster-dead-sprint.png'
  },
  {
    id: 'booster-armed-resupply',
    nameRu: 'Вооруженные капсулы снабжения',
    nameEn: 'Armed Resupply Pods',
    category: 'booster',
    warbond: 'truth',
    imageUrl: '/assets/boosters/booster-armed-resupply.png'
  },
  {
    id: 'booster-sample-extricator',
    nameRu: 'Экстрактор образцов',
    nameEn: 'Sample Extricator',
    category: 'booster',
    warbond: 'redacted',
    imageUrl: '/assets/boosters/booster-sample-extricator.png'
  },
  {
    id: 'booster-sample-scanner',
    nameRu: 'Сканер образцов',
    nameEn: 'Sample Scanner',
    category: 'booster',
    warbond: 'redacted',
    imageUrl: '/assets/boosters/booster-sample-scanner.png'
  },
  {
    id: 'booster-stun-pods',
    nameRu: 'Оглушающие капсулы',
    nameEn: 'Stun Pods',
    category: 'booster',
    warbond: 'redacted',
    imageUrl: '/assets/boosters/booster-stun-pods.png'
  },
  {
    id: 'booster-concealed-insertion',
    nameRu: 'Скрытное проникновение',
    nameEn: 'Concealed Insertion',
    category: 'booster',
    warbond: 'redacted',
    imageUrl: '/assets/boosters/booster-concealed-insertion.png'
  },

  // --- ORBITAL STRIKES ---
  {
    id: 'orbital-precision',
    nameRu: 'Орбитальный точечный удар',
    nameEn: 'Orbital Precision Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem',
    imageUrl: '/assets/stratagems/offensive/orbital-precision.png'
  },
  {
    id: 'orbital-gatling',
    nameRu: 'Орбитальный обстрел из Гатлинга',
    nameEn: 'Orbital Gatling Barrage',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem',
    imageUrl: '/assets/stratagems/offensive/orbital-gatling.png'
  },
  {
    id: 'orbital-gas',
    nameRu: 'Орбитальный газовый удар',
    nameEn: 'Orbital Gas Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem',
    imageUrl: '/assets/stratagems/offensive/orbital-gas.png'
  },
  {
    id: 'orbital-120-he',
    nameRu: 'Орбитальный 120-мм фугасный обстрел',
    nameEn: 'Orbital 120mm HE Barrage',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem',
    imageUrl: '/assets/stratagems/offensive/orbital-120-he.png'
  },
  {
    id: 'orbital-airburst',
    nameRu: 'Орбитальный кассетный удар',
    nameEn: 'Orbital Airburst Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem',
    imageUrl: '/assets/stratagems/offensive/orbital-airburst.png'
  },
  {
    id: 'orbital-smoke',
    nameRu: 'Орбитальный дымовой удар',
    nameEn: 'Orbital Smoke Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem',
    imageUrl: '/assets/stratagems/offensive/orbital-smoke.png'
  },
  {
    id: 'orbital-ems',
    nameRu: 'Орбитальный ЭМ-удар',
    nameEn: 'Orbital EMS Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem',
    imageUrl: '/assets/stratagems/offensive/orbital-ems.png'
  },
  {
    id: 'orbital-380-he',
    nameRu: 'Орбитальный 380-мм фугасный обстрел',
    nameEn: 'Orbital 380mm HE Barrage',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem',
    imageUrl: '/assets/stratagems/offensive/orbital-380-he.png'
  },
  {
    id: 'orbital-walking',
    nameRu: 'Орбитальный заградительный обстрел',
    nameEn: 'Orbital Walking Barrage',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem',
    imageUrl: '/assets/stratagems/offensive/orbital-walking.png'
  },
  {
    id: 'orbital-laser',
    nameRu: 'Орбитальный лазер',
    nameEn: 'Orbital Laser',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem',
    imageUrl: '/assets/stratagems/offensive/orbital-laser.png'
  },
  {
    id: 'orbital-napalm',
    nameRu: 'Орбитальный обстрел напалмом',
    nameEn: 'Orbital Napalm Barrage',
    category: 'offensive',
    warbond: 'flame',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem',
    imageUrl: '/assets/stratagems/offensive/orbital-napalm.png'
  },
  {
    id: 'orbital-railcannon',
    nameRu: 'Орбитальный удар рельсотроном',
    nameEn: 'Orbital Railcannon Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Орбитальный удар',
    typeEn: 'Orbital Cannon Stratagem',
    imageUrl: '/assets/stratagems/offensive/orbital-railcannon.png'
  },

  // --- EAGLE STRIKES ---
  {
    id: 'eagle-strafing',
    nameRu: 'Орёл: Бреющий полет',
    nameEn: 'Eagle Strafing Run',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem',
    imageUrl: '/assets/stratagems/offensive/eagle-strafing.png'
  },
  {
    id: 'eagle-airstrike',
    nameRu: 'Орёл: Авиаудар',
    nameEn: 'Eagle Airstrike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem',
    imageUrl: '/assets/stratagems/offensive/eagle-airstrike.png'
  },
  {
    id: 'eagle-cluster',
    nameRu: 'Орёл: Кассетная бомба',
    nameEn: 'Eagle Cluster Bomb',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem',
    imageUrl: '/assets/stratagems/offensive/eagle-cluster.png'
  },
  {
    id: 'eagle-smoke',
    nameRu: 'Орёл: Дымовой удар',
    nameEn: 'Eagle Smoke Strike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem',
    imageUrl: '/assets/stratagems/offensive/eagle-smoke.png'
  },
  {
    id: 'eagle-napalm',
    nameRu: 'Орёл: Напалмовый авиаудар',
    nameEn: 'Eagle Napalm Airstrike',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem',
    imageUrl: '/assets/stratagems/offensive/eagle-napalm.png'
  },
  {
    id: 'eagle-110mm',
    nameRu: 'Орёл: 110-мм ракетные кассеты',
    nameEn: 'Eagle 110mm Rocket Pods',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem',
    imageUrl: '/assets/stratagems/offensive/eagle-110mm.png'
  },
  {
    id: 'eagle-500kg',
    nameRu: 'Орёл: 500-кг бомба',
    nameEn: 'Eagle 500kg Bomb',
    category: 'offensive',
    warbond: 'default',
    typeRu: 'Авиаудар «Орла»',
    typeEn: 'Hangar Stratagem',
    imageUrl: '/assets/stratagems/offensive/eagle-500kg.png'
  },

  // --- SUPPORT WEAPONS ---
  {
    id: 'machine-gun',
    nameRu: 'MG-43 «Пулемёт»',
    nameEn: 'MG-43 Machine Gun',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/machine-gun.png'
  },
  {
    id: 'expendable-anti-tank',
    nameRu: 'EAT-17 «Одноразовый бронебой»',
    nameEn: 'EAT-17 Expendable Anti-Tank',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/expendable-anti-tank.png'
  },
  {
    id: 'stalwart',
    nameRu: 'M-105 «Доблесть»',
    nameEn: 'M-105 Stalwart',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/stalwart.png'
  },
  {
    id: 'laser-cannon',
    nameRu: 'LAS-98 «Лазерная пушка»',
    nameEn: 'LAS-98 Laser Cannon',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/laser-cannon.png'
  },
  {
    id: 'anti-materiel-rifle',
    nameRu: 'APW-1 «Крупнокалиберная винтовка»',
    nameEn: 'APW-1 Anti-Materiel Rifle',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/anti-materiel-rifle.png'
  },
  {
    id: 'grenade-launcher',
    nameRu: 'GL-21 «Гранатомёт»',
    nameEn: 'GL-21 Grenade Launcher',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/grenade-launcher.png'
  },
  {
    id: 'recoilless-rifle',
    nameRu: 'GR-8 «Безоткатная винтовка»',
    nameEn: 'GR-8 Recoilless Rifle',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/recoilless-rifle.png'
  },
  {
    id: 'flamethrower',
    nameRu: 'FLAM-40 «Огнемёт»',
    nameEn: 'FLAM-40 Flamethrower',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/flamethrower.png'
  },
  {
    id: 'heavy-machine-gun',
    nameRu: 'MG-206 «Тяжёлый пулемёт»',
    nameEn: 'MG-206 Heavy Machine Gun',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/heavy-machine-gun.png'
  },
  {
    id: 'autocannon',
    nameRu: 'AC-8 «Автопушка»',
    nameEn: 'AC-8 Autocannon',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/autocannon.png'
  },
  {
    id: 'arc-thrower',
    nameRu: 'ARC-3 «Дуговой метатель»',
    nameEn: 'ARC-3 Arc Thrower',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/arc-thrower.png'
  },
  {
    id: 'quasar-cannon',
    nameRu: 'LAS-99 Пушка «Квазар»',
    nameEn: 'LAS-99 Quasar Cannon',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/quasar-cannon.png'
  },
  {
    id: 'airburst-rocket',
    nameRu: 'RL-77 «Ракетница с подрывом в воздухе»',
    nameEn: 'RL-77 Airburst Rocket Launcher',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/airburst-rocket.png'
  },
  {
    id: 'commando',
    nameRu: 'MLS-4X «Коммандо»',
    nameEn: 'MLS-4X Commando',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/commando.png'
  },
  {
    id: 'spear',
    nameRu: 'FAF-14 «Копьё»',
    nameEn: 'FAF-14 Spear',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/spear.png'
  },
  {
    id: 'railgun',
    nameRu: 'RS-422 «Рельсотрон»',
    nameEn: 'RS-422 Railgun',
    category: 'support',
    warbond: 'default',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/railgun.png'
  },
  {
    id: 'wasp-launcher',
    nameRu: 'StA-X3 «Пусковая установка ОСА»',
    nameEn: 'StA-X3 W.A.S.P. Launcher',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/wasp-launcher.png'
  },
  {
    id: 'breaching-hammer',
    nameRu: 'CQC-20 «Штурмовой молот»',
    nameEn: 'CQC-20 Breaching Hammer',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/breaching-hammer.png'
  },
  {
    id: 'plas-45-epoch',
    nameRu: 'PLAS-45 «Эпоха»',
    nameEn: 'PLAS-45 Epoch',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/plas-45-epoch.png'
  },
  {
    id: 'bullet-storm',
    nameRu: 'MGX-42 «Ливень пуль»',
    nameEn: 'MGX-42 Bullet Storm',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/bullet-storm.png'
  },
  {
    id: 'speargun',
    nameRu: 'S-11 «Гарпун»',
    nameEn: 'S-11 Speargun',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/speargun.png'
  },
  {
    id: 'defoliation-tool',
    nameRu: 'CQC-9 «Дефолиатор»',
    nameEn: 'CQC-9 Defoliation Tool',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/defoliation-tool.png'
  },
  {
    id: 'sterilizer',
    nameRu: 'TX-41 «Стерилизатор»',
    nameEn: 'TX-41 Sterilizer',
    category: 'support',
    warbond: 'chemical',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/sterilizer.png'
  },
  {
    id: 'expendable-napalm',
    nameRu: 'EAT-700 «Одноразовый напалм»',
    nameEn: 'EAT-700 Expendable Napalm',
    category: 'support',
    warbond: 'flame',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/expendable-napalm.png'
  },
  {
    id: 'eat-411-leveller',
    nameRu: 'EAT-411 «Уравнитель»',
    nameEn: 'EAT-411 Leveller',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/eat-411-leveller.png'
  },
  {
    id: 'gl-52-deescalator',
    nameRu: 'GL-52 «Деэскалатор»',
    nameEn: 'GL-52 De-Escalator',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/gl-52-deescalator.png'
  },
  {
    id: 'gl-28-belt-fed',
    nameRu: 'GL-28 «Ленточный гранатомет»',
    nameEn: 'GL-28 Belt-Fed Grenade Launcher',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/gl-28-belt-fed.png'
  },
  {
    id: 'c4-pack',
    nameRu: 'B/MD «Взрывчатка C4»',
    nameEn: 'B/MD C4 Pack',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/c4-pack.png'
  },
  {
    id: 'solo-silo',
    nameRu: 'MS-11 «Одиночная шахта»',
    nameEn: 'MS-11 Solo Silo',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/solo-silo.png'
  },
  {
    id: 'cremator',
    nameRu: 'B/FLAM-80 «Крематор»',
    nameEn: 'B/FLAM-80 Cremator',
    category: 'support',
    warbond: 'flame',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/cremator.png'
  },
  {
    id: 'maxigun',
    nameRu: 'M-1000 «Максиган»',
    nameEn: 'M-1000 Maxigun',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/maxigun.png'
  },
  {
    id: 'one-true-flag',
    nameRu: 'CQC-1 «Единственный флаг»',
    nameEn: 'CQC-1 One True Flag',
    category: 'support',
    warbond: 'redacted',
    typeRu: 'Вспомогательное оружие',
    typeEn: 'Support Weapon Stratagem',
    imageUrl: '/assets/stratagems/support/one-true-flag.png'
  },

  // --- BACKPACKS ---
  {
    id: 'supply-pack',
    nameRu: 'B-1 «Рюкзак с припасами»',
    nameEn: 'B-1 Supply Pack',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem',
    imageUrl: '/assets/stratagems/backpacks/supply-pack.png'
  },
  {
    id: 'jump-pack',
    nameRu: 'LIFT-850 «Прыжковый ранец»',
    nameEn: 'LIFT-850 Jump Pack',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem',
    imageUrl: '/assets/stratagems/backpacks/jump-pack.png'
  },
  {
    id: 'ballistic-shield',
    nameRu: 'SH-20 «Баллистический щит»',
    nameEn: 'SH-20 Ballistic Shield Backpack',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem',
    imageUrl: '/assets/stratagems/backpacks/ballistic-shield.png'
  },
  {
    id: 'guard-dog-bullet',
    nameRu: 'AX/AR-23 «Сторожевой пес»',
    nameEn: 'AX/AR-23 Guard Dog',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem',
    imageUrl: '/assets/stratagems/backpacks/guard-dog-bullet.png'
  },
  {
    id: 'guard-dog-laser',
    nameRu: 'AX/LAS-5 «Охранитель»',
    nameEn: 'AX/LAS-5 Rover',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem',
    imageUrl: '/assets/stratagems/backpacks/guard-dog-laser.png'
  },
  {
    id: 'shield-generator-pack',
    nameRu: 'SH-32 «Рюкзак-генератор щита»',
    nameEn: 'SH-32 Shield Generator Pack',
    category: 'backpack',
    warbond: 'default',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem',
    imageUrl: '/assets/stratagems/backpacks/shield-generator-pack.png'
  },
  {
    id: 'directional-shield',
    nameRu: 'SH-51 «Направленный щит»',
    nameEn: 'SH-51 Directional Shield',
    category: 'backpack',
    warbond: 'truth',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem',
    imageUrl: '/assets/stratagems/backpacks/directional-shield.png'
  },
  {
    id: 'hot-dog',
    nameRu: 'AX/FLAM-75 «Хот-дог»',
    nameEn: 'AX/FLAM-75 Hot Dog',
    category: 'backpack',
    warbond: 'flame',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem',
    imageUrl: '/assets/stratagems/backpacks/hot-dog.png'
  },
  {
    id: 'portable-hellbomb',
    nameRu: 'B-100 «Портативная хэллбомба»',
    nameEn: 'B-100 Portable Hellbomb',
    category: 'backpack',
    warbond: 'redacted',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem',
    imageUrl: '/assets/stratagems/backpacks/portable-hellbomb.png'
  },
  {
    id: 'k-9-backpack',
    nameRu: 'AX/ARC-3 «К-9»',
    nameEn: 'AX/ARC-3 K-9',
    category: 'backpack',
    warbond: 'redacted',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem',
    imageUrl: '/assets/stratagems/backpacks/k-9-backpack.png'
  },
  {
    id: 'hover-pack',
    nameRu: 'LIFT-860 «Летающий ранец»',
    nameEn: 'LIFT-860 Hover Pack',
    category: 'backpack',
    warbond: 'redacted',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem',
    imageUrl: '/assets/stratagems/backpacks/hover-pack.png'
  },
  {
    id: 'dog-breath',
    nameRu: 'AX/TX-13 «Дыхание пса»',
    nameEn: 'AX/TX-13 Dog Breath',
    category: 'backpack',
    warbond: 'chemical',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem',
    imageUrl: '/assets/stratagems/backpacks/dog-breath.png'
  },
  {
    id: 'warp-pack',
    nameRu: 'LIFT-182 «Варп-ранец»',
    nameEn: 'LIFT-182 Warp Pack',
    category: 'backpack',
    warbond: 'redacted',
    typeRu: 'Рюкзак',
    typeEn: 'Backpack Stratagem',
    imageUrl: '/assets/stratagems/backpacks/warp-pack.png'
  },

  // --- VEHICLES ---
  {
    id: 'supply-frv',
    nameRu: 'M-103 «Машина снабжения»',
    nameEn: 'M-103 Supply FRV',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Транспорт',
    typeEn: 'Vehicle Stratagem',
    imageUrl: '/assets/stratagems/defensive/supply-frv.png'
  },
  {
    id: 'incinerator-frv',
    nameRu: 'M-104 «Огнеметная машина»',
    nameEn: 'M-104 Incinerator FRV',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Транспорт',
    typeEn: 'Vehicle Stratagem',
    imageUrl: '/assets/stratagems/defensive/incinerator-frv.png'
  },
  {
    id: 'emancipator-exosuit',
    nameRu: 'EXO-49 Экзокостюм «Освободитель»',
    nameEn: 'EXO-49 Emancipator Exosuit',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Экзокостюм',
    typeEn: 'Exosuit Stratagem',
    imageUrl: '/assets/stratagems/defensive/emancipator-exosuit.png'
  },
  {
    id: 'patriot-exosuit',
    nameRu: 'EXO-45 Экзокостюм «Патриот»',
    nameEn: 'EXO-45 Patriot Exosuit',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Экзокостюм',
    typeEn: 'Exosuit Stratagem',
    imageUrl: '/assets/stratagems/defensive/patriot-exosuit.png'
  },
  {
    id: 'recon-vehicle',
    nameRu: 'M-102 «Легкая разведывательная машина»',
    nameEn: 'M-102 Fast Recon Vehicle',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Транспорт',
    typeEn: 'Vehicle Stratagem',
    imageUrl: '/assets/stratagems/defensive/recon-vehicle.png'
  },
  {
    id: 'bastion-tank',
    nameRu: 'TD-220 «Бастион MK XVI»',
    nameEn: 'TD-220 Bastion MK XVI',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Транспорт',
    typeEn: 'Vehicle Stratagem',
    imageUrl: '/assets/stratagems/defensive/bastion-tank.png'
  },
  {
    id: 'breakthrough-exosuit',
    nameRu: 'EXO-55 Экзокостюм «Прорыв»',
    nameEn: 'EXO-55 Breakthrough Exosuit',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Экзокостюм',
    typeEn: 'Exosuit Stratagem',
    imageUrl: '/assets/stratagems/defensive/breakthrough-exosuit.png'
  },
  {
    id: 'lumberer-exosuit',
    nameRu: 'EXO-51 Экзокостюм «Лесоруб»',
    nameEn: 'EXO-51 Lumberer Exosuit',
    category: 'defensive',
    warbond: 'exo',
    typeRu: 'Экзокостюм',
    typeEn: 'Exosuit Stratagem',
    imageUrl: '/assets/stratagems/defensive/lumberer-exosuit.png'
  },

  // --- SENTRIES ---
  {
    id: 'machine-gun-sentry',
    nameRu: 'A/MG-43 «Турель-пулемет»',
    nameEn: 'A/MG-43 Machine Gun Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem',
    imageUrl: '/assets/stratagems/defensive/machine-gun-sentry.png'
  },
  {
    id: 'gatling-sentry',
    nameRu: 'A/G-16 «Турель Гатлинга»',
    nameEn: 'A/G-16 Gatling Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem',
    imageUrl: '/assets/stratagems/defensive/gatling-sentry.png'
  },
  {
    id: 'autocannon-sentry',
    nameRu: 'A/AC-8 «Турель-автопушка»',
    nameEn: 'A/AC-8 Autocannon Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem',
    imageUrl: '/assets/stratagems/defensive/autocannon-sentry.png'
  },
  {
    id: 'mortar-sentry',
    nameRu: 'A/M-12 «Минометная турель»',
    nameEn: 'A/M-12 Mortar Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem',
    imageUrl: '/assets/stratagems/defensive/mortar-sentry.png'
  },
  {
    id: 'rocket-sentry',
    nameRu: 'A/MLS-4X «Ракетная турель»',
    nameEn: 'A/MLS-4X Rocket Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem',
    imageUrl: '/assets/stratagems/defensive/rocket-sentry.png'
  },
  {
    id: 'tesla-tower',
    nameRu: 'A/ARC-3 «Башня Тесла»',
    nameEn: 'A/ARC-3 Tesla Tower',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem',
    imageUrl: '/assets/stratagems/defensive/tesla-tower.png'
  },
  {
    id: 'ems-mortar-sentry',
    nameRu: 'A/M-23 «ЭМ-минометная турель»',
    nameEn: 'A/M-23 EMS Mortar Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem',
    imageUrl: '/assets/stratagems/defensive/ems-mortar-sentry.png'
  },
  {
    id: 'laser-sentry',
    nameRu: 'A/LAS-98 «Лазерная турель»',
    nameEn: 'A/LAS-98 Laser Sentry',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem',
    imageUrl: '/assets/stratagems/defensive/laser-sentry.png'
  },
  {
    id: 'flame-sentry',
    nameRu: 'A/FLAM-40 «Огнеметная турель»',
    nameEn: 'A/FLAM-40 Flame Sentry',
    category: 'defensive',
    warbond: 'flame',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem',
    imageUrl: '/assets/stratagems/defensive/flame-sentry.png'
  },
  {
    id: 'gas-mortar-sentry',
    nameRu: 'A/GM-17 «Газовая минометная турель»',
    nameEn: 'A/GM-17 Gas Mortar Sentry',
    category: 'defensive',
    warbond: 'chemical',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Robotics Workshop Stratagem',
    imageUrl: '/assets/stratagems/defensive/gas-mortar-sentry.png'
  },

  // --- EMPLACEMENTS ---
  {
    id: 'anti-personnel-mines',
    nameRu: 'MD-6 «Противопехотное минное поле»',
    nameEn: 'MD-6 Anti-Personnel Minefield',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem',
    imageUrl: '/assets/stratagems/defensive/anti-personnel-mines.png'
  },
  {
    id: 'incendiary-mines',
    nameRu: 'MD-I4 «Зажигательные мины»',
    nameEn: 'MD-I4 Incendiary Mines',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem',
    imageUrl: '/assets/stratagems/defensive/incendiary-mines.png'
  },
  {
    id: 'anti-tank-mines',
    nameRu: 'MD-17 «Противотанковые мины»',
    nameEn: 'MD-17 Anti-Tank Mines',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem',
    imageUrl: '/assets/stratagems/defensive/anti-tank-mines.png'
  },
  {
    id: 'shield-relay',
    nameRu: 'FX-12 «Реле генератора щита»',
    nameEn: 'FX-12 Shield Generator Relay',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem',
    imageUrl: '/assets/stratagems/defensive/shield-relay.png'
  },
  {
    id: 'hmg-emplacement',
    nameRu: 'E/MG-101 «Тяжелая пулеметная установка»',
    nameEn: 'E/MG-101 HMG Emplacement',
    category: 'defensive',
    warbond: 'default',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Bridge Stratagem',
    imageUrl: '/assets/stratagems/defensive/hmg-emplacement.png'
  },
  {
    id: 'grenadier-battlement',
    nameRu: 'E/GL-21 «Гранатометная позиция»',
    nameEn: 'E/GL-21 Grenadier Battlement',
    category: 'defensive',
    warbond: 'redacted',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Bridge Stratagem',
    imageUrl: '/assets/stratagems/defensive/grenadier-battlement.png'
  },
  {
    id: 'gas-mines',
    nameRu: 'MD-8 «Газовые мины»',
    nameEn: 'MD-8 Gas Mines',
    category: 'defensive',
    warbond: 'chemical',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Engineering Bay Stratagem',
    imageUrl: '/assets/stratagems/defensive/gas-mines.png'
  },
  {
    id: 'anti-tank-emplacement',
    nameRu: 'E/AT-12 «Противотанковая турель»',
    nameEn: 'E/AT-12 Anti-Tank Emplacement',
    category: 'defensive',
    warbond: 'redacted',
    typeRu: 'Оборонительная стратагема',
    typeEn: 'Bridge Stratagem',
    imageUrl: '/assets/stratagems/defensive/anti-tank-emplacement.png'
  },

  // --- BODY ARMOR ---
  {
    id: 'b-01-tactical',
    nameRu: 'B-01 «Тактическая»',
    nameEn: 'B-01 Tactical',
    category: 'armor',
    warbond: 'default',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor',
    imageUrl: '/assets/gear/armor/b-01-tactical.png'
  },
  {
    id: 'sc-30-trailblazer',
    nameRu: 'SC-30 «Следопыт»',
    nameEn: 'SC-30 Trailblazer Scout',
    category: 'armor',
    warbond: 'default',
    typeRu: 'Легкая броня',
    typeEn: 'Light Armor',
    imageUrl: '/assets/gear/armor/sc-30-trailblazer.png'
  },
  {
    id: 'ce-35-trench',
    nameRu: 'CE-35 «Траншейный инженер»',
    nameEn: 'CE-35 Trench Engineer',
    category: 'armor',
    warbond: 'default',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor',
    imageUrl: '/assets/gear/armor/ce-35-trench.png'
  },
  {
    id: 'fs-23-battle',
    nameRu: 'FS-23 «Боевой мастер»',
    nameEn: 'FS-23 Battle Master',
    category: 'armor',
    warbond: 'default',
    typeRu: 'Тяжелая броня',
    typeEn: 'Heavy Armor',
    imageUrl: '/assets/gear/armor/fs-23-battle.png'
  },
  {
    id: 'ce-81-juggernaut',
    nameRu: 'CE-81 «Джаггернаут»',
    nameEn: 'CE-81 Juggernaut',
    category: 'armor',
    warbond: 'superstore',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor',
    imageUrl: '/assets/gear/armor/ce-81-juggernaut.png'
  },
  {
    id: 'sa-25-steel',
    nameRu: 'SA-25 «Стальной горн»',
    nameEn: 'SA-25 Steel Trooper',
    category: 'armor',
    warbond: 'steeled',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor',
    imageUrl: '/assets/gear/armor/sa-25-steel.png'
  },
  {
    id: 'ex-03-prototype',
    nameRu: 'EX-03 «Прототип 3»',
    nameEn: 'EX-03 Prototype 3',
    category: 'armor',
    warbond: 'cutting',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor',
    imageUrl: '/assets/gear/armor/ex-03-prototype.png'
  },
  {
    id: 'ce-27-ground',
    nameRu: 'CE-27 «Наземный штурмовик»',
    nameEn: 'CE-27 Ground Breaker',
    category: 'armor',
    warbond: 'democratic',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor',
    imageUrl: '/assets/gear/armor/ce-27-ground.png'
  },
  {
    id: 'cw-9-white',
    nameRu: 'CW-9 «Белый волк»',
    nameEn: 'CW-9 White Wolf',
    category: 'armor',
    warbond: 'polar',
    typeRu: 'Средняя броня',
    typeEn: 'Medium Armor',
    imageUrl: '/assets/gear/armor/cw-9-white.png'
  },
  {
    id: 'ph-9-predator',
    nameRu: 'PH-9 «Хищник»',
    nameEn: 'PH-9 Predator',
    category: 'armor',
    warbond: 'viper',
    typeRu: 'Легкая броня',
    typeEn: 'Light Armor',
    imageUrl: '/assets/gear/armor/ph-9-predator.png'
  },
  {
    id: 'i-09-heat',
    nameRu: 'I-09 «Испепелитель»',
    nameEn: 'I-09 Heatseeker',
    category: 'armor',
    warbond: 'flame',
    typeRu: 'Лёгкая броня',
    typeEn: 'Light Armor',
    imageUrl: '/assets/gear/armor/i-09-heat.png'
  },
  {
    id: 'af-50-noxious',
    nameRu: 'AF-50 «Токсичный страж»',
    nameEn: 'AF-50 Noxious Ranger',
    category: 'armor',
    warbond: 'chemical',
    typeRu: 'Легкая броня',
    typeEn: 'Light Armor',
    imageUrl: '/assets/gear/armor/af-50-noxious.png'
  },
  {
    id: 'uf-16-inspector',
    nameRu: 'UF-16 «Инспектор»',
    nameEn: 'UF-16 Inspector',
    category: 'armor',
    warbond: 'truth',
    typeRu: 'Лёгкая броня',
    typeEn: 'Light Armor',
    imageUrl: '/assets/gear/armor/uf-16-inspector.png'
  },

  // --- HELMETS ---
  {
    id: 'b-01-tactical-helmet',
    nameRu: 'Шлем B-01 «Тактический»',
    nameEn: 'B-01 Tactical Helmet',
    category: 'helmet',
    warbond: 'default',
    typeRu: 'Шлем',
    typeEn: 'Helmet',
    imageUrl: '/assets/gear/helmets/b-01-tactical-helmet.png'
  },
  {
    id: 'sc-30-trailblazer-helmet',
    nameRu: 'Шлем SC-30 «Следопыт»',
    nameEn: 'SC-30 Trailblazer Scout Helmet',
    category: 'helmet',
    warbond: 'default',
    typeRu: 'Шлем',
    typeEn: 'Helmet',
    imageUrl: '/assets/gear/helmets/sc-30-trailblazer-helmet.png'
  },
  {
    id: 'sa-25-steel-helmet',
    nameRu: 'Шлем SA-25 «Стальной горн»',
    nameEn: 'SA-25 Steel Trooper Helmet',
    category: 'helmet',
    warbond: 'steeled',
    typeRu: 'Шлем',
    typeEn: 'Helmet',
    imageUrl: '/assets/gear/helmets/sa-25-steel-helmet.png'
  },
  {
    id: 'ex-03-prototype-helmet',
    nameRu: 'Шлем EX-03 «Прототип 3»',
    nameEn: 'EX-03 Prototype 3 Helmet',
    category: 'helmet',
    warbond: 'cutting',
    typeRu: 'Шлем',
    typeEn: 'Helmet',
    imageUrl: '/assets/gear/helmets/ex-03-prototype-helmet.png'
  },
  {
    id: 'ce-27-ground-helmet',
    nameRu: 'Шлем CE-27 «Наземный штурмовик»',
    nameEn: 'CE-27 Ground Breaker Helmet',
    category: 'helmet',
    warbond: 'democratic',
    typeRu: 'Шлем',
    typeEn: 'Helmet',
    imageUrl: '/assets/gear/helmets/ce-27-ground-helmet.png'
  },
  {
    id: 'cw-9-white-helmet',
    nameRu: 'Шлем CW-9 «Белая мгла»',
    nameEn: 'CW-9 White Out Helmet',
    category: 'helmet',
    warbond: 'polar',
    typeRu: 'Шлем',
    typeEn: 'Helmet',
    imageUrl: '/assets/gear/helmets/cw-9-white-helmet.png'
  },
  {
    id: 'ph-9-predator-helmet',
    nameRu: 'Шлем PH-9 «Хищник»',
    nameEn: 'PH-9 Predator Helmet',
    category: 'helmet',
    warbond: 'viper',
    typeRu: 'Шлем',
    typeEn: 'Helmet',
    imageUrl: '/assets/gear/helmets/ph-9-predator-helmet.png'
  },
  {
    id: 'i-09-heat-helmet',
    nameRu: 'Шлем I-09 «Испепелитель»',
    nameEn: 'I-09 Heatseeker Helmet',
    category: 'helmet',
    warbond: 'flame',
    typeRu: 'Шлем',
    typeEn: 'Helmet',
    imageUrl: '/assets/gear/helmets/i-09-heat-helmet.png'
  },
  {
    id: 'af-50-noxious-helmet',
    nameRu: 'Шлем AF-50 «Токсичный страж»',
    nameEn: 'AF-50 Noxious Ranger Helmet',
    category: 'helmet',
    warbond: 'chemical',
    typeRu: 'Шлем',
    typeEn: 'Helmet',
    imageUrl: '/assets/gear/helmets/af-50-noxious-helmet.png'
  },
  {
    id: 'uf-16-inspector-helmet',
    nameRu: 'Шлем UF-16 «Инспектор»',
    nameEn: 'UF-16 Inspector Helmet',
    category: 'helmet',
    warbond: 'truth',
    typeRu: 'Шлем',
    typeEn: 'Helmet',
    imageUrl: '/assets/gear/helmets/uf-16-inspector-helmet.png'
  },

  // --- CAPES ---
  {
    id: 'will-of-people',
    nameRu: 'Воля Народа',
    nameEn: 'Will of the People',
    category: 'cape',
    warbond: 'default',
    typeRu: 'Плащ',
    typeEn: 'Cape',
    imageUrl: '/assets/gear/capes/will-of-people.png'
  },
  {
    id: 'crimson-rider',
    nameRu: 'Багряный Всадник',
    nameEn: 'Crimson Rider',
    category: 'cape',
    warbond: 'steeled',
    typeRu: 'Плащ',
    typeEn: 'Cape',
    imageUrl: '/assets/gear/capes/crimson-rider.png'
  },
  {
    id: 'mantle-of-crit-over',
    nameRu: 'Мантия Настоящего Патриота',
    nameEn: 'Mantle of Critical Patriotism',
    category: 'cape',
    warbond: 'default',
    typeRu: 'Плащ',
    typeEn: 'Cape',
    imageUrl: '/assets/gear/capes/mantle-of-crit-over.png'
  },
  {
    id: 'bot-slayer',
    nameRu: 'Истребитель автоматонов',
    nameEn: 'Automaton Slayer',
    category: 'cape',
    warbond: 'default',
    typeRu: 'Плащ',
    typeEn: 'Cape',
    imageUrl: '/assets/gear/capes/bot-slayer.png'
  },
  {
    id: 'executioners-canopy',
    nameRu: 'Навес палача',
    nameEn: 'Executioner\'s Canopy',
    category: 'cape',
    warbond: 'democratic',
    typeRu: 'Плащ',
    typeEn: 'Cape',
    imageUrl: '/assets/gear/capes/executioners-canopy.png'
  },
  {
    id: 'crest-of-shattered',
    nameRu: 'Герб разбитых надежд',
    nameEn: 'Crest of Shattered Soldiers',
    category: 'cape',
    warbond: 'polar',
    typeRu: 'Плащ',
    typeEn: 'Cape',
    imageUrl: '/assets/gear/capes/crest-of-shattered.png'
  },
  {
    id: 'mark-of-the-crimson',
    nameRu: 'Знак багряного когтя',
    nameEn: 'Mark of the Crimson Fang',
    category: 'cape',
    warbond: 'viper',
    typeRu: 'Плащ',
    typeEn: 'Cape',
    imageUrl: '/assets/gear/capes/mark-of-the-crimson.png'
  },
  {
    id: 'eclipse-of-valian',
    nameRu: 'Затмение доблести',
    nameEn: 'Eclipse of Valiance',
    category: 'cape',
    warbond: 'flame',
    typeRu: 'Плащ',
    typeEn: 'Cape',
    imageUrl: '/assets/gear/capes/eclipse-of-valian.png'
  },
  {
    id: 'standard-of-authority',
    nameRu: 'Штандарт власти',
    nameEn: 'Standard of Authority',
    category: 'cape',
    warbond: 'truth',
    typeRu: 'Плащ',
    typeEn: 'Cape',
    imageUrl: '/assets/gear/capes/standard-of-authority.png'
  }
];
