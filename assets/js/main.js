document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');

    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('show');
        this.classList.toggle('active');
    });
});