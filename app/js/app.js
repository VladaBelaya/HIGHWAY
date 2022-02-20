
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
const navItem = document.querySelectorAll('.nav__item')

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

navItem.forEach(item => {
	item.addEventListener('mouseenter', () => {
		if (!sidebar.classList.contains('sidebar_active')) return null
		
		const tooltip = item.querySelector('.nav__tooltip')
		tooltip.classList.add('nav__tooltip-active')
		
		if (tooltip.classList.contains('nav__tooltip-active')) {
			item.addEventListener('mouseleave', () => {
				tooltip.classList.remove('nav__tooltip-active')
			})
		}
	})
})




//select

const select = document.querySelector('.search__select')
const selectBtn = document.querySelector('.search__select-btn')
const selectDropdown = document.querySelector('.search__dropdown-list')

selectBtn.addEventListener('click', selectToggle)
selectDropdown.addEventListener('click', selectChoose)

function selectToggle() {
	selectDropdown.classList.toggle('search__dropdown-list-active')
}

function selectChoose(event) {
	if (event.target && event.target.classList.contains('search__dropdown-item')) {
		selectBtn.textContent = event.target.textContent
	}
	selectDropdown.classList.remove('search__dropdown-list-active')
}

document.addEventListener('click', event => {
	if (!select.contains(event.target)) selectDropdown.classList.remove('search__dropdown-list-active')
})


//stickyTableObserver

const stickyHeader = document.querySelector('.sticky')
stickyTableObserver()

function stickyTableObserver() {
	window.addEventListener('scroll', () => {
		const elementPositionY = stickyHeader.getBoundingClientRect().y
		elementPositionY <= 70
			? stickyHeader.classList.add('sticky-isActive')
			: stickyHeader.classList.remove('sticky-isActive')
	})
}


