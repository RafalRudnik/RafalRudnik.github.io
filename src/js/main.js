gsap.registerPlugin(ScrollTrigger); //scrollSmother tez dobrze dodac ale trzeba go dodac recznie

const loadingAnim = document.querySelector('.loading-page');
const navBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const navMobileItems = document.querySelectorAll('.nav__link-m');
const headerItem = document.querySelector('.header__main-txt');
const work = document.querySelector('.work');
const contact = document.querySelector('.contact');
const aboutImg = document.querySelector('.about__left');

gsap.fromTo(
	work.children,
	{ y: '+=100', opacity: 0 },
	{
		y: 0,
		opacity: 1,
		stagger: 0.2,
		duration: 3,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: work,
			start: 'top 40%',
			// end: 'bottom', //gdzie ma sie skonczyc
			// scrub: true, //scroll dziala w obie strony
			// markers: true,
		},
	}
);

//stagger to jest opoznienie kazdego kolejnego elementu

gsap.fromTo(
	contact.children,
	{ y: '+=100', opacity: 0 },
	{
		y: 0,
		opacity: 1,
		stagger: 0.4,
		duration: 2,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: contact,
			start: 'top 20%',
			// end: 'bottom', //gdzie ma sie skonczyc
			// scrub: true, //scroll dziala w obie strony
			// markers: true,
		},
	}
);

gsap.fromTo(
	aboutImg,
	{ x: '-=200', opacity: .9 },
	{
		x: 0,
		opacity: 1,
		stagger: 0.2,
		duration: 2,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: aboutImg,
			start: 'top 50%',
			// end: 'bottom', //gdzie ma sie skonczyc
			scrub: true, //scroll dziala w obie strony
			// markers: true,
		},
	}
);

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile-active');
	handleNavItemAnimation();
};

const navBtnAnimation = () => {
	navBtn.classList.add('jello-horizontal');
	setTimeout(() => {
		navBtn.classList.remove('jello-horizontal');
	}, 1000);
};

const handleNavItemAnimation = () => {
	let delayTime = 1;
	navMobileItems.forEach((navItem) => {
		navItem.classList.toggle('nav-item-animation');
		navItem.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
		//animationDelay bo w js nie ma '-'jak css animation-delay
	});
};

const handleShowBurger = () => {
	if (window.scrollY >= 80) {
		navBtn.style.opacity = '1';
		navBtn.style.display = 'block';
	} else {
		navBtn.style.opacity = '0';
		navBtn.style.display = 'none';
	}
};

const handleHeaderAnim = () => {
	if (window.scrollY >= 300) {
		headerItem.classList.add('header__main-txt-anim');
		headerItem.classList.remove('header__main-txt-mainAnim');
	} else if (window.scrollY <= 390) {
		headerItem.classList.remove('header__main-txt-anim');
		headerItem.classList.add('header__main-txt-mainAnim');
	}
};

navBtn.addEventListener('click', handleNav);
navBtn.addEventListener('mouseenter', navBtnAnimation);
navMobileItems.forEach((item) => item.addEventListener('click', handleNav));
window.addEventListener('scroll', handleShowBurger);
window.addEventListener('scroll', handleHeaderAnim);
window.addEventListener('scroll', handleObserver);
