const menuBurger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    menu.classList.toggle('active');
});