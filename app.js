/* =============================================
   app.js — Paulo Londra · Nena Maldición
   ft. Lenny Tavarez  ·  Karaoke + Beat
   ============================================= */

/* ══════════════════════════════════════════
   LETRA CON TIMESTAMPS (segundos)
   Presiona T cuando escuches "Oh-oh-oh, eh"
   para sincronizar automáticamente.
   ══════════════════════════════════════════ */
const LYRICS = [
  // ── INTRO ──────────────────────────────────
  { t:  3,   text: "Oh-oh-oh, eh",                                             section: "Intro",      type: "intro" },
  { t:  7,   text: "Mmm-mmm, mm-mmm",                                          section: "Intro",      type: "intro" },
  // ── HOOK 1 ─────────────────────────────────
  { t:  11,  text: "Ey, baby, no",                                              section: "Hook",       type: "hook" },
  { t:  14,  text: "No ves que me estoy muriendo",                              section: "Hook",       type: "hook" },
  { t:  18,  text: "Porque un ratito me regales tu atención",                   section: "Hook",       type: "hook" },
  { t:  22,  text: "Oh, oh, oh",                                                section: "Hook",       type: "hook-end" },
  { t:  25,  text: "Estoy perdido en ese azul de tus ojos",                    section: "Hook",       type: "hook-end" },
  // ── HOOK 1 (repetición) ─────────────────────
  { t:  30,  text: "Ey, baby, no",                                              section: "Hook",       type: "hook" },
  { t:  33,  text: "No ves que me estoy muriendo",                              section: "Hook",       type: "hook" },
  { t:  37,  text: "Porque un ratito me regales tu atención",                   section: "Hook",       type: "hook" },
  { t:  41,  text: "Oh, oh, oh",                                                section: "Hook",       type: "hook-end" },
  { t:  44,  text: "Estoy perdido en ese azul de tus ojos",                    section: "Hook",       type: "hook-end" },
  // ── ESTRIBILLO 1 ───────────────────────────
  { t:  49,  text: "Nena maldición, nena maldición",                            section: "Estribillo", type: "chorus" },
  { t:  53,  text: "Yo ni te conozco, pero jugaría con vos",                    section: "Estribillo", type: "chorus" },
  { t:  57,  text: "Nena maldición, ey, nena maldición, yo'",                   section: "Estribillo", type: "chorus" },
  { t:  61,  text: "Yo ni la conozco, pero jugaría con vos",                    section: "Estribillo", type: "chorus" },
  // ── VERSO 1 ────────────────────────────────
  { t:  66,  text: "Mirada fría como la nieve",                                section: "Verso 1",    type: "verse" },
  { t:  70,  text: "Me congela hasta no dar má'",                               section: "Verso 1",    type: "verse" },
  { t:  74,  text: "Si me toca hace que me eleve",                              section: "Verso 1",    type: "verse" },
  { t:  78,  text: "Hasta ni ver to'a la ciudad",                               section: "Verso 1",    type: "verse" },
  { t:  82,  text: "Compraría lo que ella quiere",                              section: "Verso 1",    type: "verse" },
  { t:  86,  text: "Con tal que venga para acá",                                section: "Verso 1",    type: "verse" },
  { t:  90,  text: "Estaríamos como se debe",                                   section: "Verso 1",    type: "verse" },
  { t:  94,  text: "Relaja'os sin un problema",                                 section: "Verso 1",    type: "verse" },
  { t:  98,  text: "Seguro tiene mil pretendientes",                            section: "Verso 1",    type: "accent" },
  { t:  102, text: "Pero ni uno valiente",                                      section: "Verso 1",    type: "verse" },
  { t:  105, text: "Para hacerle ternura",                                      section: "Verso 1",    type: "verse" },
  { t:  108, text: "Sin miedo a qué diga la gente",                             section: "Verso 1",    type: "verse" },
  { t:  112, text: "Yo sé bien lo que siente",                                  section: "Verso 1",    type: "accent" },
  { t:  115, text: "Sé muy bien lo que siente",                                 section: "Verso 1",    type: "verse" },
  { t:  118, text: "Que to' somos iguales",                                     section: "Verso 1",    type: "verse" },
  { t:  122, text: "Con los mismo' errores de siempre",                         section: "Verso 1",    type: "verse" },
  // ── HOOK 2 ─────────────────────────────────
  { t:  126, text: "Ey, baby, no",                                              section: "Hook",       type: "hook" },
  { t:  130, text: "No ves que me estoy muriendo",                              section: "Hook",       type: "hook" },
  { t:  134, text: "Porque un ratito me regales tu atención",                   section: "Hook",       type: "hook" },
  { t:  138, text: "Oh, oh, oh",                                                section: "Hook",       type: "hook-end" },
  { t:  141, text: "Estoy perdido en ese azul de tus ojos",                    section: "Hook",       type: "hook-end" },
  // ── ESTRIBILLO 2 ───────────────────────────
  { t:  146, text: "Nena maldición, nena maldición",                            section: "Estribillo", type: "chorus" },
  { t:  150, text: "Yo ni la conozco, pero jugaría con vos",                    section: "Estribillo", type: "chorus" },
  { t:  154, text: "Nena maldición, ey, nena maldición, yo'",                   section: "Estribillo", type: "chorus" },
  { t:  158, text: "Yo ni te conozco, pero jugaría con vos",                    section: "Estribillo", type: "chorus" },
  // ── VERSO 2 ────────────────────────────────
  { t:  163, text: "Úsame, úsame, úsame",                                       section: "Verso 2",    type: "accent" },
  { t:  167, text: "Hazme tuyo, dale, bésame",                                  section: "Verso 2",    type: "verse" },
  { t:  171, text: "Como en el colegio vamo' a aprender",                       section: "Verso 2",    type: "verse" },
  { t:  175, text: "Quemando vemo' el amanecer",                                section: "Verso 2",    type: "verse" },
  { t:  179, text: "Tú-tú-tú-tú-tú",                                            section: "Verso 2",    type: "intro" },
  { t:  182, text: "Con los ojos azules",                                       section: "Verso 2",    type: "verse" },
  { t:  185, text: "Yo con los ojos rojos",                                     section: "Verso 2",    type: "verse" },
  { t:  188, text: "Se te seca la boca y con mi lengua te la remojo, eh",       section: "Verso 2",    type: "accent" },
  { t:  193, text: "Quiero ser Messi y tú mi Antonella",                        section: "Verso 2",    type: "verse" },
  { t:  197, text: "Prepárate pa' vivir una novela",                            section: "Verso 2",    type: "verse" },
  { t:  201, text: "Soy exclusivo, no de cualquiera",                           section: "Verso 2",    type: "verse" },
  { t:  205, text: "Por eso quiero que tú sea' mi nena",                        section: "Verso 2",    type: "accent" },
  // ── HOOK 3 ─────────────────────────────────
  { t:  209, text: "Ey, baby, no",                                              section: "Hook",       type: "hook" },
  { t:  213, text: "No ves que me estoy muriendo",                              section: "Hook",       type: "hook" },
  { t:  217, text: "Porque un ratito me regales tu atención",                   section: "Hook",       type: "hook" },
  { t:  221, text: "Oh, oh, oh",                                                section: "Hook",       type: "hook-end" },
  { t:  224, text: "Estoy perdido en ese azul de tus ojos",                    section: "Hook",       type: "hook-end" },
  // ── HOOK 4 (cierre) ────────────────────────
  { t:  228, text: "Ey, baby, no",                                              section: "Hook",       type: "hook" },
  { t:  232, text: "No ves que me estoy muriendo",                              section: "Hook",       type: "hook" },
  { t:  236, text: "Porque un ratito me regales tu atención",                   section: "Hook",       type: "hook" },
  { t:  240, text: "Oh, oh, oh",                                                section: "Hook",       type: "hook-end" },
  { t:  243, text: "Estoy perdido en el azul de tus ojos, yeh",                section: "Hook",       type: "hook-end" },
  // ── OUTRO ──────────────────────────────────
  { t:  248, text: "O-O-Ovy On The Drums",                                      section: "Outro",      type: "outro" },
  { t:  252, text: "Ovy On The Drums, On The Drums, On The Drums",              section: "Outro",      type: "outro" },
  { t:  256, text: "Paulo Londra, Lenny Tavarez, baby",                         section: "Outro",      type: "outro" },
  { t:  260, text: "Ando con Paulo Londra",                                     section: "Outro",      type: "outro" },
  { t:  263, text: "Los blanquitos preferidos",                                  section: "Outro",      type: "outro" },
  { t:  267, text: "Ovy On The Drums",                                          section: "Outro",      type: "outro" },
  { t:  270, text: "Nos quedamos con el argentino",                             section: "Outro",      type: "outro" },
  { t:  274, text: "This is the Hollywood Squad, baby",                         section: "Outro",      type: "fade-out" },
];

/* ── BPM del ritmo (Nena Maldición ≈ 95 BPM) ── */
window.BPM = 95;

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
  playBtn.disabled         = false;
  idlePlayBtn.disabled     = false;
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
  const dur  = player.getDuration() || 290;
  player.seekTo(pct * dur, true);
  updateSeekUI(pct * dur, dur);
  currentIdx = -1;
  stopBeat();
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
  const t   = raw + lyricOffset;
  const dur = player.getDuration() || 290;

  updateSeekUI(t, dur);

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
  const bpm    = window.BPM || 95;
  const beatMs = (60 / bpm) * 1000;

  const startT  = player ? player.getCurrentTime() : 0;
  const elapsed = startT % (60 / bpm);
  const delay   = (1 - elapsed / (60 / bpm)) * beatMs;

  setTimeout(() => {
    triggerBeat();
    beatTimer = setInterval(triggerBeat, (60 / (window.BPM || 95)) * 1000);
  }, Math.min(delay, beatMs));
}

function stopBeat() {
  clearInterval(beatTimer);
  beatTimer = null;
}

let beatCount = 0;

function triggerBeat() {
  beatCount++;
  const isDownbeat = beatCount % 4 === 1;
  const type = currentIdx >= 0 ? LYRICS[currentIdx]?.type : '';
  const isChorus = type === 'chorus' || type === 'hook';

  spawnBeatRing(isDownbeat, isChorus);

  if (orbA) {
    const scale = isDownbeat ? '1.07' : '1.03';
    orbA.style.transform = `scale(${scale})`;
    setTimeout(() => { if (orbA) orbA.style.transform = ''; }, 180);
  }

  const cur = lyricStack.querySelector('.current');
  if (cur) {
    cur.style.animation = 'none';
    cur.getBoundingClientRect();
    cur.style.animation = 'beatFlash 0.18s ease-out';
    setTimeout(() => { if (cur) cur.style.animation = ''; }, 220);
  }
}

function spawnBeatRing(big, hot) {
  const ring  = document.createElement('div');
  const size  = big ? 120 : 80;
  const color = hot
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
    syncHint.style.display   = '';
    setTimeout(() => {
      syncHint.style.transition = 'opacity 1s ease';
      syncHint.style.opacity    = '0';
      setTimeout(() => { syncHint.style.display = 'none'; }, 1100);
    }, 12000);
  }, 600);
}

function advanceLyric(newIdx) {
  currentIdx = newIdx;
  if (newIdx < 0) return;

  const lyric = LYRICS[newIdx];

  lyricStack.querySelectorAll('.ghost-2').forEach(el => {
    el.className = 'lyric-item exiting';
    setTimeout(() => el.remove(), 650);
  });
  lyricStack.querySelectorAll('.ghost-1').forEach(el => {
    el.className = 'lyric-item ghost-2';
  });
  lyricStack.querySelectorAll('.current').forEach(el => {
    el.className   = 'lyric-item ghost-1';
    el.style.animation = '';
  });

  const el       = document.createElement('div');
  el.className   = `lyric-item entering ${lyric.type}`;
  el.textContent = lyric.text;
  lyricStack.appendChild(el);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.className = `lyric-item current ${lyric.type}`;
  }));

  updatePill(lyric.section, lyric.type);
  updateChorusMode(lyric.type);
  updateBgTint(lyric.type);
}

function updatePill(section, type) {
  sectionPill.textContent = section;
  sectionPill.className   = 'section-pill';
  if (type === 'chorus')                 sectionPill.classList.add('chorus-mode');
  else if (type === 'hook' || type === 'hook-end') sectionPill.classList.add('chorus-mode');
  else if (section === 'Outro')          sectionPill.classList.add('outro-mode');
}

function updateChorusMode(type) {
  const on = type === 'chorus' || type === 'hook' || type === 'hook-end';
  chorusPulse.className = 'chorus-pulse' + (on ? ' active' : '');
}

function updateBgTint(type) {
  if (!orbA || !orbB) return;
  if (type === 'chorus') {
    orbA.style.background = 'radial-gradient(circle, rgba(245,158,11,0.22), transparent 70%)';
    orbB.style.background = 'radial-gradient(circle, rgba(245,158,11,0.14), transparent 70%)';
  } else if (type === 'hook' || type === 'hook-end') {
    orbA.style.background = 'radial-gradient(circle, rgba(236,72,153,0.22), transparent 70%)';
    orbB.style.background = 'radial-gradient(circle, rgba(236,72,153,0.14), transparent 70%)';
  } else if (type === 'accent') {
    orbA.style.background = 'radial-gradient(circle, rgba(168,85,247,0.2), transparent 70%)';
    orbB.style.background = 'radial-gradient(circle, rgba(168,85,247,0.14), transparent 70%)';
  } else if (type === 'intro') {
    orbA.style.background = 'radial-gradient(circle, rgba(6,182,212,0.18), transparent 70%)';
    orbB.style.background = 'radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)';
  } else if (type === 'outro' || type === 'fade-out') {
    orbA.style.background = 'radial-gradient(circle, rgba(71,85,105,0.2), transparent 70%)';
    orbB.style.background = 'radial-gradient(circle, rgba(71,85,105,0.12), transparent 70%)';
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
   ESPACIO → play/pause  |  ← → → ±5 s
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

/* ══════════════════════════════════════════
   CALIBRACIÓN (botones ± y tecla T)
   ══════════════════════════════════════════ */
function applyOffset(val) {
  lyricOffset = parseFloat(val.toFixed(1));
  localStorage.setItem('talvez_offset', lyricOffset);
  const sign = lyricOffset >= 0 ? '+' : '';
  offsetVal.textContent = `${sign}${lyricOffset.toFixed(1)} s`;
  offsetVal.classList.remove('synced');
  currentIdx = -1;
}

// Inicializar display al cargar
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

// Tecla T: presionar exactamente al escuchar "Oh-oh-oh, eh" (LYRICS[0])
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if ((e.key === 't' || e.key === 'T') && isPlaying && playerReady) {
    const raw    = player.getCurrentTime();
    const newOff = LYRICS[0].t - raw;   // LYRICS[0].t = 3 seg
    applyOffset(newOff);
    offsetVal.classList.add('synced');
    offsetVal.textContent = '✓ Sincronizado!';
    setTimeout(() => {
      offsetVal.classList.remove('synced');
      const sign = lyricOffset >= 0 ? '+' : '';
      offsetVal.textContent = `${sign}${lyricOffset.toFixed(1)} s`;
    }, 1800);
    console.log(`🎯 T-sync: offset=${newOff.toFixed(2)}s`);
  }
});

/* ══════════════════════════════════════════
   CONSOLA — ayuda
   ══════════════════════════════════════════ */
console.log('%c🎵 Paulo Londra — Nena Maldición ft. Lenny Tavarez', 'color:#a855f7;font-size:15px;font-weight:bold');
console.log('%c⌨️  ESPACIO=play/pause | ← →=±5s | T=sincronizar al escuchar "Oh-oh-oh"', 'color:#f59e0b;font-size:12px');
