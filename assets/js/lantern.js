// Lantern cursor glow: a warm light that trails the mouse with a little lag,
// like carrying a lantern across the page. Pure CSS-variable updates on a
// fixed overlay, so it costs one composited layer and no layout work.
(function () {
  if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;

  var lantern = document.createElement('div');
  lantern.id = 'ck-lantern';
  lantern.setAttribute('aria-hidden', 'true');

  var x = window.innerWidth / 2;
  var y = window.innerHeight / 3;
  var targetX = x;
  var targetY = y;
  var lit = false;
  var raf = null;

  function frame() {
    // Ease toward the cursor: the lag is what sells the lantern-swing feel.
    x += (targetX - x) * 0.12;
    y += (targetY - y) * 0.12;
    lantern.style.setProperty('--lx', x + 'px');
    lantern.style.setProperty('--ly', y + 'px');
    if (Math.abs(targetX - x) > 0.2 || Math.abs(targetY - y) > 0.2) {
      raf = requestAnimationFrame(frame);
    } else {
      raf = null;
    }
  }

  document.addEventListener('mousemove', function (e) {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!lit) {
      lit = true;
      x = targetX;
      y = targetY;
      // Place the light before the first animation frame so it never
      // fades in at a stale position.
      lantern.style.setProperty('--lx', x + 'px');
      lantern.style.setProperty('--ly', y + 'px');
      lantern.classList.add('ck-lit');
    }
    if (!raf) raf = requestAnimationFrame(frame);
  });

  document.addEventListener('mouseleave', function () {
    lantern.classList.remove('ck-lit');
    lit = false;
  });

  if (document.body) {
    document.body.appendChild(lantern);
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.appendChild(lantern);
    });
  }
})();
