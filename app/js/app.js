const	swiper = new Swiper(".swiper", {
		slidesPerView: 6,
		spaceBetween: 30,
		centeredSlides: false,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	},
	});

