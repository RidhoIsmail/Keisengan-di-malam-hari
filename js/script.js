let list = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');

list.onclick = () => {
    list.classList.toggle('bx-x');
    nav.classList.toggle('open')
};


let sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true,
});

sr.reveal('.logo', {delay:200, origin:'left'});
sr.reveal('.navbar', {delay:400, origin:'top'});
sr.reveal('.menu-button', {delay:500, origin:'right'});
sr.reveal('.home-text span', {delay:600, origin:'top'});
sr.reveal('.home-text h1', {delay:680, origin:'left'});
sr.reveal('.home-text p', {delay:750, origin:'right'});
sr.reveal('.main-button', {delay:860, origin:'left'});
sr.reveal('.share .sosmed', {delay:950, origin:'bottom'});
sr.reveal('.share p', {delay:950, origin:'bottom'});
sr.reveal('.home-img', {delay:1000, origin:'right'});


