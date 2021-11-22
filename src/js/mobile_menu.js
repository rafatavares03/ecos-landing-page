document.querySelector('#menu-button').addEventListener('click', () => {
  const mobileMenu = document.querySelector('#mobile-menu');
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.replace('hidden', 'block');
  } else {
    mobileMenu.classList.replace('block', 'hidden');
  }
});