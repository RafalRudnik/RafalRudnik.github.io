const homeBtn = document.querySelector('.home-link');
const aboutBtn = document.querySelector('.about-link');
const cntBtn = document.querySelector('.contact-link');
const portBtn = document.querySelector('.profile-link');
const allBtns = document.querySelectorAll('.links a');
const allSections = document.querySelectorAll('.sections');
const home = document.querySelector('.home-section');
const about = document.querySelector('.about-section');
const portfolio = document.querySelector('.portfolio-section');
const contact = document.querySelector('.contact-section');

// homeBtn.classList.toggle('active-link');
// home.classList.toggle('display-on');

const activeLinkRemove = () => {
	allBtns.forEach((btn) => btn.classList.remove('active-link'));
};
const sectionRemove = () => {
	allSections.forEach((section) => section.classList.remove('display-on'));
};

const homeBtnActive = () => {
	activeLinkRemove();
	sectionRemove();
	homeBtn.classList.add('active-link');
	home.classList.add('display-on');
};

const aboutBtnActive = () => {
	activeLinkRemove();
	sectionRemove();
	aboutBtn.classList.add('active-link');
	about.classList.add('display-on');
};
const portBtnActive = () => {
	activeLinkRemove();
	sectionRemove();
	portBtn.classList.add('active-link');
	portfolio.classList.add('display-on');
};

const cntBtnActive = () => {
	activeLinkRemove();
	sectionRemove();
	cntBtn.classList.add('active-link');
	contact.classList.add('display-on');
};

homeBtn.addEventListener('click', homeBtnActive);
aboutBtn.addEventListener('click', aboutBtnActive);
portBtn.addEventListener('click', portBtnActive);
cntBtn.addEventListener('click', cntBtnActive);

