const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');
// const  = document.querySelector('nav ul')
hamburger.addEventListener('click', function(e){
    // console.log(nav);
    nav.classList.toggle('visible');
    hamburger.classList.toggle('cross');
})

nav.addEventListener('click' ,function(e){
    nav.classList.remove('visible');
    hamburger.classList.remove('cross');
})

