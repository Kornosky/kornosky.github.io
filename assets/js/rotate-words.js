// Rotating adjective in the hero headline: "I build <practical> tools with
// Python." The wrapper's width is animated alongside the word swap so the
// rest of the line slides smoothly instead of snapping when word lengths
// differ. Uses CSS transitions (set in custom-styles.css), which are not
// affected by the OS reduced-motion setting the way keyframe animations
// can be. No-ops on pages without the element.
(function () {
  var el = document.getElementById('ck-rotate');
  if (!el) return;

  var words = ['practical', 'quick', 'robust', 'intelligent', 'reliable', 'scalable', 'elegant'];
  var index = 0;

  var inner = document.createElement('span');
  inner.className = 'ck-rotate-word';
  inner.textContent = words[0];
  el.textContent = '';
  el.appendChild(inner);

  function measure(word) {
    var probe = document.createElement('span');
    probe.className = 'ck-rotate-word';
    probe.textContent = word;
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.whiteSpace = 'nowrap';
    el.appendChild(probe);
    var w = probe.offsetWidth;
    el.removeChild(probe);
    return w;
  }

  function swap() {
    index = (index + 1) % words.length;
    var next = words[index];

    // Pin the current width so the transition has a starting value the
    // first time through (it is "auto" until then).
    if (!el.style.width) {
      el.style.width = el.offsetWidth + 'px';
    }

    inner.style.opacity = '0';
    inner.style.transform = 'translateY(0.3em)';

    setTimeout(function () {
      el.style.width = measure(next) + 'px';
      inner.textContent = next;
      inner.style.transform = 'translateY(-0.3em)';
      void inner.offsetWidth; // flush so the next change transitions
      inner.style.opacity = '1';
      inner.style.transform = 'translateY(0)';
    }, 300);
  }

  // Wait for the display font before the first measurement; metrics from
  // the fallback font would bake in a wrong width.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      setInterval(swap, 2800);
    });
  } else {
    setInterval(swap, 2800);
  }
})();
