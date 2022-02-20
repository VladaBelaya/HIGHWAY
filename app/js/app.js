
//swiper

const	swiper = new Swiper(".swiper", {
		slidesPerView: 5,
		spaceBetween: 30,
		centeredSlides: false,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	})

//sidebar

const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')
const navLink = document.querySelectorAll('.nav__link')
const sidebarLogo = document.querySelector('.sidebar__logo')
const sidebarLogOutLink = document.querySelector('.sidebar__logOut-link')
const headerMenu = document.querySelector('.header__menu')
const sidebarBtn = document.querySelector('.sidebar .btn')
const navList = document.querySelector('.nav__list')

headerMenu.addEventListener('click', () => {
	toggleActiveClass (sidebar, 'sidebar_active')
	toggleActiveClass (navList, 'nav__list_active')
	toggleActiveClass (main, 'main_active')
	toggleClassNone('none')
})

function toggleActiveClass (element, activeClass) {
	element.classList.toggle(activeClass)
}

function toggleClassNone(className) {
	navLink.forEach(link => {
		link.classList.toggle(className)
	})
	sidebarLogo.classList.toggle(className)
	sidebarLogOutLink.classList.toggle(className)
	sidebarBtn.classList.toggle(className)
}

//select

const selectBtn = document.querySelector('.search__select-btn')
const selectDropdown = document.querySelector('.search__dropdown-list')


