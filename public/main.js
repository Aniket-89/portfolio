window.addEventListener('DOMContentLoaded', () => {
    if (window.scrollY >= 50) {
        document.querySelector('.logo').classList.add('w-[30px]');
    }

    mobileMenuShow = document.getElementById('mobile-menu-show');
    mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuShow.addEventListener('change', function () {
        if (mobileMenuShow.checked) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
      });
});