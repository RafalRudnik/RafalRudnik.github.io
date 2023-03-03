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
const logo = document.querySelectorAll('.logo');

const sections = document.querySelectorAll('.section');

const switchMode = document.querySelector('.switch-mode');

const sendBtn = document.querySelector('.sendBtn');

const burgerSwitch = () => {
	burgerMenu.classList.toggle('activeBurger');
	burgerIcon.classList.toggle('activeBurger');
};

const darkMode = () => {
	body.classList.toggle('dark');
	moon.classList.toggle('blackWhite');
	logo.forEach((logo) => logo.classList.toggle('logo-on'));
};

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

// EMAIL SENDING  //

function sendMail() {
	let params = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		message: document.getElementById('message').value,
	};
	const serviceId = 'service_p6oe9zt';
	const templateId = 'template_nahts8t';

	emailjs
		.send(serviceId, templateId, params)
		.then((res) => {
			document.getElementById('name').value = '';
			document.getElementById('email').value = '';
			document.getElementById('message').value = '';
			console.log(res);
			alert('message send successfully');
		})
		.catch((err) => console.log(err));
}

// NAVIGATION MENU //

homeSection.classList.toggle('active');

burgerIcon.addEventListener('click', burgerSwitch);

switchMode.addEventListener('click', darkMode);

homeLink.addEventListener('click', home);
aboutLink.addEventListener('click', about);
knowagleLink.addEventListener('click', knowlage);
contactLink.addEventListener('click', contact);

sendBtn.addEventListener('click', sendMail);
