'use strict';
/* ═══════════════════════════════════════════════════
   ARCHIVE — Minimalist Fashion Editorial
   i18n (EN/RU) · Scroll depth · Garment panels · Audio · Decay
═══════════════════════════════════════════════════ */

// ── MULTILINGUAL GARMENT DATA ──────────────────────
const GARMENT_DATA = {
  ro1: {
    en: {
      collection: 'SS2020 — Tecuatl',
      name: 'Megalaced Trucker Jacket',
      details: [
        ['Material', 'Cotton canvas with heavy cotton lacing'],
        ['Construction', 'Megalacing web hand-threaded over the entirety of the body'],
        ['Silhouette', 'Cropped standard trucker block interrupted by chaotic lines'],
      ],
      concept: 'A cage worn directly over the body.'
    },
    ru: {
      collection: 'SS2020 — Текуатль',
      name: 'Куртка-трукер Megalaced',
      details: [
        ['Материал', 'Хлопковый холст с тяжёлой хлопковой шнуровкой'],
        ['Конструкция', 'Мегашнуровка вручную пронизывает всё тело куртки'],
        ['Силуэт', 'Укороченный стандартный трукер, прерванный хаотичными линиями'],
      ],
      concept: 'Клетка, надетая прямо на тело.'
    }
  },
  ro2: {
    en: {
      collection: 'Ongoing',
      name: 'Bolan Patchwork Flare Jeans',
      details: [
        ['Material', 'Mineral Pearl heavy denim'],
        ['Construction', 'Geometric patchwork wrapping asymmetrically around the leg'],
        ['Silhouette', 'High waisted, violently flared bootcut pooling heavily at the floor'],
      ],
      concept: 'Denim treated as brutalist architecture.'
    },
    ru: {
      collection: 'Постоянная',
      name: 'Джинсы-клёш с лоскутами Болан',
      details: [
        ['Материал', 'Тяжёлый деним Mineral Pearl'],
        ['Конструкция', 'Геометрические лоскуты, асимметрично обвивающие ногу'],
        ['Силуэт', 'Высокая посадка, брутально расклешённый bootcut, тяжело стелющийся по полу'],
      ],
      concept: 'Деним как брутальная архитектура.'
    }
  },
  ro3: {
    en: {
      collection: 'Ongoing',
      name: 'Kiss Heels',
      details: [
        ['Material', 'Calf leather upper, plexiglass platform, metal hardware'],
        ['Construction', 'Clear platform front with an aggressive metal grill heel piece'],
        ['Silhouette', '12cm towering aggressive lift on a brutal metal frame'],
      ],
      concept: 'Elevation through weaponized footwear.'
    },
    ru: {
      collection: 'Постоянная',
      name: 'Каблуки Kiss',
      details: [
        ['Материал', 'Верх из телячьей кожи, платформа из оргстекла, металлическая фурнитура'],
        ['Конструкция', 'Прозрачная передняя платформа с агрессивной металлической решёткой на каблуке'],
        ['Силуэт', '12 см стремительного подъёма на жёсткой металлической раме'],
      ],
      concept: 'Возвышение через вооружённую обувь.'
    }
  },
  ccp1: {
    en: {
      collection: 'Object Series',
      name: 'Pig Bag',
      details: [
        ['Material', 'Full pig leather, organically stiffened'],
        ['Construction', 'Molded directly over a solid form, sealed with heavy metal clasps'],
        ['Silhouette', 'Unsettling organic shape resembling an animal carcass'],
      ],
      concept: 'Making the material origin unavoidable.'
    },
    ru: {
      collection: 'Серия объектов',
      name: 'Свиная сумка',
      details: [
        ['Материал', 'Полная свиная кожа, органически затвердевшая'],
        ['Конструкция', 'Отлита прямо по цельной форме, запечатана тяжёлыми металлическими застёжками'],
        ['Силуэт', 'Тревожная органическая форма, напоминающая тушу животного'],
      ],
      concept: 'Происхождение материала сделано неизбежным.'
    }
  },
  ccp2: {
    en: {
      collection: 'AW2006',
      name: 'Prosthetic Drip Boots',
      details: [
        ['Material', 'Horse hide, liquid rubber dip'],
        ['Construction', 'Boot immersed upside-down in liquid rubber, leaving hardened teardrops'],
        ['Silhouette', 'Heavy distorted footwear gripped by melted synthetic matter'],
      ],
      concept: 'Footwear that bleeds and freezes in time.'
    },
    ru: {
      collection: 'AW2006',
      name: 'Протезные сапоги с каплями',
      details: [
        ['Материал', 'Конская шкура, жидкая резина методом окунания'],
        ['Конструкция', 'Сапог погружён вниз головой в жидкую резину, оставляющую затвердевшие капли'],
        ['Силуэт', 'Тяжёлая деформированная обувь, схваченная расплавленной синтетикой'],
      ],
      concept: 'Обувь, истекающая и застывающая во времени.'
    }
  },
  ccp3: {
    en: {
      collection: 'Ongoing',
      name: 'Teeth Necklace',
      details: [
        ['Material', 'Oxidized silver'],
        ['Construction', 'Hand cast, articulated pieces perfectly resembling human molars'],
        ['Silhouette', 'A grim, heavy choker sitting tightly at the collarbone'],
      ],
      concept: 'Wearing mortality as an adornment.'
    },
    ru: {
      collection: 'Постоянная',
      name: 'Ожерелье из зубов',
      details: [
        ['Материал', 'Окисленное серебро'],
        ['Конструкция', 'Литьё вручную, шарнирные элементы, идеально воспроизводящие коренные зубы'],
        ['Силуэт', 'Мрачный, тяжёлый чокер, плотно прилегающий к ключице'],
      ],
      concept: 'Смертность как украшение.'
    }
  },
  mm1: {
    en: {
      collection: 'Line 0 — Artisanal',
      name: 'Painted GATs',
      details: [
        ['Material', 'Military surplus trainer, thick white paint'],
        ['Construction', 'Shoes dipped and painted by hand, designed to chip over decades'],
        ['Silhouette', 'Classic runner hidden under a crust of history'],
      ],
      concept: 'The wearer finishes the shoe by destroying it.'
    },
    ru: {
      collection: 'Линия 0 — Артизанальная',
      name: 'Раскрашенные GAT',
      details: [
        ['Материал', 'Армейские кроссовки, густая белая краска'],
        ['Конструкция', 'Туфли окунают и красят вручную — рассчитаны на то, чтобы облупляться десятилетиями'],
        ['Силуэт', 'Классный кроссовок, скрытый под коркой истории'],
      ],
      concept: 'Носитель завершает туфлю, разрушая её.'
    }
  },
  mm2: {
    en: {
      collection: 'Line 22',
      name: 'Japan GATs',
      details: [
        ['Material', 'Canvas, suede, vulcanized rubber'],
        ['Construction', 'Hand written messages simulating graffiti covering the entire upper'],
        ['Silhouette', 'Low profile nostalgic 70s sneaker vandalized'],
      ],
      concept: 'Subverting mass production with individualized vandalism.'
    },
    ru: {
      collection: 'Линия 22',
      name: 'Японские GAT',
      details: [
        ['Материал', 'Холст, замша, вулканизированная резина'],
        ['Конструкция', 'Рукописные надписи, имитирующие граффити, покрывают весь верх'],
        ['Силуэт', 'Низкий ностальгический кроссовок 70-х, подвергшийся вандализму'],
      ],
      concept: 'Массовое производство подрывается индивидуальным вандализмом.'
    }
  },
  mm3: {
    en: {
      collection: 'SS1989 — Ongoing',
      name: 'Tabi Boot',
      details: [
        ['Material', 'Calfskin upper, leather sole'],
        ['Construction', 'Traditional Japanese split-toe sock mounted on a high heel cylinder'],
        ['Silhouette', 'Cylindrical heel, bifurcated toe'],
      ],
      concept: 'The shoe does not pretend the foot is whole.'
    },
    ru: {
      collection: 'SS1989 — Постоянная',
      name: 'Ботинок Таби',
      details: [
        ['Материал', 'Верх из телячьей кожи, кожаная подошва'],
        ['Конструкция', 'Традиционный японский носок с раздвоенным пальцем на высоком цилиндрическом каблуке'],
        ['Силуэт', 'Цилиндрический каблук, раздвоенный носок'],
      ],
      concept: 'Обувь не притворяется, что ступня целая.'
    }
  },
  yy1: {
    en: {
      collection: 'Pour Homme',
      name: 'Attach Print Coat',
      details: [
        ['Material', 'Heavy wool gabardine with screen printed text'],
        ['Construction', 'Oversized drape, drop shoulder, entirely unlined'],
        ['Silhouette', 'A vast dark shroud stretching to the ankles'],
      ],
      concept: 'Words meant to be read on a moving ghost.'
    },
    ru: {
      collection: 'Pour Homme',
      name: 'Пальто с принтом-аппликацией',
      details: [
        ['Материал', 'Тяжёлый шерстяной габардин с трафаретным текстом'],
        ['Конструкция', 'Оверсайз-драпировка, спущенное плечо, полностью без подкладки'],
        ['Силуэт', 'Необъятный тёмный саван, ниспадающий до щиколоток'],
      ],
      concept: 'Слова, предназначенные для чтения на движущемся призраке.'
    }
  },
  yy2: {
    en: {
      collection: 'Pour Homme',
      name: 'Wool Brim Hat',
      details: [
        ['Material', 'Felted boiled wool'],
        ['Construction', 'Hand molded uneven brim'],
        ['Silhouette', 'A dark shadow thrown intentionally over the face'],
      ],
      concept: 'Anonymity achieved through classical silhouettes.'
    },
    ru: {
      collection: 'Pour Homme',
      name: 'Шерстяная шляпа с полями',
      details: [
        ['Материал', 'Валяная кипячёная шерсть'],
        ['Конструкция', 'Поля неравномерной формы, вылеплены вручную'],
        ['Силуэт', 'Тёмная тень, намеренно брошенная на лицо'],
      ],
      concept: 'Анонимность через классические силуэты.'
    }
  },
  yy3: {
    en: {
      collection: 'Y\'s Series',
      name: 'Side Zip-up Jacket',
      details: [
        ['Material', 'Washed cotton canvas'],
        ['Construction', 'Asymmetric zipper tracking down the ribcage instead of the center'],
        ['Silhouette', 'Cropped, boxy, distorted waistline'],
      ],
      concept: 'Re-routing the function of entry.'
    },
    ru: {
      collection: 'Серия Y\'s',
      name: 'Жакет на боковой молнии',
      details: [
        ['Материал', 'Стираный хлопковый холст'],
        ['Конструкция', 'Асимметричная молния, тянущаяся по рёбрам вместо центра'],
        ['Силуэт', 'Укороченный, квадратный, деформированная линия талии'],
      ],
      concept: 'Переосмысление функции входа.'
    }
  },
  g1: {
    en: {
      collection: 'Horse Hide',
      name: 'Leather Boot',
      details: [
        ['Material', 'Object-dyed tumbled reverse horse leather'],
        ['Construction', 'Single piece upper, stacked leather sole, oxidized back-zipper'],
        ['Silhouette', 'Collapsed ankle contour forming to the wearer\'s specific movement'],
      ],
      concept: 'Leather that remembers every step.'
    },
    ru: {
      collection: 'Конская кожа',
      name: 'Кожаный сапог',
      details: [
        ['Материал', 'Мятая конская кожа объектного крашения навыворот'],
        ['Конструкция', 'Цельный верх, наборная кожаная подошва, окисленная молния сзади'],
        ['Силуэт', 'Спавший контур щиколотки, формирующийся под движения конкретного носителя'],
      ],
      concept: 'Кожа, помнящая каждый шаг.'
    }
  },
  g2: {
    en: {
      collection: 'Ongoing',
      name: 'Classy Leather Heel',
      details: [
        ['Material', 'Polished treated calfskin'],
        ['Construction', 'Saddle stitched upper attached to a metal reinforced heel base'],
        ['Silhouette', 'A delicate upper with an industrially heavy heel'],
      ],
      concept: 'Elegance anchored by pure brutalism.'
    },
    ru: {
      collection: 'Постоянная',
      name: 'Изысканный кожаный каблук',
      details: [
        ['Материал', 'Полированная обработанная телячья кожа'],
        ['Конструкция', 'Верх с вогнутой строчкой, прикреплённый к основанию каблука с металлическим усилением'],
        ['Силуэт', 'Изящный верх с промышленно тяжёлым каблуком'],
      ],
      concept: 'Элегантность, заземлённая чистым брутализмом.'
    }
  },
  g3: {
    en: {
      collection: 'Object-Dyed',
      name: 'Leather Jacket',
      details: [
        ['Material', 'Full grain washed leather'],
        ['Construction', 'Dyed after assembly, shrinking the zipper tracks and violently warping the seams'],
        ['Silhouette', 'A tight second skin, shriveled and reborn in the bath'],
      ],
      concept: 'The jacket has suffered to become beautiful.'
    },
    ru: {
      collection: 'Объектное крашение',
      name: 'Кожаный жакет',
      details: [
        ['Материал', 'Стираная полнозернистая кожа'],
        ['Конструкция', 'Окрашен после сборки, сжимая молниевые рельсы и жестоко деформируя швы'],
        ['Силуэт', 'Облегающая вторая кожа, сморщенная и возрождённая в ванне'],
      ],
      concept: 'Жакет пострадал, чтобы стать прекрасным.'
    }
  }
};

// ── DOM ────────────────────────────────────────────
const body = document.body;
const panel = document.getElementById('garment-panel');
const panelName = document.getElementById('panel-name');
const panelCollection = document.getElementById('panel-collection');
const panelDetails = document.getElementById('panel-details');
const panelConcept = document.getElementById('panel-concept');
const gameOverlay = document.getElementById('game-overlay');
const gameStage = document.getElementById('game-stage');
const gameClose = document.getElementById('game-close');
const depthFill = document.getElementById('depth-fill');
const flicker = document.getElementById('page-flicker');
const audioBtn = document.getElementById('audio-btn');
const audioLabel = document.getElementById('audio-label');
const langBtn = document.getElementById('lang-btn');
const grainCvs = document.getElementById('grain');
const navLinks = document.querySelectorAll('.nav-link');

// ── INTERNATIONALIZATION ENGINE (i18n) ─────────────
let currentLang = 'en';

function updateLanguage() {
  document.documentElement.lang = currentLang;
  
  // Update Title
  const titleEl = document.querySelector('title');
  if (titleEl) {
    titleEl.textContent = currentLang === 'en' ? 'ARCHIVE — Avant-Garde Fashion' : 'АРХИВ — Авангардная Мода';
  }

  // Update elements with translation attributes
  document.querySelectorAll('[data-en][data-ru]').forEach(el => {
    const text = el.getAttribute(`data-${currentLang}`);
    el.innerHTML = text;
  });

  // Update Language Button Target Label
  // If EN, show 'RU' (meaning switch to Russian). If RU, show 'EN'.
  if (langBtn) {
    langBtn.textContent = currentLang === 'en' ? 'RU' : 'EN';
  }

  // Re-collect text nodes for the decay engine so it decays the translated text, not the old one
  recollectTextNodes();

  // If panel is open, update its content in the new language
  if (panelOpen && currentGarmentId) {
    openPanel(currentGarmentId);
  }
}

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ru' : 'en';
  updateLanguage();
  audioClick();
});

// ── GRAIN ──────────────────────────────────────────
(function () {
  const ctx = grainCvs.getContext('2d');
  let W, H;
  const resize = () => { grainCvs.width = W = window.innerWidth; grainCvs.height = H = window.innerHeight; };
  resize(); window.addEventListener('resize', resize);
  const draw = () => {
    const d = ctx.createImageData(W, H);
    const buf = d.data;
    for (let i = 0; i < buf.length; i += 4) {
      const v = (Math.random() * 255 * 0.4) | 0;
      buf[i] = buf[i+1] = buf[i+2] = v; buf[i+3] = (Math.random() * 25) | 0;
    }
    ctx.putImageData(d, 0, 0);
  };
  const loop = () => { draw(); requestAnimationFrame(loop); };
  loop();
})();

// ── SCROLL & DEPTH ────────────────────────────────
let currentLevel = 0;
const SECTIONS = document.querySelectorAll('.designer-section, .epilogue-section');

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const depth = parseInt(e.target.dataset.depth || 0);
    
    // Always update nav based on current section in view
    const designer = e.target.dataset.designer;
    navLinks.forEach(l => l.classList.toggle('active', l.dataset.target === 'ch-' + designer));

    if (depth !== currentLevel) {
      currentLevel = depth;
      
      body.dataset.level = depth;
      depthFill.style.width = (depth / 6 * 100) + '%';
      
      // subtle flicker on transition from depth 3+
      if (depth >= 3) triggerFlicker();

      // Инициализируем плавное разрушение вошедшей в поле зрения секции
      initSectionDecay(depth);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.designer-section, [data-depth]').forEach(s => io.observe(s));

function triggerFlicker() {
  flicker.classList.remove('blink');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => flicker.classList.add('blink'));
  });
}

// ── GARMENT HOVER PANEL ───────────────────────────
let panelOpen = false;
let hoverTimer = null;
let currentGarmentId = null;

document.querySelectorAll('.garment-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => openPanel(item.dataset.id), 120);
  });
  item.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(closePanel, 300);
  });
});

panel.addEventListener('mouseenter', () => clearTimeout(hoverTimer));
panel.addEventListener('mouseleave', () => { hoverTimer = setTimeout(closePanel, 300); });

// Touch/click support on garment items
document.querySelectorAll('.garment-item').forEach(item => {
  item.addEventListener('click', () => {
    const gId = item.dataset.id;
    const itemData = GARMENT_DATA[gId]?.[currentLang];
    if (panelOpen && panelName.textContent === (itemData?.name || '')) {
      closePanel();
    } else {
      openPanel(gId);
    }
  });
});

function openPanel(id) {
  const data = GARMENT_DATA[id]?.[currentLang];
  if (!data) return;
  currentGarmentId = id;
  panelCollection.textContent = data.collection;
  panelName.textContent = data.name;
  panelDetails.innerHTML = data.details.map(([k, v]) =>
    `<div><dt>${k}</dt><dd>${v}</dd></div>`
  ).join('');
  panelConcept.textContent = data.concept;
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  panelOpen = true;
}

function closePanel() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  panelOpen = false;
  currentGarmentId = null;
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

// ── AUDIO ENGINE ──────────────────────────────────
let audioCtx = null, masterGain = null, droneGain = null, running = false;

audioBtn.addEventListener('click', () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(audioCtx.destination);
    buildAmbience();
  }
  running = !running;
  audioBtn.classList.toggle('on', running);
  masterGain.gain.setTargetAtTime(running ? 0.35 : 0, audioCtx.currentTime, 1.5);
});

function buildAmbience() {
  // Drone
  [28, 42, 56].forEach((hz, i) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    const filt = audioCtx.createBiquadFilter();
    osc.type = 'sine'; osc.frequency.value = hz;
    filt.type = 'lowpass'; filt.frequency.value = 180;
    g.gain.value = [0.4, 0.2, 0.1][i];
    osc.connect(filt); filt.connect(g); g.connect(masterGain);
    osc.start();
    // slow LFO on frequency
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.frequency.value = 0.03 + i * 0.02;
    lfoGain.gain.value = 0.3;
    lfo.connect(lfoGain); lfoGain.connect(osc.frequency); lfo.start();
  });
  // Tape hiss
  const bufLen = audioCtx.sampleRate * 3;
  const buf = audioCtx.createBuffer(1, bufLen, audioCtx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < bufLen; i++) d[i] = (Math.random() * 2 - 1) * 0.08;
  const hiss = audioCtx.createBufferSource();
  hiss.buffer = buf; hiss.loop = true;
  const hissFilter = audioCtx.createBiquadFilter();
  hissFilter.type = 'highpass'; hissFilter.frequency.value = 4000;
  const hissGain = audioCtx.createGain(); hissGain.gain.value = 0.06;
  hiss.connect(hissFilter); hissFilter.connect(hissGain); hissGain.connect(masterGain);
  hiss.start();
}

function audioClick() {
  if (!audioCtx || !running) return;
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = 'triangle'; osc.frequency.value = 60;
  g.gain.setValueAtTime(0.15, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
  osc.connect(g); g.connect(masterGain);
  osc.start(); osc.stop(audioCtx.currentTime + 0.6);
}


// ══════════════════════════════════════════════════════
//  DECAY SYSTEM (5 PHASES)
//  Phase 1 (lvl 1-2): Letter scrambling only
//  Phase 2 (lvl 3): Scrambling + dead pixels + gentle sway
//  Phase 3 (lvl 4): Drips + heavier sway + pixels
//  Phase 4 (lvl 5): Falling blocks, fading to darkness
//  Phase 5 (lvl 6): Complete structural collapse
// ══════════════════════════════════════════════════════

// Translation-friendly scrambling text symbols
const glitchChars = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯabcdefghijklmnopqrstuvwxyz!@#$%░▒▓█';
let textNodes = [];

function collectTextNodes(node) {
  if (node.nodeType === 3) {
    if (node.nodeValue.trim() !== '') {
      // Store reference to node and its current original translation value
      textNodes.push({ node: node, orig: node.nodeValue });
    }
  } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
    for (let i = 0; i < node.childNodes.length; i++) {
      collectTextNodes(node.childNodes[i]);
    }
  }
}

function recollectTextNodes() {
  textNodes = [];
  document.querySelectorAll('.body-text, .designer-quote, .garment-title, .garment-year, .label, .designer-name, .hero-title, .void-text').forEach(el => {
    collectTextNodes(el);
  });
}

// Initial node collection
recollectTextNodes();

// Объект для хранения интервалов разрушения секций
const sectionDecayIntervals = {};
// Массив соответствия глубины (level) идентификаторам секций в HTML
const DEPTH_SECTIONS = [
  'ch-hero',      // 0
  'ch-owens',     // 1
  'ch-poell',     // 2
  'ch-margiela',  // 3
  'ch-yamamoto',  // 4
  'ch-guidi'      // 5
];

// ── ЭФФЕКТ: ПЛАВНОЕ ПАДЕНИЕ ЦЕЛОГО БЛОКА ──
function fallElement(el) {
  if (!el || el.classList.contains('is-destroyed')) return;
  el.classList.add('is-destroyed');

  const rect = el.getBoundingClientRect();
  const clone = el.cloneNode(true);
  
  // Убираем анимации и сбрасываем трансформации у клонов
  clone.style.animation = 'none';
  clone.style.transition = 'none';
  clone.style.margin = '0';
  clone.style.transform = 'none';
  clone.style.position = 'absolute';
  clone.style.inset = '0';
  clone.style.width = '100%';
  clone.style.height = '100%';

  const container = document.createElement('div');
  container.className = 'fall-container';
  container.style.position = 'fixed';
  container.style.left = `${rect.left}px`;
  container.style.top = `${rect.top}px`;
  container.style.width = `${rect.width}px`;
  container.style.height = `${rect.height}px`;
  container.style.zIndex = '9999';
  container.style.pointerEvents = 'none';

  const fallClasses = ['gravity-fall', 'gravity-fall-left', 'gravity-fall-right', 'gravity-tumble', 'gravity-collapse'];
  container.classList.add(fallClasses[Math.floor(Math.random() * fallClasses.length)]);
  
  container.appendChild(clone);
  document.body.appendChild(container);

  // Скрываем оригинал, оставляя его геометрию в документе
  el.style.visibility = 'hidden';

  setTimeout(() => {
    container.remove();
  }, 5000);
}

// ── ЭФФЕКТ: РАЗРЕЗАНИЕ БЛОКА ──
function splitElement(el) {
  if (!el || el.classList.contains('is-destroyed')) return;
  el.classList.add('is-destroyed');

  const rect = el.getBoundingClientRect();
  const container = document.createElement('div');
  container.className = 'split-container';
  container.style.position = 'fixed';
  container.style.left = `${rect.left}px`;
  container.style.top = `${rect.top}px`;
  container.style.width = `${rect.width}px`;
  container.style.height = `${rect.height}px`;
  container.style.zIndex = '9999';
  container.style.pointerEvents = 'none';

  // Различные направления разрезов
  const splitDirections = ['split-diagonal', 'split-horizontal', 'split-vertical'];
  const directionClass = splitDirections[Math.floor(Math.random() * splitDirections.length)];
  container.classList.add(directionClass);

  const half1 = document.createElement('div');
  half1.className = 'split-half split-half-1';
  
  const half2 = document.createElement('div');
  half2.className = 'split-half split-half-2';

  const clone1 = el.cloneNode(true);
  const clone2 = el.cloneNode(true);

  // Убираем анимации и сбрасываем трансформации у клонов
  [clone1, clone2].forEach(clone => {
    clone.style.animation = 'none';
    clone.style.transition = 'none';
    clone.style.margin = '0';
    clone.style.transform = 'none';
    clone.style.position = 'absolute';
    clone.style.inset = '0';
    clone.style.width = '100%';
    clone.style.height = '100%';
  });

  half1.appendChild(clone1);
  half2.appendChild(clone2);
  container.appendChild(half1);
  container.appendChild(half2);

  document.body.appendChild(container);

  // Скрываем оригинал, оставляя его геометрию в документе
  el.style.visibility = 'hidden';

  setTimeout(() => {
    container.remove();
  }, 5000);
}

// Инициализация разрушения секции по таймеру
function initSectionDecay(level) {
  if (level < 1 || level > 5) return;
  
  const sectionId = DEPTH_SECTIONS[level];
  if (!sectionId) return;

  // Если для этой секции уже запущен или отработал таймер, выходим
  if (sectionDecayIntervals[sectionId]) return;

  // Записываем плейсхолдер, чтобы избежать повторных запусков
  sectionDecayIntervals[sectionId] = true;

  // Даем пользователю 12 секунд спокойно посмотреть контент секции
  setTimeout(() => {
    const decayable = getDecayableElements(sectionId);
    if (decayable.length === 0) return;

    // Запускаем интервал постепенного разрушения элементов
    const intervalId = setInterval(() => {
      // Ищем еще неразрушенные элементы
      const activeElements = decayable.filter(el => !el.classList.contains('is-destroyed') && el.style.visibility !== 'hidden');
      
      if (activeElements.length === 0) {
        clearInterval(intervalId);
        return;
      }

      // Выбираем один случайный элемент
      const target = activeElements[Math.floor(Math.random() * activeElements.length)];

      // С вероятностью 50% роняем целиком, с вероятностью 50% разрезаем
      if (Math.random() < 0.5) {
        fallElement(target);
      } else {
        splitElement(target);
      }
    }, 6000); // Разрушаем один элемент каждые 6 секунд

    sectionDecayIntervals[sectionId] = intervalId;
  }, 12000); // 12 секунд на ознакомление
}

function getDecayableElements(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return [];
  // Находим все текстовые блоки, картинки, карточки вещей и заголовки секций
  return Array.from(section.querySelectorAll('.editorial-image, .garment-item, .text-block, .section-header'));
}

// ── PHASE 1: Soft Scrambling (lvl 1-2) ──
function scrambleTextPhase1() {
  if (currentLevel < 1 || currentLevel > 2) return;
  const intensity = currentLevel === 1 ? 0.01 : 0.025;

  textNodes.forEach(item => {
    if (Math.random() > 0.3) return;

    let chars = item.orig.split('');
    let modified = false;

    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === ' ' || chars[i] === '\n') continue;
      if (Math.random() < intensity) {
        chars[i] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        modified = true;
      }
    }

    if (modified) {
      item.node.nodeValue = chars.join('');
      // Smoothly revert to translation default
      setTimeout(() => {
        if (item.node.parentNode) item.node.nodeValue = item.orig;
      }, 300 + Math.random() * 400);
    }
  });
}

// ── PHASE 2: Dead Pixels (lvl 3) ──
function spawnDeadPixel() {
  const p = document.createElement('div');
  p.style.position = 'fixed';
  p.style.width = Math.random() > 0.8 ? '2px' : '1px';
  p.style.height = p.style.width;
  const colors = ['#f0f', '#0f0', '#ff0', '#f00', '#00f', '#000', '#fff'];
  p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  p.style.left = (Math.random() * 100) + 'vw';
  p.style.top = (Math.random() * 100) + 'vh';
  p.style.zIndex = 9999;
  p.style.pointerEvents = 'none';
  body.appendChild(p);

  const lifespan = 800 + Math.random() * 2500;
  setTimeout(() => { if (p.parentNode) p.parentNode.removeChild(p); }, lifespan);
}

// ── PHASE 3: Drips (lvl 4+) ──
function spawnLiteralDrip() {
  const targets = Array.from(document.querySelectorAll('.editorial-image img, .garment-img img, h1, h2, .section-index'));
  const inView = targets.filter(el => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0 && r.width > 0;
  });
  if (inView.length === 0) return;

  const target = inView[Math.floor(Math.random() * inView.length)];
  const isImage = target.tagName === 'IMG';
  const rect = target.getBoundingClientRect();

  const drip = document.createElement('div');
  drip.style.position = 'fixed';
  drip.style.zIndex = 1000;

  const w = isImage ? (4 + Math.random() * 15) : (2 + Math.random() * 4);
  const l = Math.random() * (rect.width - w);
  const overlap = isImage ? 5 : 2;

  drip.style.left = (rect.left + l) + 'px';
  drip.style.width = w + 'px';
  drip.style.top = (rect.bottom - overlap) + 'px';
  drip.style.height = (5 + Math.random() * 15) + 'px';
  drip.style.borderBottomLeftRadius = '50%';
  drip.style.borderBottomRightRadius = '50%';
  drip.style.overflow = 'hidden';
  drip.style.pointerEvents = 'none';

  if (isImage) {
    const clone = document.createElement('img');
    clone.src = target.src;
    clone.style.position = 'absolute';
    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';
    clone.style.left = -l + 'px';
    clone.style.top = -(rect.height - overlap) + 'px';
    clone.style.objectFit = 'cover';
    clone.style.filter = window.getComputedStyle(target).filter;
    drip.appendChild(clone);
  } else {
    const style = window.getComputedStyle(target);
    drip.style.backgroundColor = style.color;
    if (drip.style.backgroundColor === '' || drip.style.backgroundColor.includes('0, 0, 0, 0')) {
      drip.style.backgroundColor = '#111';
    }
  }

  body.appendChild(drip);

  const dropDist = window.innerHeight * (0.2 + Math.random() * 0.8);
  const dur = 2500 + Math.random() * 4000;

  drip.animate([
    { transform: 'translateY(0) scaleY(1)', opacity: 1 },
    { transform: `translateY(${dropDist}px) scaleY(${2 + Math.random()*4})`, opacity: 0 }
  ], {
    duration: dur,
    easing: 'ease-in',
    fill: 'forwards'
  });

  setTimeout(() => { if (drip.parentNode) drip.remove() }, dur + 100);
}

// ── MAIN DECAY SCHEDULER ───────────────────────────
let decayInterval = null;

function startDecayEngine() {
  if (decayInterval) clearInterval(decayInterval);
  if (currentLevel <= 0) return;

  const intervalMs = [
    null,
    2000,
    1500,
    1200,
    800,
    500,
    200,
  ];

  const ms = intervalMs[currentLevel] || 2000;

  decayInterval = setInterval(() => {
    runDecayStep();
  }, ms);
}

function runDecayStep() {
  const lvl = currentLevel;

  // Phase 1 (1-2)
  if (lvl >= 1 && lvl <= 2) {
    scrambleTextPhase1();
  }

  // Phase 2 (3)
  if (lvl === 3) {
    scrambleTextPhase2();
    if (Math.random() < 0.4) spawnDeadPixel();
    if (Math.random() < 0.2) spawnDeadPixel();
  }

  // Phase 3 (4)
  if (lvl === 4) {
    scrambleTextPhase3();
    if (Math.random() < 0.5) spawnLiteralDrip();
    for (let i = 0; i < 3; i++) {
      if (Math.random() < 0.5) spawnDeadPixel();
    }
  }

  // Phase 4 (5)
  if (lvl === 5) {
    scrambleTextPhase4();
    if (Math.random() < 0.7) spawnLiteralDrip();
    for (let i = 0; i < 5; i++) spawnDeadPixel();
  }

  // Phase 5 (6)
  if (lvl === 6) {
    scrambleTextFinal();
    for (let i = 0; i < 8; i++) spawnDeadPixel();
    if (Math.random() < 0.9) spawnLiteralDrip();
    if (Math.random() < 0.5) triggerBlockSplit();
  }
}

// Phase 2 Scrambler (lvl 3)
function scrambleTextPhase2() {
  const intensity = 0.04;
  textNodes.forEach(item => {
    if (Math.random() > 0.4) return;
    let chars = item.orig.split('');
    let modified = false;
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === ' ' || chars[i] === '\n') continue;
      if (Math.random() < intensity) {
        chars[i] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        modified = true;
      }
    }
    if (modified) {
      item.node.nodeValue = chars.join('');
      setTimeout(() => {
        if (item.node.parentNode) item.node.nodeValue = item.orig;
      }, 500 + Math.random() * 600);
    }
  });
}

// Phase 3 Scrambler (lvl 4)
function scrambleTextPhase3() {
  const intensity = 0.09;
  textNodes.forEach(item => {
    if (Math.random() > 0.5) return;
    let chars = item.orig.split('');
    let modified = false;
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === ' ' || chars[i] === '\n') continue;
      if (Math.random() < intensity) {
        chars[i] = Math.random() > 0.5 ? '█' : glitchChars[Math.floor(Math.random() * glitchChars.length)];
        modified = true;
      }
    }
    if (modified) {
      item.node.nodeValue = chars.join('');
      setTimeout(() => {
        if (item.node.parentNode) item.node.nodeValue = item.orig;
      }, 600 + Math.random() * 800);
    }
  });
}

// Phase 4 Scrambler (lvl 5)
function scrambleTextPhase4() {
  textNodes.forEach(item => {
    if (Math.random() > 0.6) return;
    let chars = item.orig.split('');
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === ' ' || chars[i] === '\n') continue;
      if (Math.random() < 0.18) {
        chars[i] = Math.random() > 0.4 ? '█' : '░';
      } else if (Math.random() < 0.08) {
        chars[i] = String.fromCharCode(33 + Math.random() * 15);
      }
    }
    item.node.nodeValue = chars.join('');
    if (Math.random() > 0.4) {
      setTimeout(() => {
        if (item.node.parentNode) item.node.nodeValue = item.orig;
      }, 800 + Math.random() * 1200);
    }
  });
}

// Phase 5 Scrambler (lvl 6)
function scrambleTextFinal() {
  textNodes.forEach(item => {
    let chars = item.orig.split('');
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === ' ' || chars[i] === '\n') continue;
      if (Math.random() < 0.25) chars[i] = ' ';
      else if (Math.random() < 0.12) chars[i] = '█';
      else if (Math.random() < 0.08) chars[i] = '░';
    }
    item.node.nodeValue = chars.join('');
  });
}

// Watch level transitions to update decay speed
let prevLevel = 0;
setInterval(() => {
  if (currentLevel !== prevLevel) {
    prevLevel = currentLevel;
    startDecayEngine();
  }
}, 200);

// ── TIME-BASED DECAY ──────────────────────────────
let timeOnSite = 0;
setInterval(() => {
  timeOnSite++;
  if (timeOnSite === 45) body.classList.add('decay-time-1');
  if (timeOnSite === 90) body.classList.add('decay-time-2');
  if (timeOnSite === 150) body.classList.add('decay-time-3');
  if (timeOnSite === 210) body.classList.add('decay-time-4');

  // Trigger smooth block split every 12 seconds starting after 2.5 minutes
  if (timeOnSite >= 150 && timeOnSite % 12 === 0) {
    triggerBlockSplit();
  }
}, 1000);

// ── OS FATAL ERROR ─────────────────────────────────
(function initOSDeath() {
  const deathDelay = 300000 + Math.random() * 120000; // 5 to 7 minutes

  setTimeout(() => {
    const ua = navigator.userAgent.toLowerCase();
    let imgFile = 'bluescreen.jpg';

    if (ua.includes('mac') || ua.includes('iphone') || ua.includes('ipad')) {
      imgFile = 'Black-screen-of-death-ios-7.png';
    } else if (ua.includes('android') || ua.includes('linux')) {
      imgFile = 'fold5-1812x2176-main-animation.jpg';
    } else if (ua.includes('windows')) {
      imgFile = 'bluescreen.jpg';
    }

    const deathScreen = document.getElementById('os-death-screen');
    const deathImage = document.getElementById('death-image');
    if (deathScreen && deathImage) {
      deathImage.src = 'assets/dead%20images/' + imgFile;
      deathScreen.classList.remove('hidden');
      deathScreen.classList.add('visible');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.cursor = 'none';
    }
  }, deathDelay);
})();
