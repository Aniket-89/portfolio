const menuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('translate-x-0'); // Toggle mobile menu visibility
});