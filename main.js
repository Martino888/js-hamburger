let menu = document.querySelector(`.hamburger-menu`);
let open = document.querySelector(`.fa-bars`);
let close = document.querySelector('.fa-times');


open.addEventListener('click', function(){
    menu.classList.add('active');
});
close.addEventListener('click', function(){
    menu.classList.remove('active');
});




