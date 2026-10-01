/* =============================================
   app.js — Paulo Londra · Tal Vez
   Karaoke Player con sincronización de letras
   ============================================= */

/* ── Timestamps de la letra ───────────────── */
// Ajusta los tiempos (en segundos) si la canción
// empieza diferente en tu reproducción.
const LYRICS = [
  // ── INTRO ──────────────────────────────────
  { t:  3,   text: "Ey, oh",                                               section: "Intro",            type: "intro" },
  { t:  6,   text: "O-O-Ovy On The Drums",                                 section: "Intro",            type: "intro" },
  { t:  10,  text: "Ey, qué será",                                         section: "Intro",            type: "intro" },

  // ── VERSO 1 ────────────────────────────────
  { t:  14,  text: "Qué será eso que huele tan bien",                       section: "Verso 1",          type: "verse" },
  { t:  18,  text: "Pero en realidad sabe mal, ey",                         section: "Verso 1",          type: "verse" },
  { t:  21,  text: "Y que me tiene desvelándome",                           section: "Verso 1",          type: "verse" },
  { t:  24,  text: "Y tal vez tú me tendrías que avisar",                   section: "Verso 1",          type: "verse" },
  { t:  28,  text: "Cuando ya no me quieres ver, ah",                       section: "Verso 1",          type: "verse" },
  { t:  31,  text: "Porque yo acá sigo esperándote",                        section: "Verso 1",          type: "verse" },
  { t:  35,  text: "Qué mal por mí",                                        section: "Verso 1",          type: "accent" },
  { t:  37,  text: "Que haga frío acá afuera y tú hoy no quieras salir",   section: "Verso 1",          type: "verse" },
  { t:  42,  text: "Pero tranqui",                                          section: "Verso 1",          type: "verse" },
  { t:  44,  text: "Que el frío y la espera siempre fue costumbre pa' mí", section: "Verso 1",          type: "verse" },
  { t:  49,  text: "Qué mal por mí",                                        section: "Verso 1",          type: "accent" },

  // ── ESTRIBILLO 1 ───────────────────────────
  { t:  53,  text: "Porque tal vez lo nuestro era",                         section: "Estribillo",       type: "chorus" },
  { t:  57,  text: "sólo para divertirse",                                  section: "Estribillo",       type: "chorus-big" },
  { t:  61,  text: "Pero este tonto suele confundirse",                     section: "Estribillo",       type: "chorus" },
  { t:  65,  text: "Y es triste",                                           section: "Estribillo",       type: "chorus-accent" },
  { t:  67,  text: "Que del finde ya no he vuelto a sonreír",               section: "Estribillo",       type: "chorus" },
  { t:  72,  text: "Tal vez lo nuestro era",                                section: "Estribillo",       type: "chorus" },
  { t:  76,  text: "sólo para divertirse",                                  section: "Estribillo",       type: "chorus-big" },
  { t:  80,  text: "Pero este tonto suele confundirse",                     section: "Estribillo",       type: "chorus" },
  { t:  83,  text: "Y es triste",                                           section: "Estribillo",       type: "chorus-accent" },
  { t:  85,  text: "Que del finde ya no he vuelto a sonreír, ey",           section: "Estribillo",       type: "chorus" },

  // ── VERSO 2 ────────────────────────────────
  { t:  93,  text: "Parece leyenda",                                        section: "Verso 2",          type: "verse" },
  { t:  96,  text: "Maniquí, le queda bien toda las prendas",               section: "Verso 2",          type: "verse" },
  { t:  100, text: "No es como yo, a ella nada la avergüenza",              section: "Verso 2",          type: "verse" },
  { t:  104, text: "No tiene paciencia",                                    section: "Verso 2",          type: "verse" },
  { t:  107, text: "Le sobra experiencia",                                  section: "Verso 2",          type: "verse" },
  { t:  110, text: "Al frente de la audiencia",                             section: "Verso 2",          type: "verse" },
  { t:  113, text: "Normal que deleite",                                    section: "Verso 2",          type: "accent" },
  { t:  116, text: "Cuando pueda verle",                                    section: "Verso 2",          type: "verse" },
  { t:  119, text: "Demasiado inteligente como Einstein",                   section: "Verso 2",          type: "verse" },
  { t:  123, text: "Hace lo que sea, no piensa en la gente",                section: "Verso 2",          type: "verse" },
  { t:  127, text: "Una chica que la admiro desde siempre",                 section: "Verso 2",          type: "verse" },
  { t:  131, text: "No la contratan pa' bailar porque se roba el show",     section: "Verso 2",          type: "verse" },
  { t:  136, text: "No quiere ser modelo porque eso le aburrió",            section: "Verso 2",          type: "verse" },
  { t:  141, text: "No puede ser locutora porque con su voz enamoró",       section: "Verso 2",          type: "verse" },
  { t:  147, text: "Tendría que ser ladrona porque te roba hasta el corazón", section: "Verso 2",        type: "accent" },

  // ── PRE-ESTRIBILLO ─────────────────────────
  { t:  154, text: "Entonces, ¿ahora cómo olvido de tu nombre?",           section: "Pre-Estribillo",   type: "pre-chorus" },
  { t:  158, text: "Hago mil preguntas y no respondes",                     section: "Pre-Estribillo",   type: "verse" },
  { t:  162, text: "Tienes una receta secreta, y juro que me altera",       section: "Pre-Estribillo",   type: "verse" },
  { t:  166, text: "Entonces, ¿ahora cómo olvido de tu nombre?",           section: "Pre-Estribillo",   type: "pre-chorus" },
  { t:  170, text: "Hago mil preguntas y no respondes",                     section: "Pre-Estribillo",   type: "verse" },
  { t:  174, text: "Tienes una receta secreta, y juro que me altera",       section: "Pre-Estribillo",   type: "verse" },

  // ── ESTRIBILLO 2 ───────────────────────────
  { t:  179, text: "Porque tal vez lo nuestro era",                         section: "Estribillo",       type: "chorus" },
  { t:  183, text: "sólo para divertirse",                                  section: "Estribillo",       type: "chorus-big" },
  { t:  187, text: "Pero este tonto suele confundirse",                     section: "Estribillo",       type: "chorus" },
  { t:  191, text: "Y es triste",                                           section: "Estribillo",       type: "chorus-accent" },
  { t:  193, text: "Que del finde ya no he vuelto a sonreír",               section: "Estribillo",       type: "chorus" },
  { t:  198, text: "Tal vez lo nuestro era",                                section: "Estribillo",       type: "chorus" },
  { t:  202, text: "sólo para divertirse",                                  section: "Estribillo",       type: "chorus-big" },
  { t:  206, text: "Pero este tonto suele confundirse",                     section: "Estribillo",       type: "chorus" },
  { t:  209, text: "Y es triste",                                           section: "Estribillo",       type: "chorus-accent" },
  { t:  211, text: "Que del finde ya no he vuelto a sonreír, ey",           section: "Estribillo",       type: "chorus" },

  // ── OUTRO ──────────────────────────────────
  { t:  218, text: "Si me contesta, un milagro",                            section: "Outro",            type: "verse" },
  { t:  222, text: "Y si me mira, ¿qué hago?",                             section: "Outro",            type: "verse" },
  { t:  226, text: "Seguro me quedo pensando en lo lindo que sería",        section: "Outro",            type: "verse" },
  { t:  230, text: "tenerte un ratito a mi lao'",                           section: "Outro",            type: "verse" },
  { t:  234, text: "Solo mira, demasiado flow en esa piba",                 section: "Otro",            type: "accent" },
  { t:  239, text: "No anda con un combo porque opaca a las amigas",        section: "Outro",            type: "verse" },
  { t:  244, text: "Asesina, me hace mal, mal",                             section: "Outro",            type: "accent" },
  { t:  248, text: "Si la veo, llamo al 911",                               section: "Outro",            type: "verse" },
  { t:  252, text: "Porque sí sé que verla me duele y no me hace bien",     section: "Outro",            type: "verse" },
  { t:  257, text: "Y si me habla...",                                       section: "Outro",            type: "fade-out" },
];

/* ── DOM refs ─────────────────────────────── */
const stage         = document.getElementById('stage');
const lyricStack    = document.getElementById('lyricStack');
const idleScreen    = document.getElementById('idleScreen');
const idlePlayBtn   = document.getElementById('idlePlayBtn');
const chorusPulse   = document.getElementById('chorusPulse');
const sectionPill   = document.getElementById('sectionPill');
const playBtn       = document.getElementById('playBtn');
const seekBar       = document.getElementById('seekBar');
const seekProgress  = document.getElementById('seekProgress');
const seekThumb     = document.getElementById('seekThumb');
const timeTxt       = document.getElementById('timeTxt');
const ytWidget      = document.getElementById('ytWidget');
const ytMinBtn      = document.getElementById('ytMinBtn');
const vidToggleBtn  = document.getElementById('vidToggleBtn');
const embedErrorMsg = document.getElementById('embedErrorMsg');

/* ── State ────────────────────────────────── */
let player          = null;
let syncInterval    = null;
let currentIdx      = -1;
let isPlaying       = false;
let playerReady     = false;
let duration        = 0;

/* ══════════════════════════════════════════
   YOUTUBE API
   ══════════════════════════════════════════ */

// Called automatically by YouTube API when ready
window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player('yt-player', {
    width:  '280',
    height: '157',
    videoId: 'bX3S-_jUauc',
    playerVars: {
      autoplay:       0,
      controls:       1,
      rel:            0,
      modestbranding: 1,
      fs:             0,
    },
    events: {
      onReady:       onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError:       onPlayerError,
    }
  });
};

function onPlayerReady(e) {
  playerReady = true;
  duration    = player.getDuration() || 208; // fallback
  playBtn.disabled    = false;
  idlePlayBtn.disabled = false;
}

function onPlayerStateChange(e) {
  const state = e.data;
  if (state === YT.PlayerState.PLAYING) {
    isPlaying = true;
    setPlayIcon(true);
    startSync();
    showKaraokeStage();
  } else if (state === YT.PlayerState.PAUSED || state === YT.PlayerState.ENDED) {
    isPlaying = false;
    setPlayIcon(false);
    stopSync();
    if (state === YT.PlayerState.ENDED) {
      endOfSong();
    }
  }
}

function onPlayerError(e) {
  console.warn('YouTube Error:', e.data);
  // 101 & 150 = embedding not allowed
  if (e.data === 101 || e.data === 150 || e.data === 5) {
    embedErrorMsg.style.display = 'block';
    idlePlayBtn.style.display   = 'none';
  }
}

/* ── Play / Pause ─────────────────────────── */
function togglePlay() {
  if (!playerReady) return;
  if (isPlaying) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
}

playBtn.addEventListener('click', togglePlay);
idlePlayBtn.addEventListener('click', () => {
  if (playerReady) player.playVideo();
});

function setPlayIcon(playing) {
  playBtn.querySelector('.ico-play').style.display  = playing ? 'none' : '';
  playBtn.querySelector('.ico-pause').style.display = playing ? '' : 'none';
}

/* ── Seek bar ─────────────────────────────── */
let isSeeking = false;

seekBar.addEventListener('mousedown', (e) => {
  isSeeking = true;
  doSeek(e);
});
document.addEventListener('mousemove', (e) => { if (isSeeking) doSeek(e); });
document.addEventListener('mouseup',   ()  => { isSeeking = false; });

seekBar.addEventListener('touchstart', (e) => { isSeeking = true; doSeek(e.touches[0]); }, { passive: true });
document.addEventListener('touchmove',  (e) => { if (isSeeking) doSeek(e.touches[0]); }, { passive: true });
document.addEventListener('touchend',   ()  => { isSeeking = false; });

function doSeek(e) {
  if (!playerReady) return;
  const rect = seekBar.getBoundingClientRect();
  const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  const dur  = player.getDuration() || duration;
  player.seekTo(pct * dur, true);
  updateSeekUI(pct * dur, dur);
  // Reset lyric index so it resyncs
  currentIdx = -1;
}

/* ── YT Widget toggle ─────────────────────── */
let ytVisible = true;

vidToggleBtn.addEventListener('click', () => {
  ytVisible = !ytVisible;
  ytWidget.style.transform = ytVisible ? 'none' : 'translateY(calc(100% + 16px))';
  ytWidget.style.opacity   = ytVisible ? '1' : '0';
  ytWidget.style.pointerEvents = ytVisible ? '' : 'none';
});

ytMinBtn.addEventListener('click', () => {
  ytWidget.classList.toggle('minimized');
  ytMinBtn.textContent = ytWidget.classList.contains('minimized') ? '+' : '−';
});

/* ══════════════════════════════════════════
   SYNC LOOP
   ══════════════════════════════════════════ */

function startSync() {
  stopSync();
  syncInterval = setInterval(syncTick, 100);
}

function stopSync() {
  if (syncInterval) {
    clearInterval(syncInterval);
    syncInterval = null;
  }
}

function syncTick() {
  if (!player || !playerReady) return;

  const time = player.getCurrentTime();
  const dur  = player.getDuration() || duration;

  updateSeekUI(time, dur);

  // Binary-search the current lyric index
  let newIdx = -1;
  for (let i = 0; i < LYRICS.length; i++) {
    if (time >= LYRICS[i].t) newIdx = i;
    else break;
  }

  if (newIdx !== currentIdx) {
    advanceLyric(newIdx);
  }
}

function updateSeekUI(time, dur) {
  const pct = dur > 0 ? (time / dur) * 100 : 0;
  seekProgress.style.width = pct + '%';
  seekThumb.style.left     = pct + '%';
  timeTxt.textContent = fmtTime(time);
}

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

/* ══════════════════════════════════════════
   KARAOKE DISPLAY
   ══════════════════════════════════════════ */

function showKaraokeStage() {
  if (idleScreen.style.display === 'none') return;
  idleScreen.style.transition = 'opacity 0.5s ease';
  idleScreen.style.opacity    = '0';
  setTimeout(() => {
    idleScreen.style.display = 'none';
    lyricStack.style.display = '';
  }, 500);
}

/**
 * Advance to a new lyric line (or -1 for none).
 * Implements the "stack" animation:
 *   entering → current → ghost-1 → ghost-2 → exiting → removed
 */
function advanceLyric(newIdx) {
  currentIdx = newIdx;

  if (newIdx < 0) return;

  const lyric = LYRICS[newIdx];

  // ── Demote existing items ──────────────────
  const ghost2Items = lyricStack.querySelectorAll('.ghost-2');
  ghost2Items.forEach(el => {
    el.className = 'lyric-item exiting';
    // Remove after transition completes
    setTimeout(() => el.remove(), 650);
  });

  const ghost1Items = lyricStack.querySelectorAll('.ghost-1');
  ghost1Items.forEach(el => { el.className = 'lyric-item ghost-2'; });

  const currentItems = lyricStack.querySelectorAll('.current');
  currentItems.forEach(el => { el.className = 'lyric-item ghost-1'; });

  // ── Create new element (starts "entering") ─
  const el = document.createElement('div');
  el.className = `lyric-item entering ${lyric.type}`;
  el.textContent = lyric.text;
  lyricStack.appendChild(el);

  // Force layout, then transition to "current"
  // Double rAF ensures the 'entering' class is painted first
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.className = `lyric-item current ${lyric.type}`;
    });
  });

  // ── Update section badge & chorus mode ────
  updateSectionPill(lyric.section, lyric.type);
  updateChorusMode(lyric.type);

  // ── Background color shift ─────────────────
  updateBgColor(lyric.type);
}

function updateSectionPill(section, type) {
  sectionPill.textContent = section;
  sectionPill.className   = 'section-pill';
  if (type.startsWith('chorus')) {
    sectionPill.classList.add('chorus-mode');
  }
}

function updateChorusMode(type) {
  const isChorus = type.startsWith('chorus');
  chorusPulse.className = 'chorus-pulse' + (isChorus ? ' active' : '');
}

function updateBgColor(type) {
  const orbs = document.querySelectorAll('.bg-orb');
  if (type.startsWith('chorus')) {
    orbs[0].style.background = 'radial-gradient(circle, rgba(245,158,11,0.2), transparent 70%)';
    orbs[1].style.background = 'radial-gradient(circle, rgba(245,158,11,0.12), transparent 70%)';
  } else if (type === 'accent' || type === 'pre-chorus') {
    orbs[0].style.background = 'radial-gradient(circle, rgba(236,72,153,0.2), transparent 70%)';
    orbs[1].style.background = 'radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%)';
  } else {
    orbs[0].style.background = 'radial-gradient(circle, rgba(124,58,237,0.22), transparent 70%)';
    orbs[1].style.background = 'radial-gradient(circle, rgba(236,72,153,0.15), transparent 70%)';
  }
}

function endOfSong() {
  currentIdx = -1;
  // Show a final message
  setTimeout(() => {
    const finalEl = document.createElement('div');
    finalEl.className = 'lyric-item entering verse';
    finalEl.textContent = '🎵';
    finalEl.style.fontSize = '4rem';
    lyricStack.appendChild(finalEl);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      finalEl.className = 'lyric-item current verse';
    }));
  }, 600);
}

/* ══════════════════════════════════════════
   PARTICLE CANVAS
   ══════════════════════════════════════════ */
const canvas = document.getElementById('bgCanvas');
const ctx    = canvas.getContext('2d');

let particles = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function spawnParticle() {
  const colors = ['rgba(124,58,237,', 'rgba(236,72,153,', 'rgba(245,158,11,', 'rgba(6,182,212,'];
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + 10,
    r: Math.random() * 2 + 0.5,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 0.4 + 0.15,
    alpha: Math.random() * 0.5 + 0.2,
    drift: (Math.random() - 0.5) * 0.4,
    life: 0,
    maxLife: Math.random() * 400 + 200,
  };
}

// Init particles
for (let i = 0; i < 50; i++) {
  const p = spawnParticle();
  p.y = Math.random() * canvas.height; // scatter on load
  p.life = Math.random() * p.maxLife;
  particles.push(p);
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Spawn new particles
  if (particles.length < 60) particles.push(spawnParticle());

  particles = particles.filter(p => p.life < p.maxLife);

  particles.forEach(p => {
    p.life++;
    p.y     -= p.speed;
    p.x     += p.drift;
    const progress = p.life / p.maxLife;
    const alpha    = p.alpha * (1 - Math.pow(progress, 2));

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color + alpha + ')';
    ctx.fill();
  });

  requestAnimationFrame(drawParticles);
}
drawParticles();

/* ══════════════════════════════════════════
   KEYBOARD SHORTCUTS
   ══════════════════════════════════════════ */
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;

  if (e.code === 'Space') {
    e.preventDefault();
    togglePlay();
  }

  // Arrow keys: manual seek ±5s
  if (e.code === 'ArrowRight' && playerReady) {
    player.seekTo(player.getCurrentTime() + 5, true);
    currentIdx = -1;
  }
  if (e.code === 'ArrowLeft' && playerReady) {
    player.seekTo(Math.max(0, player.getCurrentTime() - 5), true);
    currentIdx = -1;
  }
});

/* ══════════════════════════════════════════
   TIMING OFFSET HELPER
   Use the console to tweak timing if the lyrics
   are off: window.OFFSET = -2 (shift 2s earlier)
   ══════════════════════════════════════════ */
window.OFFSET = 0; // seconds

// Patch syncTick to apply offset
const _origSyncTick = syncTick;
function syncTick() {
  if (!player || !playerReady) return;
  const rawTime = player.getCurrentTime() + (window.OFFSET || 0);
  const dur = player.getDuration() || duration;
  updateSeekUI(rawTime, dur);

  let newIdx = -1;
  for (let i = 0; i < LYRICS.length; i++) {
    if (rawTime >= LYRICS[i].t) newIdx = i;
    else break;
  }
  if (newIdx !== currentIdx) advanceLyric(newIdx);
}

console.log('%c🎵 Paulo Londra — Tal Vez | Karaoke', 'color:#a855f7;font-size:16px;font-weight:bold');
console.log('%cControles: ESPACIO = play/pause | ← → = ±5s | window.OFFSET = ajustar timing', 'color:#f59e0b;font-size:12px');
