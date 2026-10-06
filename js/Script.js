(() => {
  'use strict';

  const root = document.documentElement;
  const STORAGE_KEY = 'coffe-tema';

  /* ---------- Tema claro / escuro ---------- */

  const toggle = document.querySelector('[data-theme-toggle]');

  function applyTheme(theme, save) {
    root.setAttribute('data-theme', theme);

    if (toggle) {
      const label = theme === 'dark' ? 'Mudar para o tema claro' : 'Mudar para o tema escuro';
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
    }

    if (save) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (e) {
        /* Armazenamento indisponível: o tema vale só para esta visita. */
      }
    }
  }

  applyTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark', false);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next, true);
    });
  }

  /* ---------- Foto de perfil ---------- */
  /* Se assets/foto.jpg não existir, a imagem é removida e o círculo mostra a inicial. */

  const avatar = document.querySelector('[data-avatar]');
  const photo = avatar ? avatar.querySelector('img') : null;

  if (photo) {
    const removePhoto = () => photo.remove();

    if (photo.complete && photo.naturalWidth === 0) {
      removePhoto();
    } else {
      photo.addEventListener('error', removePhoto, { once: true });
    }
  }

  /* ---------- Tela de entrada ---------- */
  /* Aparece a cada visita. Clique, toque ou Enter/Espaço (o botão ocupa a tela toda). */

  const intro = document.querySelector('[data-intro]');

  if (intro) {
    const siteParts = document.querySelectorAll('.skip-link, .site-header, main, .site-footer');

    root.classList.add('intro-ativa');
    siteParts.forEach((el) => el.setAttribute('inert', ''));
    intro.focus({ preventScroll: true });

    let entered = false;

    const enter = () => {
      if (entered) return;
      entered = true;

      root.classList.remove('intro-ativa');
      siteParts.forEach((el) => el.removeAttribute('inert'));
      intro.classList.add('is-leaving');
      window.scrollTo(0, 0);

      const remove = () => intro.remove();
      intro.addEventListener('transitionend', remove, { once: true });
      setTimeout(remove, 1000);
    };

    intro.addEventListener('click', enter);
  }
})();
