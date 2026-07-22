// Lantern cursor glow: a warm light that trails the mouse with a little lag,
// like carrying a lantern across the page. Position, fade-in, and the candle
// flicker are all driven here (not CSS animations) so the flicker works even
// when the OS reduced-motion setting disables CSS keyframes. The flicker is
// a gentle luminance sway of an already-faint glow, well below any
// motion-sensitivity threshold.
(function () {
  if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;

  var lantern = document.createElement('div');
  lantern.id = 'ck-lantern';
  lantern.setAttribute('aria-hidden', 'true');

  var x = 0;
  var y = 0;
  var targetX = 0;
  var targetY = 0;
  var fade = 0;        // 0..1, eased toward fadeTarget
  var fadeTarget = 0;
  var raf = null;
  var last = null;

  // Layered incommensurate sines approximate the aperiodic sway of a flame
  // without the popcorn jitter that Math.random would give.
  function flicker(t) {
    var s = Math.sin(t * 1.1) * 0.5
          + Math.sin(t * 2.3 + 1.7) * 0.3
          + Math.sin(t * 4.7 + 0.5) * 0.2;
    return 0.85 + 0.15 * s; // 0.70 .. 1.0
  }

  function frame(now) {
    if (last === null) last = now;
    var dt = Math.min((now - last) / 1000, 0.1);
    last = now;

    x += (targetX - x) * 0.12;
    y += (targetY - y) * 0.12;
    fade += (fadeTarget - fade) * Math.min(1, dt * 3);

    lantern.style.setProperty('--lx', x + 'px');
    lantern.style.setProperty('--ly', y + 'px');
    lantern.style.opacity = (fade * flicker(now / 1000)).toFixed(3);

    if (fadeTarget === 0 && fade < 0.01) {
      lantern.style.opacity = '0';
      raf = null;
      last = null;
      return;
    }
    raf = requestAnimationFrame(frame);
  }

  document.addEventListener('mousemove', function (e) {
    targetX = e.clientX;
    targetY = e.clientY;
    if (fadeTarget === 0) {
      fadeTarget = 1;
      // Light the lantern at the cursor, not wherever it last went out.
      x = targetX;
      y = targetY;
      lantern.style.setProperty('--lx', x + 'px');
      lantern.style.setProperty('--ly', y + 'px');
    }
    if (!raf) raf = requestAnimationFrame(frame);
  });

  document.addEventListener('mouseleave', function () {
    fadeTarget = 0;
  });

  if (document.body) {
    document.body.appendChild(lantern);
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.appendChild(lantern);
    });
  }
})();
