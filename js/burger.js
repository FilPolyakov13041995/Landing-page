const menuBurger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    menu.classList.toggle('active');

    if(menuBurger.classList.contains('active')) {
        body.style.position = 'fixed';
    } else {
        body.style.position = '';
    }

});



