document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    function highlightNavLink() {
    }
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = function () {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
