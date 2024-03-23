'use strict';

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuNavRef = document.querySelector('[data-menu-nav]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    // Додає на кнопку бургера клас is-open. В залежності від цього показується або іконка бургеру, або хрестик закриття
    menuNavRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();
