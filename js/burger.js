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

    if (body.requestFullscreen) {
    body.requestFullscreen();
    } else if (body.webkitrequestFullscreen) {
    body.webkitrequestFullscreen();
    } else if (body.mozrequestFullscreen) {
    body.mozrequestFullscreen();
    } else if (body.msrequestFullscreen) {
    body.msrequestFullscreen();
    }

});



