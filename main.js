// The Phoenix Standard — quiet scroll reveals
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  items.forEach((el) => io.observe(el));
})();

// The Phoenix Standard — tap/click/keyboard tier highlight
(function () {
  const tiers = Array.prototype.slice.call(document.querySelectorAll('.pyramid .tier'));
  if (!tiers.length) return;

  function setActive(target) {
    const makeActive = !target.classList.contains('is-active');
    tiers.forEach((t) => {
      const on = t === target && makeActive;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  tiers.forEach((tier) => {
    tier.addEventListener('click', function () {
      setActive(tier);
    });
    tier.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        setActive(tier);
      }
    });
  });
})();
