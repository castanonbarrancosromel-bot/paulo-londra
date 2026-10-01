/* =============================================
   app.js – Interactive Logic
   Paulo Londra · Tal Vez
   ============================================= */

/* ─── Scroll Progress Bar ──────────────────── */
const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
  const scrollTop  = window.scrollY;
  const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
  const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}, { passive: true });

/* ─── Section Reveal (IntersectionObserver) ── */
const sections = document.querySelectorAll('.lyrics-section');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stagger child lines
      const lines = entry.target.querySelectorAll('.lyric-line');
      lines.forEach((line, i) => {
        line.style.animationDelay = `${i * 0.045}s`;
        line.style.animation = 'fadeSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) both';
      });
    }
  });
}, { threshold: 0.1 });

sections.forEach(s => revealObserver.observe(s));

/* ─── Lyric Line Interactions ─────────────── */
const allLines = document.querySelectorAll('.lyric-line');

allLines.forEach(line => {
  // Click to highlight
  line.addEventListener('click', () => {
    const wasActive = line.classList.contains('active');
    // Remove active from all
    allLines.forEach(l => l.classList.remove('active'));
    // Toggle or set active
    if (!wasActive) {
      line.classList.add('active');
      // Ripple effect
      spawnRipple(line);
      // Confetti burst on chorus lines
      if (line.classList.contains('chorus-line') || line.classList.contains('golden')) {
        spawnConfetti(line);
      }
    }
  });

  // Mouse enter sparkle
  line.addEventListener('mouseenter', () => {
    if (!line.classList.contains('active')) {
      line.style.letterSpacing = '0.02em';
    }
  });

  line.addEventListener('mouseleave', () => {
    if (!line.classList.contains('active')) {
      line.style.letterSpacing = '';
    }
  });
});

/* ─── Ripple Effect ────────────────────────── */
function spawnRipple(el) {
  const ripple = document.createElement('span');
  ripple.style.cssText = `
    position: absolute;
    left: 0; top: 50%;
    transform: translateY(-50%) scale(0);
    width: 100%; height: 100%;
    background: radial-gradient(ellipse at left, rgba(168,85,247,0.25), transparent 70%);
    border-radius: 6px;
    pointer-events: none;
    z-index: -1;
    animation: rippleAnim 0.6s ease-out forwards;
  `;
  // Ensure parent is positioned
  el.style.position = 'relative';
  el.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
}

// Inject keyframe for ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes rippleAnim {
    from { transform: translateY(-50%) scale(0); opacity: 1; }
    to   { transform: translateY(-50%) scale(1.5); opacity: 0; }
  }
`;
document.head.appendChild(rippleStyle);

/* ─── Confetti Burst ───────────────────────── */
function spawnConfetti(el) {
  const rect   = el.getBoundingClientRect();
  const colors = ['#f59e0b', '#a855f7', '#ec4899', '#06b6d4', '#f8f8ff'];
  for (let i = 0; i < 18; i++) {
    const dot = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const x = (Math.random() - 0.5) * 160;
    const y = (Math.random() - 0.9) * 120;
    dot.style.cssText = `
      position: fixed;
      left: ${rect.left + rect.width / 2}px;
      top: ${rect.top + rect.height / 2}px;
      width: ${Math.random() * 6 + 3}px;
      height: ${Math.random() * 6 + 3}px;
      background: ${color};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      pointer-events: none;
      z-index: 9999;
      transform: translate(0, 0) rotate(0deg);
      opacity: 1;
      transition: transform 0.8s cubic-bezier(0.16,1,0.3,1), opacity 0.8s ease;
    `;
    document.body.appendChild(dot);
    // Force reflow
    dot.getBoundingClientRect();
    dot.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;
    dot.style.opacity = '0';
    setTimeout(() => dot.remove(), 900);
  }
}

/* ─── Vinyl Record Click ───────────────────── */
const vinyl = document.getElementById('vinyl');
const vinylOuter = vinyl?.querySelector('.vinyl-outer');
let vinylPlaying = true;

vinyl?.addEventListener('click', () => {
  vinylPlaying = !vinylPlaying;
  if (vinylOuter) {
    vinylOuter.style.animationPlayState = vinylPlaying ? 'running' : 'paused';
  }
  // Emit visual feedback
  const state = document.createElement('div');
  state.textContent = vinylPlaying ? '▶' : '⏸';
  state.style.cssText = `
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    font-size: 2rem;
    color: white;
    pointer-events: none;
    animation: popFade 0.6s ease forwards;
    z-index: 10;
  `;
  vinyl.style.position = 'relative';
  vinyl.appendChild(state);
  setTimeout(() => state.remove(), 700);
});

// Inject popFade animation
const popStyle = document.createElement('style');
popStyle.textContent = `
  @keyframes popFade {
    0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
    40%  { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.4); }
  }
`;
document.head.appendChild(popStyle);

/* ─── Particle System ──────────────────────── */
const particlesContainer = document.getElementById('particles');

function createParticle() {
  const p = document.createElement('div');
  const size = Math.random() * 3 + 1;
  const colors = ['rgba(124,58,237,0.6)', 'rgba(236,72,153,0.5)', 'rgba(245,158,11,0.5)', 'rgba(6,182,212,0.4)'];
  const color  = colors[Math.floor(Math.random() * colors.length)];
  const startX = Math.random() * 100;
  const duration = Math.random() * 15 + 10;
  const delay  = Math.random() * 8;

  p.style.cssText = `
    position: absolute;
    bottom: -10px;
    left: ${startX}%;
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    border-radius: 50%;
    animation: floatUp ${duration}s ${delay}s linear infinite;
    pointer-events: none;
  `;
  particlesContainer.appendChild(p);
}

// Inject floatUp keyframe
const particleStyle = document.createElement('style');
particleStyle.textContent = `
  @keyframes floatUp {
    0%   { transform: translateY(0) translateX(0); opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 0.3; }
    100% { transform: translateY(-100vh) translateX(${(Math.random()-0.5)*60}px); opacity: 0; }
  }
`;
document.head.appendChild(particleStyle);

// Create 30 particles
for (let i = 0; i < 30; i++) createParticle();

/* ─── Keyboard Navigation ──────────────────── */
let currentLineIndex = -1;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    allLines.forEach(l => l.classList.remove('active'));
    if (e.key === 'ArrowDown') {
      currentLineIndex = Math.min(currentLineIndex + 1, allLines.length - 1);
    } else {
      currentLineIndex = Math.max(currentLineIndex - 1, 0);
    }
    const targetLine = allLines[currentLineIndex];
    targetLine.classList.add('active');
    spawnRipple(targetLine);
    targetLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Space = reset
  if (e.key === ' ' && e.target === document.body) {
    e.preventDefault();
    allLines.forEach(l => l.classList.remove('active'));
    currentLineIndex = -1;
  }
});

/* ─── Smooth Cursor Glow ───────────────────── */
const glow = document.createElement('div');
glow.style.cssText = `
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124,58,237,0.07), transparent 70%);
  pointer-events: none;
  z-index: 998;
  transform: translate(-50%, -50%);
  transition: left 0.2s ease, top 0.2s ease;
`;
document.body.appendChild(glow);

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
}, { passive: true });

/* ─── Section Quick-Nav (keyboard shortcut H) ─ */
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'h') {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  }
  if (e.key.toLowerCase() === 'l') {
    document.getElementById('lyrics')?.scrollIntoView({ behavior: 'smooth' });
  }
});

console.log('%c🎵 Paulo Londra – Tal Vez', 'color:#a855f7;font-size:18px;font-weight:bold;');
console.log('%cInteractivo: Haz click en cualquier verso. Usa ↑↓ para navegar. H = Inicio, L = Letra.', 'color:#f59e0b;font-size:12px;');
