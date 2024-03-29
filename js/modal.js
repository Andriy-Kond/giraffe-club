'use strict';

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openRequestBtn: document.querySelector('[data-request-open]'),

    closeModalBtn: document.querySelector('[data-modal-close]'),
    backdrop: document.querySelector('[data-backdrop]'),
    // modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openRequestBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
    // refs.modal.classList.toggle("is-hidden");
  }
})();
