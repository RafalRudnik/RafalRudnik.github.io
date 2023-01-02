// BURGER MENU //

const burgerMenu = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');

burgerIcon.addEventListener('click', function() {
    burgerMenu.classList.toggle('activeBurger');
    burgerIcon.classList.toggle('activeBurger');
});


// NAVIGATION MENU //

const homeLink = document.querySelector('.liHome');
const aboutLink = document.querySelector('.liAbout');
const knowagleLink = document.querySelector('.liKnowagle');
const contactLink = document.querySelector('.liContact');

const homeSection = document.getElementById('homeSection');
const aboutSection = document.getElementById('aboutSection')
const knowagleSection = document.getElementById('knowagleSection')
const contactSection = document.getElementById('contactSection')

homeSection.classList.toggle('active')

homeLink.addEventListener('click', function (){
    aboutSection.classList.remove('active')
    knowagleSection.classList.remove('active')
    contactSection.classList.remove('active')
    homeSection.classList.add('active')
    //homeSection.classList.toggle('active')
})

aboutLink.addEventListener('click', function (){
    homeSection.classList.remove('active')
    knowagleSection.classList.remove('active')
    contactSection.classList.remove('active')
    aboutSection.classList.add('active')
    //aboutSection.classList.toggle('active')
})

knowagleLink.addEventListener('click', function(){
    homeSection.classList.remove('active')
    aboutSection.classList.remove('active')
    contactSection.classList.remove('active')
    knowagleSection.classList.add('active')
    //knowagleSection.classList.toggle('active')
})

contactLink.addEventListener('click', function(){
    homeSection.classList.remove('active')
    aboutSection.classList.remove('active')
    knowagleSection.classList.remove('active')
    contactSection.classList.add('active')
    //knowagleSection.classList.toggle('active')
})