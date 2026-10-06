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
})();
