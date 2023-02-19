// BURGER MENU //

const body = document.querySelector('body');
const burgerMenu = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');
// NAVIGATION MENU //

const homeLink = document.querySelector('.liHome');
const aboutLink = document.querySelector('.liAbout');
const knowagleLink = document.querySelector('.liKnowagle');
const contactLink = document.querySelector('.liContact');

const homeSection = document.getElementById('homeSection');
const aboutSection = document.getElementById('aboutSection');
const knowagleSection = document.getElementById('knowagleSection');
const contactSection = document.getElementById('contactSection');

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

burgerIcon.addEventListener('click', function () {
	burgerMenu.classList.toggle('activeBurger');
	burgerIcon.classList.toggle('activeBurger');
});

const switchMode = document.querySelector('.switch-mode');

switchMode.addEventListener('click', function () {
	body.classList.toggle('dark');
	moon.classList.toggle('blackWhite');
});

homeSection.classList.toggle('active');

homeLink.addEventListener('click', function () {
	aboutSection.classList.remove('active');
	knowagleSection.classList.remove('active');
	contactSection.classList.remove('active');
	homeSection.classList.add('active');
	//homeSection.classList.toggle('active')
});

aboutLink.addEventListener('click', function () {
	homeSection.classList.remove('active');
	knowagleSection.classList.remove('active');
	contactSection.classList.remove('active');
	aboutSection.classList.add('active');
	//aboutSection.classList.toggle('active')
});

knowagleLink.addEventListener('click', function () {
	homeSection.classList.remove('active');
	aboutSection.classList.remove('active');
	contactSection.classList.remove('active');
	knowagleSection.classList.add('active');
	//knowagleSection.classList.toggle('active')
});

contactLink.addEventListener('click', function () {
	homeSection.classList.remove('active');
	aboutSection.classList.remove('active');
	knowagleSection.classList.remove('active');
	contactSection.classList.add('active');
	//knowagleSection.classList.toggle('active')
});
