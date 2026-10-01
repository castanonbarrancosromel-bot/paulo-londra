/* =============================================
   app.js — Paulo Londra · Tal Vez
   Karaoke con sincronización de letras + Beat
   ============================================= */

/* ══════════════════════════════════════════
   LETRA CON TIMESTAMPS (segundos)
   ══════════════════════════════════════════ */
const LYRICS = [
  // ── INTRO ──────────────────────────────────
  { t:  3,   text: "Ey, oh",                                                section: "Intro",          type: "intro" },
  { t:  6,   text: "O-O-Ovy On The Drums",                                  section: "Intro",          type: "intro" },
  { t:  10,  text: "Ey, qué será",                                          section: "Intro",          type: "intro" },
  // ── VERSO 1 ────────────────────────────────
  { t:  14,  text: "Qué será eso que huele tan bien",                        section: "Verso 1",        type: "verse" },
  { t:  18,  text: "Pero en realidad sabe mal, ey",                          section: "Verso 1",        type: "verse" },
  { t:  21,  text: "Y que me tiene desvelándome",                            section: "Verso 1",        type: "verse" },
  { t:  24,  text: "Y tal vez tú me tendrías que avisar",                    section: "Verso 1",        type: "verse" },
  { t:  28,  text: "Cuando ya no me quieres ver, ah",                        section: "Verso 1",        type: "verse" },
  { t:  31,  text: "Porque yo acá sigo esperándote",                         section: "Verso 1",        type: "verse" },
  { t:  35,  text: "Qué mal por mí",                                         section: "Verso 1",        type: "accent" },
  { t:  37,  text: "Que haga frío acá afuera y tú hoy no quieras salir",    section: "Verso 1",        type: "verse" },
  { t:  42,  text: "Pero tranqui",                                           section: "Verso 1",        type: "verse" },
  { t:  44,  text: "Que el frío y la espera siempre fue costumbre pa' mí",  section: "Verso 1",        type: "verse" },
  { t:  49,  text: "Qué mal por mí",                                         section: "Verso 1",        type: "accent" },
  // ── ESTRIBILLO 1 ───────────────────────────
  { t:  53,  text: "Porque tal vez lo nuestro era",                          section: "Estribillo",     type: "chorus" },
  { t:  57,  text: "sólo para divertirse",                                   section: "Estribillo",     type: "chorus-big" },
  { t:  61,  text: "Pero este tonto suele confundirse",                      section: "Estribillo",     type: "chorus" },
  { t:  65,  text: "Y es triste",                                            section: "Estribillo",     type: "chorus-accent" },
  { t:  67,  text: "Que del finde ya no he vuelto a sonreír",                section: "Estribillo",     type: "chorus" },
  { t:  72,  text: "Tal vez lo nuestro era",                                 section: "Estribillo",     type: "chorus" },
  { t:  76,  text: "sólo para divertirse",                                   section: "Estribillo",     type: "chorus-big" },
  { t:  80,  text: "Pero este tonto suele confundirse",                      section: "Estribillo",     type: "chorus" },
  { t:  83,  text: "Y es triste",                                            section: "Estribillo",     type: "chorus-accent" },
  { t:  85,  text: "Que del finde ya no he vuelto a sonreír, ey",            section: "Estribillo",     type: "chorus" },
  // ── VERSO 2 ────────────────────────────────
  { t:  93,  text: "Parece leyenda",                                         section: "Verso 2",        type: "verse" },
  { t:  96,  text: "Maniquí, le queda bien toda las prendas",                section: "Verso 2",        type: "verse" },
  { t:  100, text: "No es como yo, a ella nada la avergüenza",               section: "Verso 2",        type: "verse" },
  { t:  104, text: "No tiene paciencia",                                     section: "Verso 2",        type: "verse" },
  { t:  107, text: "Le sobra experiencia",                                    section: "Verso 2",        type: "verse" },
  { t:  110, text: "Al frente de la audiencia",                              section: "Verso 2",        type: "verse" },
  { t:  113, text: "Normal que deleite",                                     section: "Verso 2",        type: "accent" },
  { t:  116, text: "Cuando pueda verle",                                     section: "Verso 2",        type: "verse" },
  { t:  119, text: "Demasiado inteligente como Einstein",                    section: "Verso 2",        type: "verse" },
  { t:  123, text: "Hace lo que sea, no piensa en la gente",                 section: "Verso 2",        type: "verse" },
  { t:  127, text: "Una chica que la admiro desde siempre",                  section: "Verso 2",        type: "verse" },
  { t:  131, text: "No la contratan pa' bailar porque se roba el show",      section: "Verso 2",        type: "verse" },
  { t:  136, text: "No quiere ser modelo porque eso le aburrió",             section: "Verso 2",        type: "verse" },
  { t:  141, text: "No puede ser locutora porque con su voz enamoró",        section: "Verso 2",        type: "verse" },
  { t:  147, text: "Tendría que ser ladrona porque te roba hasta el corazón",section: "Verso 2",        type: "accent" },
  // ── PRE-ESTRIBILLO ─────────────────────────
  { t:  154, text: "Entonces, ¿ahora cómo olvido de tu nombre?",            section: "Pre-Estribillo", type: "pre-chorus" },
  { t:  158, text: "Hago mil preguntas y no respondes",                      section: "Pre-Estribillo", type: "verse" },
  { t:  162, text: "Tienes una receta secreta, y juro que me altera",        section: "Pre-Estribillo", type: "verse" },
  { t:  166, text: "Entonces, ¿ahora cómo olvido de tu nombre?",            section: "Pre-Estribillo", type: "pre-chorus" },
  { t:  170, text: "Hago mil preguntas y no respondes",                      section: "Pre-Estribillo", type: "verse" },
  { t:  174, text: "Tienes una receta secreta, y juro que me altera",        section: "Pre-Estribillo", type: "verse" },
  // ── ESTRIBILLO 2 ───────────────────────────
  { t:  179, text: "Porque tal vez lo nuestro era",                          section: "Estribillo",     type: "chorus" },
  { t:  183, text: "sólo para divertirse",                                   section: "Estribillo",     type: "chorus-big" },
  { t:  187, text: "Pero este tonto suele confundirse",                      section: "Estribillo",     type: "chorus" },
  { t:  191, text: "Y es triste",                                            section: "Estribillo",     type: "chorus-accent" },
  { t:  193, text: "Que del finde ya no he vuelto a sonreír",                section: "Estribillo",     type: "chorus" },
  { t:  198, text: "Tal vez lo nuestro era",                                 section: "Estribillo",     type: "chorus" },
  { t:  202, text: "sólo para divertirse",                                   section: "Estribillo",     type: "chorus-big" },
  { t:  206, text: "Pero este tonto suele confundirse",                      section: "Estribillo",     type: "chorus" },
  { t:  209, text: "Y es triste",                                            section: "Estribillo",     type: "chorus-accent" },
  { t:  211, text: "Que del finde ya no he vuelto a sonreír, ey",            section: "Estribillo",     type: "chorus" },
  // ── OUTRO ──────────────────────────────────
  { t:  218, text: "Si me contesta, un milagro",                             section: "Outro",          type: "verse" },
  { t:  222, text: "Y si me mira, ¿qué hago?",                              section: "Outro",          type: "verse" },
  { t:  226, text: "Seguro me quedo pensando en lo lindo que sería",         section: "Outro",          type: "verse" },
  { t:  230, text: "tenerte un ratito a mi lao'",                            section: "Outro",          type: "verse" },
  { t:  234, text: "Solo mira, demasiado flow en esa piba",                  section: "Outro",          type: "accent" },
  { t:  239, text: "No anda con un combo porque opaca a las amigas",         section: "Outro",          type: "verse" },
  { t:  244, text: "Asesina, me hace mal, mal",                              section: "Outro",          type: "accent" },
  { t:  248, text: "Si la veo, llamo al 911",                                section: "Outro",          type: "verse" },
  { t:  252, text: "Porque sí sé que verla me duele y no me hace bien",      section: "Outro",          type: "verse" },
  { t:  257, text: "Y si me habla...",                                        section: "Outro",          type: "fade-out" },
];

/* ── BPM del ritmo (Tal Vez ≈ 90 BPM) ──────── */
window.BPM = 90;

// Offset: positivo = letras antes, negativo = letras después
let lyricOffset = parseFloat(localStorage.getItem('talvez_offset') || '0');


/* ══════════════════════════════════════════
   REFERENCIAS DOM
   ══════════════════════════════════════════ */
const stage          = document.getElementById('stage');
const lyricStack     = document.getElementById('lyricStack');
const idleScreen     = document.getElementById('idleScreen');
const idlePlayBtn    = document.getElementById('idlePlayBtn');
const idleBtnLabel   = document.getElementById('idleBtnLabel');
const chorusPulse    = document.getElementById('chorusPulse');
const sectionPill    = document.getElementById('sectionPill');
const playBtn        = document.getElementById('playBtn');
const seekBar        = document.getElementById('seekBar');
const seekProgress   = document.getElementById('seekProgress');
const seekThumb      = document.getElementById('seekThumb');
const timeTxt        = document.getElementById('timeTxt');
const embedErrorMsg  = document.getElementById('embedErrorMsg');
const ringsContainer = document.getElementById('ringsContainer');
const orbA           = document.querySelector('.orb-a');
const orbB           = document.querySelector('.orb-b');
const offsetMinus    = document.getElementById('offsetMinus');
const offsetPlus     = document.getElementById('offsetPlus');
const offsetVal      = document.getElementById('offsetVal');
const offsetReset    = document.getElementById('offsetReset');
const syncHint       = document.getElementById('syncHint');

/* ══════════════════════════════════════════
   ESTADO
   ══════════════════════════════════════════ */
let player       = null;
let syncInterval = null;
let beatTimer    = null;
let currentIdx   = -1;
let isPlaying    = false;
let playerReady  = false;

/* ══════════════════════════════════════════
   YOUTUBE IFrame API
   ══════════════════════════════════════════ */
window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player('yt-player', {
    width: '200', height: '113',
    videoId: 'bX3S-_jUauc',
    playerVars: {
      autoplay:       0,
      controls:       1,
      rel:            0,
      modestbranding: 1,
    },
    events: {
      onReady:       onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError:       onPlayerError,
    },
  });
};

function onPlayerReady() {
  playerReady = true;
  playBtn.disabled      = false;
  idlePlayBtn.disabled  = false;
  idleBtnLabel.textContent = 'Reproducir';
}

function onPlayerStateChange(e) {
  if (e.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    setPlayIcon(true);
    playBtn.classList.add('playing');
    startSync();
    startBeat();
    revealKaraokeStage();
  } else if (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.ENDED) {
    isPlaying = false;
    setPlayIcon(false);
    playBtn.classList.remove('playing');
    stopSync();
    stopBeat();
    if (e.data === YT.PlayerState.ENDED) handleEnd();
  }
}

function onPlayerError(e) {
  // 101 / 150 = embedding blocked por el dueño del video
  if (e.data === 101 || e.data === 150 || e.data === 5) {
    embedErrorMsg.style.display = 'block';
    idlePlayBtn.style.display   = 'none';
  }
}

/* ── Play / Pause ─────────────────────────── */
function togglePlay() {
  if (!playerReady) return;
  isPlaying ? player.pauseVideo() : player.playVideo();
}

playBtn.addEventListener('click', togglePlay);
idlePlayBtn.addEventListener('click', () => {
  if (playerReady) player.playVideo();
});

function setPlayIcon(playing) {
  playBtn.querySelector('.ico-play').style.display  = playing ? 'none' : '';
  playBtn.querySelector('.ico-pause').style.display = playing ? ''     : 'none';
}

/* ── Seek bar ─────────────────────────────── */
let isSeeking = false;

seekBar.addEventListener('mousedown',  e  => { isSeeking = true; doSeek(e); });
document.addEventListener('mousemove', e  => { if (isSeeking) doSeek(e); });
document.addEventListener('mouseup',   () => { isSeeking = false; });
seekBar.addEventListener('touchstart', e  => { isSeeking = true; doSeek(e.touches[0]); }, { passive: true });
document.addEventListener('touchmove', e  => { if (isSeeking) doSeek(e.touches[0]); },    { passive: true });
document.addEventListener('touchend',  () => { isSeeking = false; });

function doSeek(e) {
  if (!playerReady) return;
  const rect = seekBar.getBoundingClientRect();
  const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  const dur  = player.getDuration() || 210;
  player.seekTo(pct * dur, true);
  updateSeekUI(pct * dur, dur);
  currentIdx = -1;          // reinicia sincronía
  stopBeat();               // reinicia beat
  if (isPlaying) startBeat();
}

/* ══════════════════════════════════════════
   LOOP DE SINCRONÍA (cada 80 ms)
   ══════════════════════════════════════════ */
function startSync() {
  stopSync();
  syncInterval = setInterval(syncTick, 80);
}
function stopSync() {
  clearInterval(syncInterval);
  syncInterval = null;
}

function syncTick() {
  if (!player || !playerReady) return;

  const raw = player.getCurrentTime();
  const t   = raw + lyricOffset;          // usa variable local (más rápido)
  const dur = player.getDuration() || 210;

  updateSeekUI(t, dur);

  // Busca qué verso debe mostrarse ahora
  let newIdx = -1;
  for (let i = 0; i < LYRICS.length; i++) {
    if (t >= LYRICS[i].t) newIdx = i;
    else break;
  }

  if (newIdx !== currentIdx) advanceLyric(newIdx);
}

function updateSeekUI(t, dur) {
  const pct = dur > 0 ? Math.min((t / dur) * 100, 100) : 0;
  seekProgress.style.width = pct + '%';
  seekThumb.style.left     = pct + '%';
  timeTxt.textContent      = fmtTime(t);
}

function fmtTime(s) {
  const m   = Math.floor(Math.max(s, 0) / 60);
  const sec = Math.floor(Math.max(s, 0) % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

/* ══════════════════════════════════════════
   BEAT VISUAL (sincronizado por BPM)
   ══════════════════════════════════════════ */
function startBeat() {
  stopBeat();
  const bpm    = window.BPM || 90;
  const beatMs = (60 / bpm) * 1000;

  // Sincroniza con la posición actual de la canción
  const startT  = player ? player.getCurrentTime() : 0;
  const elapsed = startT % (60 / bpm);      // fracción del beat actual
  const delay   = (1 - elapsed / (60 / bpm)) * beatMs;

  setTimeout(() => {
    triggerBeat();                          // primer beat
    beatTimer = setInterval(triggerBeat, (60 / (window.BPM || 90)) * 1000);
  }, Math.min(delay, beatMs));             // no esperar más de 1 beat
}

function stopBeat() {
  clearInterval(beatTimer);
  beatTimer = null;
}

let beatCount = 0;

function triggerBeat() {
  beatCount++;
  const isDownbeat = beatCount % 4 === 1;  // acento en cada compás (4/4)

  // ── Anel expansivo ───────────────────────
  spawnBeatRing(isDownbeat);

  // ── Pulso en el orb ──────────────────────
  if (orbA) {
    const scale = isDownbeat ? '1.07' : '1.03';
    orbA.style.transform = `scale(${scale})`;
    setTimeout(() => { if (orbA) orbA.style.transform = ''; }, 180);
  }

  // ── Flash en la letra activa ─────────────
  const cur = lyricStack.querySelector('.current');
  if (cur) {
    // Usamos CSS animation temporal
    cur.style.animation = 'none';
    cur.getBoundingClientRect(); // force reflow
    cur.style.animation = 'beatFlash 0.18s ease-out';
    setTimeout(() => { if (cur) cur.style.animation = ''; }, 220);
  }
}

function spawnBeatRing(big) {
  const ring  = document.createElement('div');
  const size  = big ? 120 : 80;
  const isChorus = currentIdx >= 0 && LYRICS[currentIdx]?.type.startsWith('chorus');

  const color = isChorus
    ? `rgba(245,158,11,${big ? '0.55' : '0.3'})`
    : `rgba(124,58,237,${big ? '0.5' : '0.25'})`;

  ring.className = 'beat-ring';
  ring.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    border: ${big ? 2 : 1.5}px solid ${color};
    animation-duration: ${big ? '0.9' : '0.65'}s;
  `;
  ringsContainer.appendChild(ring);
  setTimeout(() => ring.remove(), big ? 950 : 700);
}

/* ══════════════════════════════════════════
   KARAOKE — DISPLAY DE LETRAS
   ══════════════════════════════════════════ */
function revealKaraokeStage() {
  if (lyricStack.style.display !== 'none') return;
  idleScreen.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  idleScreen.style.opacity    = '0';
  idleScreen.style.transform  = 'scale(0.95)';
  setTimeout(() => {
    idleScreen.style.display = 'none';
    lyricStack.style.display = '';
    // Mostrar hint de calibración
    syncHint.style.display   = '';
    setTimeout(() => {
      // Ocultar hint después de 12 segundos
      syncHint.style.transition = 'opacity 1s ease';
      syncHint.style.opacity    = '0';
      setTimeout(() => { syncHint.style.display = 'none'; }, 1100);
    }, 12000);
  }, 600);
}

/**
 * Transiciona al verso número `newIdx`.
 * Ciclo de vida: entering → current → ghost-1 → ghost-2 → exiting → (eliminado)
 */
function advanceLyric(newIdx) {
  currentIdx = newIdx;
  if (newIdx < 0) return;

  const lyric = LYRICS[newIdx];

  // Demota elementos existentes
  lyricStack.querySelectorAll('.ghost-2').forEach(el => {
    el.className = 'lyric-item exiting';
    setTimeout(() => el.remove(), 650);
  });
  lyricStack.querySelectorAll('.ghost-1').forEach(el => {
    el.className = 'lyric-item ghost-2';
  });
  lyricStack.querySelectorAll('.current').forEach(el => {
    el.className = 'lyric-item ghost-1';
    el.style.animation = '';   // cancela beatFlash pendiente
  });

  // Crea el nuevo elemento en estado "entering"
  const el       = document.createElement('div');
  el.className   = `lyric-item entering ${lyric.type}`;
  el.textContent = lyric.text;
  lyricStack.appendChild(el);

  // Doble rAF: garantiza que entering se pinte antes de current
  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.className = `lyric-item current ${lyric.type}`;
  }));

  // Actualiza sección y modo coro
  updatePill(lyric.section, lyric.type);
  updateChorusMode(lyric.type);
  updateBgTint(lyric.type);
}

function updatePill(section, type) {
  sectionPill.textContent = section;
  sectionPill.className   = 'section-pill';
  if (type.startsWith('chorus'))      sectionPill.classList.add('chorus-mode');
  else if (section === 'Outro')       sectionPill.classList.add('outro-mode');
}

function updateChorusMode(type) {
  chorusPulse.className = 'chorus-pulse' + (type.startsWith('chorus') ? ' active' : '');
}

function updateBgTint(type) {
  if (!orbA || !orbB) return;
  if (type.startsWith('chorus')) {
    orbA.style.background = 'radial-gradient(circle, rgba(245,158,11,0.22), transparent 70%)';
    orbB.style.background = 'radial-gradient(circle, rgba(245,158,11,0.14), transparent 70%)';
  } else if (type === 'accent' || type === 'pre-chorus') {
    orbA.style.background = 'radial-gradient(circle, rgba(236,72,153,0.2), transparent 70%)';
    orbB.style.background = 'radial-gradient(circle, rgba(168,85,247,0.16), transparent 70%)';
  } else if (type === 'intro') {
    orbA.style.background = 'radial-gradient(circle, rgba(6,182,212,0.18), transparent 70%)';
    orbB.style.background = 'radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)';
  } else {
    orbA.style.background = 'radial-gradient(circle, rgba(124,58,237,0.22), transparent 70%)';
    orbB.style.background = 'radial-gradient(circle, rgba(236,72,153,0.15), transparent 70%)';
  }
}

function handleEnd() {
  currentIdx = -1;
  setTimeout(() => {
    const fin = document.createElement('div');
    fin.className   = 'lyric-item entering verse';
    fin.textContent = '♪';
    fin.style.fontSize = 'clamp(3rem, 10vw, 6rem)';
    lyricStack.appendChild(fin);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fin.className = 'lyric-item current verse';
    }));
  }, 400);
}

/* ══════════════════════════════════════════
   PARTÍCULAS (canvas)
   ══════════════════════════════════════════ */
const canvas = document.getElementById('bgCanvas');
const ctx    = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas, { passive: true });

function mkParticle() {
  const colors = [
    'rgba(124,58,237,', 'rgba(168,85,247,',
    'rgba(236,72,153,', 'rgba(245,158,11,',
    'rgba(6,182,212,',
  ];
  return {
    x:       Math.random() * canvas.width,
    y:       canvas.height + 10,
    r:       Math.random() * 2 + 0.5,
    color:   colors[Math.floor(Math.random() * colors.length)],
    speed:   Math.random() * 0.45 + 0.15,
    alpha:   Math.random() * 0.45 + 0.2,
    drift:   (Math.random() - 0.5) * 0.4,
    life:    0,
    maxLife: Math.random() * 380 + 180,
  };
}

// Distribuye partículas iniciales por toda la pantalla
for (let i = 0; i < 55; i++) {
  const p = mkParticle();
  p.y    = Math.random() * canvas.height;
  p.life = Math.random() * p.maxLife;
  particles.push(p);
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (particles.length < 60) particles.push(mkParticle());
  particles = particles.filter(p => p.life < p.maxLife);
  particles.forEach(p => {
    p.life++; p.y -= p.speed; p.x += p.drift;
    const a = p.alpha * (1 - Math.pow(p.life / p.maxLife, 2));
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color + a + ')';
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

/* ══════════════════════════════════════════
   TECLADO
   ESPACIO  → play/pause
   ← →      → retroceder / adelantar 5 s
   ══════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if (e.code === 'Space') {
    e.preventDefault();
    togglePlay();
  }
  if (e.code === 'ArrowRight' && playerReady) {
    player.seekTo(player.getCurrentTime() + 5, true);
    currentIdx = -1;
  }
  if (e.code === 'ArrowLeft' && playerReady) {
    player.seekTo(Math.max(0, player.getCurrentTime() - 5), true);
    currentIdx = -1;
  }
});

/* ════════════════════════════════════════════
   CALIBRACIÓN (botones + tecla T)
   ════════════════════════════════════════════ */
function applyOffset(val) {
  lyricOffset = parseFloat(val.toFixed(1));
  localStorage.setItem('talvez_offset', lyricOffset);
  const sign = lyricOffset >= 0 ? '+' : '';
  offsetVal.textContent = `${sign}${lyricOffset.toFixed(1)} s`;
  offsetVal.classList.remove('synced');
  currentIdx = -1; // fuerza resincronizar
}

// Inicializar el display con el valor guardado
(function () {
  const sign = lyricOffset >= 0 ? '+' : '';
  offsetVal.textContent = `${sign}${lyricOffset.toFixed(1)} s`;
})();

offsetMinus.addEventListener('click', () => applyOffset(lyricOffset - 0.5));
offsetPlus.addEventListener ('click', () => applyOffset(lyricOffset + 0.5));
offsetReset.addEventListener('click', () => {
  applyOffset(0);
  offsetVal.textContent = '0.0 s';
});

// Tecla T: presionar exactamente cuando se escucha "Ey, oh" (LYRICS[0])
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if ((e.key === 't' || e.key === 'T') && isPlaying && playerReady) {
    // Quiero que LYRICS[0].t coincida con el tiempo actual
    // t = raw + offset  =>  offset = LYRICS[0].t - raw
    const raw = player.getCurrentTime();
    const newOff = LYRICS[0].t - raw;
    applyOffset(newOff);
    // Flash verde de confirmación
    offsetVal.classList.add('synced');
    offsetVal.textContent = '✓ Sincronizado!';
    setTimeout(() => {
      offsetVal.classList.remove('synced');
      const sign = lyricOffset >= 0 ? '+' : '';
      offsetVal.textContent = `${sign}${lyricOffset.toFixed(1)} s`;
    }, 1800);
    console.log(`🎯 T-sync: offset=${newOff.toFixed(2)}s (raw=${raw.toFixed(2)})`);
  }
});


/* ══════════════════════════════════════════
   CONSOLA — ayuda
   ══════════════════════════════════════════ */
console.log('%c🎵 Paulo Londra — Tal Vez  |  Karaoke', 'color:#a855f7;font-size:15px;font-weight:bold');
console.log('%c⌨️  ESPACIO=play/pause  |  ← →=±5 s', 'color:#f59e0b;font-size:12px');
console.log('%c🔧 Ajustes: window.OFFSET=-2 (adelantar letra)  |  window.BPM=92', 'color:#71717a;font-size:11px');
