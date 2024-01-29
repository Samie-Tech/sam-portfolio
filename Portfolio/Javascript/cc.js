document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function () {
        // Toggle the 'show' class on the navigation links
        navLinks.classList.toggle('show');
    });
});
