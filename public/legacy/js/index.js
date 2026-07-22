const canvas = document.getElementById('Matrix');

if (canvas instanceof HTMLCanvasElement) {
  const context = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const fontSize = 14;
  let rainDrops = [];
  let animationFrame = 0;
  let previousFrame = 0;

  function resizeCanvas() {
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * scale);
    canvas.height = Math.floor(window.innerHeight * scale);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context?.setTransform(scale, 0, 0, scale, 0, 0);
    rainDrops = Array.from({ length: Math.ceil(window.innerWidth / fontSize) }, () => 1);
  }

  function draw(timestamp) {
    if (!context) return;
    if (timestamp - previousFrame >= 45) {
      context.fillStyle = 'rgba(0, 0, 0, 0.08)';
      context.fillRect(0, 0, window.innerWidth, window.innerHeight);
      context.fillStyle = '#ff3ea5';
      context.font = `${fontSize}px monospace`;

      rainDrops.forEach((drop, index) => {
        const glyph = alphabet[Math.floor(Math.random() * alphabet.length)];
        context.fillText(glyph, index * fontSize, drop * fontSize);
        rainDrops[index] = drop * fontSize > window.innerHeight && Math.random() > 0.975 ? 0 : drop + 1;
      });
      previousFrame = timestamp;
    }
    animationFrame = window.requestAnimationFrame(draw);
  }

  function drawStaticMatrix() {
    if (!context) return;
    context.fillStyle = '#050505';
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = 'rgba(255, 62, 165, 0.38)';
    context.font = `${fontSize}px monospace`;
    const rows = Math.ceil(window.innerHeight / fontSize);

    rainDrops.forEach((_, column) => {
      for (let row = 0; row < rows; row += 1) {
        const pattern = column * 17 + row * 31;
        if (pattern % 11 !== 0) continue;
        context.fillText(alphabet[pattern % alphabet.length], column * fontSize, row * fontSize);
      }
    });
  }

  function syncAnimation() {
    window.cancelAnimationFrame(animationFrame);
    if (!context) return;
    if (document.hidden) return;
    if (reduceMotion.matches) return drawStaticMatrix();
    animationFrame = window.requestAnimationFrame(draw);
  }

  function handleResize() {
    resizeCanvas();
    syncAnimation();
  }

  resizeCanvas();
  syncAnimation();
  window.addEventListener('resize', handleResize, { passive: true });
  document.addEventListener('visibilitychange', syncAnimation);
  reduceMotion.addEventListener('change', syncAnimation);
}
