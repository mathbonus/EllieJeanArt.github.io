(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // 1. closet doors
  const closet = $('#closet-box');
  if (closet) {
    $$('[data-toggle-closet]').forEach((b) =>
      b.addEventListener('click', () => {
        closet.classList.toggle('open');
        if (closet.classList.contains('open')) $('#closet').scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
    );
  }

  // 2. mood filter on the rail
  $$('.chip').forEach((chip) =>
    chip.addEventListener('click', () => {
      $$('.chip').forEach((c) => c.classList.toggle('active', c === chip));
      const mood = chip.dataset.mood;
      let shown = 0;
      $$('.hanger').forEach((h) => {
        const hide = mood !== 'all' && h.dataset.mood !== mood;
        h.classList.toggle('dim', hide);
        if (!hide) shown++;
      });
      const empty = $('.empty');
      if (empty) empty.hidden = shown > 0;
    })
  );

  // 3. shoebox lids + 4. dresser drawers
  const toggleOpen = (btn, parent) => {
    const open = parent.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  };
  $$('.box .lid').forEach((b) => b.addEventListener('click', () => toggleOpen(b, b.closest('.box'))));
  $$('.drawer .front').forEach((b) => b.addEventListener('click', () => toggleOpen(b, b.closest('.drawer'))));

  // 5. lights off + flashlight
  const root = document.documentElement;
  const move = (x, y) => { root.style.setProperty('--x', x + 'px'); root.style.setProperty('--y', y + 'px'); };
  move(innerWidth / 2, innerHeight / 2);
  addEventListener('mousemove', (e) => move(e.clientX, e.clientY));
  addEventListener('touchmove', (e) => move(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  const lights = $('#lights-btn');
  if (lights) lights.addEventListener('click', () => document.body.classList.toggle('dark'));

  // 6. wireframe annotations
  const notes = $('#notes-btn');
  if (notes) notes.addEventListener('click', () => document.body.classList.toggle('show-notes'));
})();
