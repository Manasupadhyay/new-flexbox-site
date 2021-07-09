const hamburger = document.getElementById('hamburger');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
// const  = document.querySelector('nav ul')
hamburger.addEventListener('click', function(e){
    // console.log(nav);
    nav.classList.toggle('visible');
    hamburger.classList.toggle('cross');
    header.classList.toggle('overflow');
})

nav.addEventListener('click' ,function(e){
    nav.classList.remove('visible');
    hamburger.classList.remove('cross');
    header.classList.toggle('overflow');

})

