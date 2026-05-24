'use strict';
/* ═══════════════════════════════════════════════════
   ARCHIVE — Minimalist Fashion Archive
   Scroll depth · Garment panels · 5 Mini-games · Audio
═══════════════════════════════════════════════════ */

// ── GARMENT DATA ──────────────────────────────────
const GARMENT_DATA = {
  ro1: {
    collection: 'SS2020 — Tecuatl',
    name: 'Megalaced Trucker Jacket',
    details: [
      ['Material', 'Cotton canvas with heavy cotton lacing'],
      ['Construction', 'Megalacing web hand-threaded over the entirety of the body'],
      ['Silhouette', 'Cropped standard trucker block interrupted by chaotic lines'],
    ],
    concept: 'A cage worn directly over the body.'
  },
  ro2: {
    collection: 'Ongoing',
    name: 'Bolan Patchwork Flare Jeans',
    details: [
      ['Material', 'Mineral Pearl heavy denim'],
      ['Construction', 'Geometric patchwork wrapping asymmetrically around the leg'],
      ['Silhouette', 'High waisted, violently flared bootcut pooling heavily at the floor'],
    ],
    concept: 'Denim treated as brutalist architecture.'
  },
  ro3: {
    collection: 'Ongoing',
    name: 'Kiss Heels',
    details: [
      ['Material', 'Calf leather upper, plexiglass platform, metal hardware'],
      ['Construction', 'Clear platform front with an aggressive metal grill heel piece'],
      ['Silhouette', '12cm towering aggressive lift on a brutal metal frame'],
    ],
    concept: 'Elevation through weaponized footwear.'
  },
  ccp1: {
    collection: 'Object Series',
    name: 'Pig Bag',
    details: [
      ['Material', 'Full pig leather, organically stiffened'],
      ['Construction', 'Molded directly over a solid form, sealed with heavy metal clasps'],
      ['Silhouette', 'Unsettling organic shape resembling an animal carcass'],
    ],
    concept: 'Making the material origin unavoidable.'
  },
  ccp2: {
    collection: 'AW2006',
    name: 'Prosthetic Drip Boots',
    details: [
      ['Material', 'Horse hide, liquid rubber dip'],
      ['Construction', 'Boot immersed upside-down in liquid rubber, leaving hardened teardrops'],
      ['Silhouette', 'Heavy distorted footwear gripped by melted synthetic matter'],
    ],
    concept: 'Footwear that bleeds and freezes in time.'
  },
  ccp3: {
    collection: 'Ongoing',
    name: 'Teeth Necklace',
    details: [
      ['Material', 'Oxidized silver'],
      ['Construction', 'Hand cast, articulated pieces perfectly resembling human molars'],
      ['Silhouette', 'A grim, heavy choker sitting tightly at the collarbone'],
    ],
    concept: 'Wearing mortality as an adornment.'
  },
  mm1: {
    collection: 'Line 0 — Artisanal',
    name: 'Painted GATs',
    details: [
      ['Material', 'Military surplus trainer, thick white paint'],
      ['Construction', 'Shoes dipped and painted by hand, designed to chip over decades'],
      ['Silhouette', 'Classic runner hidden under a crust of history'],
    ],
    concept: 'The wearer finishes the shoe by destroying it.'
  },
  mm2: {
    collection: 'Line 22',
    name: 'Japan GATs',
    details: [
      ['Material', 'Canvas, suede, vulcanized rubber'],
      ['Construction', 'Hand written messages simulating graffiti covering the entire upper'],
      ['Silhouette', 'Low profile nostalgic 70s sneaker vandalized'],
    ],
    concept: 'Subverting mass production with individualized vandalism.'
  },
  mm3: {
    collection: 'SS1989 — Ongoing',
    name: 'Tabi Boot',
    details: [
      ['Material', 'Calfskin upper, leather sole'],
      ['Construction', 'Traditional Japanese split-toe sock mounted on a high heel cylinder'],
      ['Silhouette', 'Cylindrical heel, bifurcated toe'],
    ],
    concept: 'The shoe does not pretend the foot is whole.'
  },
  yy1: {
    collection: 'Pour Homme',
    name: 'Attach Print Coat',
    details: [
      ['Material', 'Heavy wool gabardine with screen printed text'],
      ['Construction', 'Oversized drape, drop shoulder, entirely unlined'],
      ['Silhouette', 'A vast dark shroud stretching to the ankles'],
    ],
    concept: 'Words meant to be read on a moving ghost.'
  },
  yy2: {
    collection: 'Pour Homme',
    name: 'Wool Brim Hat',
    details: [
      ['Material', 'Felted boiled wool'],
      ['Construction', 'Hand molded uneven brim'],
      ['Silhouette', 'A dark shadow thrown intentionally over the face'],
    ],
    concept: 'Anonymity achieved through classical silhouettes.'
  },
  yy3: {
    collection: 'Y\'s Series',
    name: 'Side Zip-up Jacket',
    details: [
      ['Material', 'Washed cotton canvas'],
      ['Construction', 'Asymmetric zipper tracking down the ribcage instead of the center'],
      ['Silhouette', 'Cropped, boxy, distorted waistline'],
    ],
    concept: 'Re-routing the function of entry.'
  },
  g1: {
    collection: 'Horse Hide',
    name: 'Leather Boot',
    details: [
      ['Material', 'Object-dyed tumbled reverse horse leather'],
      ['Construction', 'Single piece upper, stacked leather sole, oxidized back-zipper'],
      ['Silhouette', 'Collapsed ankle contour forming to the wearer\'s specific movement'],
    ],
    concept: 'Leather that remembers every step.'
  },
  g2: {
    collection: 'Ongoing',
    name: 'Classy Leather Heel',
    details: [
      ['Material', 'Polished treated calfskin'],
      ['Construction', 'Saddle stitched upper attached to a metal reinforced heel base'],
      ['Silhouette', 'A delicate upper with an industrially heavy heel'],
    ],
    concept: 'Elegance anchored by pure brutalism.'
  },
  g3: {
    collection: 'Object-Dyed',
    name: 'Leather Jacket',
    details: [
      ['Material', 'Full grain washed leather'],
      ['Construction', 'Dyed after assembly, shrinking the zipper tracks and violently warping the seams'],
      ['Silhouette', 'A tight second skin, shriveled and reborn in the bath'],
    ],
    concept: 'The jacket has suffered to become beautiful.'
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
const grainCvs = document.getElementById('grain');
const navLinks = document.querySelectorAll('.nav-link');

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
    if (depth !== currentLevel) {
      currentLevel = depth;
      body.dataset.level = depth;
      depthFill.style.width = (depth / 6 * 100) + '%';
      // update nav active
      const designer = e.target.dataset.designer;
      navLinks.forEach(l => l.classList.toggle('active', l.dataset.target === 'ch-' + designer));
      // subtle flicker on transition from depth 3+
      if (depth >= 3) triggerFlicker();
    }
  });
}, { threshold: 0.35 });
SECTIONS.forEach(s => io.observe(s));

// Nav smooth scroll
navLinks.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

function triggerFlicker() {
  flicker.classList.remove('blink');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => flicker.classList.add('blink'));
  });
}

// ── GARMENT HOVER PANEL ───────────────────────────
let panelOpen = false;
let hoverTimer = null;

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
    if (panelOpen && panelName.textContent === (GARMENT_DATA[item.dataset.id]?.name || '')) {
      closePanel();
    } else {
      openPanel(item.dataset.id);
    }
  });
});

function openPanel(id) {
  const data = GARMENT_DATA[id];
  if (!data) return;
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
  audioBtn.querySelector('.audio-label') && (audioBtn.querySelector('.audio-label').textContent = running ? 'Sound' : 'Sound');
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


// ── GLITCH & DEFORMATION ENGINE ──────────────────
const glitchColors = ['#ff00ff', '#ffff00', '#00ff00', '#ff0000', '#00ffff'];
const textNodes = [];

function collectTextNodes(node) {
  if (node.nodeType === 3) {
    if (node.nodeValue.trim() !== '') {
      textNodes.push({ node: node, orig: node.nodeValue });
    }
  } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
    for (let i = 0; i < node.childNodes.length; i++) {
      collectTextNodes(node.childNodes[i]);
    }
  }
}

document.querySelectorAll('.body-text, .designer-quote, .garment-title, .garment-year, .label, .designer-name, .hero-title').forEach(el => {
  collectTextNodes(el);
});

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

  const lifespan = 500 + Math.random() * 2000;
  setTimeout(() => { if (p.parentNode) p.parentNode.removeChild(p); }, lifespan);
}

// ── LITERAL MELT DRIPS ────────────────────────────
function spawnLiteralDrip() {
  // Target images or substantial text blocks
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
    clone.style.top = -(rect.height - overlap) + 'px'; // Perfectly align pixels
    clone.style.objectFit = 'cover';
    // Mirror the filter of the parent if any
    clone.style.filter = window.getComputedStyle(target).filter;
    drip.appendChild(clone);
  } else {
    // If it's text, spawn thick ink/tar
    const style = window.getComputedStyle(target);
    drip.style.backgroundColor = style.color;
    if (drip.style.backgroundColor === '' || drip.style.backgroundColor.includes('0, 0, 0, 0')) {
      drip.style.backgroundColor = '#111';
    }
  }
  
  body.appendChild(drip);
  
  const dropDist = window.innerHeight * (0.2 + Math.random() * 0.8);
  const dur = 1500 + Math.random() * 3000;
  
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

// ── TIME-BASED DECAY ──────────────────────────────
let timeOnSite = 0;
setInterval(() => {
  timeOnSite++;
  if (timeOnSite === 30) body.classList.add('decay-time-1'); // 30s: Chromatic split
  if (timeOnSite === 60) body.classList.add('decay-time-2'); // 1m: Inversion pulses
  if (timeOnSite === 90) body.classList.add('decay-time-3'); // 1.5m: Ghost overlays
  if (timeOnSite === 120) body.classList.add('decay-time-4'); // 2m: Structural failure (margins/borders)
}, 1000);

function scrambleText() {
  if (currentLevel === 0) return;
  
  // Ramp up faster: squared rather than cubed.
  const intensity = Math.pow(currentLevel / 6, 2);
  
  if (Math.random() < intensity * 0.4) spawnDeadPixel();
  if (currentLevel >= 3 && Math.random() < intensity * 0.6) spawnLiteralDrip();

  if (currentLevel === 6 && Math.random() < 0.8) {
    for(let i=0; i<3; i++) spawnDeadPixel();
  }

  textNodes.forEach(item => {
    if (Math.random() > intensity * 0.5) return;

    let chars = item.orig.split('');
    let modified = false;

    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === ' ' || chars[i] === '\n') continue;
      
      if (currentLevel === 6) {
        if (Math.random() < 0.15) chars[i] = ' ';
        else if (Math.random() < 0.08) chars[i] = '█';
      } else {
        if (Math.random() < intensity * 0.08) {
          chars[i] = Math.random() > 0.5 ? '█' : '░';
          modified = true;
        } else if (Math.random() < intensity * 0.04) {
          chars[i] = String.fromCharCode(33 + Math.random() * 15);
          modified = true;
        }
      }
    }
    
    if (modified || currentLevel === 6) {
      item.node.nodeValue = chars.join('');
    }
  });
}

setInterval(scrambleText, Math.max(50, 150 - (currentLevel * 15)));

// ── OS FATAL ERROR ─────────────────────────────────
(function initOSDeath() {
  const deathDelay = 300000 + Math.random() * 120000; // 5 to 7 minutes

  setTimeout(() => {
    const ua = navigator.userAgent.toLowerCase();
    let imgFile = 'bluescreen.jpg'; // default Windows
    
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
