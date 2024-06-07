const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementsById('header');

    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('translate-x-full');
      mobileMenuToggle.querySelector('.menu-icon-closed').classList.toggle('hidden');
      mobileMenuToggle.querySelector('.menu-icon-open').classList.toggle('hidden');
    });
    document.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky', 'top-0', 'h-5');
        } else {
        header.classList.remove('sticky', 'top-0', 'h-5');
    }})