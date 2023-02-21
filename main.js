// BURGER MENU //

const body = document.querySelector('body');
const burgerMenu = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');

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

const sections = document.querySelectorAll('.section');

burgerIcon.addEventListener('click', function () {
	burgerMenu.classList.toggle('activeBurger');
	burgerIcon.classList.toggle('activeBurger');
});

const switchMode = document.querySelector('.switch-mode');

switchMode.addEventListener('click', function () {
	body.classList.toggle('dark');
	moon.classList.toggle('blackWhite');
});

const removeClass = () => {
	sections.forEach((section) => section.classList.remove('active'));
};
const home = () => {
	removeClass();
	homeSection.classList.add('active');
};

const about = () => {
	removeClass();
	aboutSection.classList.add('active');
};

const knowlage = () => {
	removeClass();
	knowagleSection.classList.add('active');
};

const contact = () => {
	removeClass();
	contactSection.classList.add('active');
};

// NAVIGATION MENU //

homeSection.classList.toggle('active');

homeLink.addEventListener('click', home);
aboutLink.addEventListener('click', about);
knowagleLink.addEventListener('click', knowlage);
contactLink.addEventListener('click', contact);
