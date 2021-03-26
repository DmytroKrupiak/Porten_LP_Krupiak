'use strict'
const burger = document.querySelector('.nav_burger'),
      menu = document.querySelector('.nav_menu'),
      carousels = document.querySelectorAll('.carousel');


burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    burger.classList.contains('active')
    ? carousels.forEach(i=>i.style.visibility='hidden')
    : carousels.forEach(i=>i.style.visibility='visible')
});



