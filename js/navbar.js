const toggleButton = document.querySelector('.toggle-button-right');
const navbarMenu = document.querySelector('.navbar-menu');

toggleButton.addEventListener('click', function () {
    toggleButton.classList.toggle('active');
    navbarMenu.classList.toggle('show');
});