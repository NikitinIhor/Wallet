// подключение
/*  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>  */

/*  <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>   */

// SCSS SLIDER !!!!!!!!!!!!!!



new Swiper('.имя блока__slider', {
	// direction: 'vertical',
    // loop: true,
	simulateTouch: true,

	navigation: {
		// <div class="swiper-button-prev"></div>
        // <div class="swiper-button-next"></div>

		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next'
	},

	pagination: {
		// <div class="swiper-pagination"></div>

		// точки
		// type: 'bullets',
		
		// цифры
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '0<span class="' + currentClass + '"></span>'+
			'/' +
			'<span class="' + totalClass + '"></span>';
		},
		
		el:'.swiper-pagination',

        // булеты(можно кликать)
		clickable: true,
		dynamicBullets: true,
	},

	scrollbar: {
		el: '.swiper-scrollbar',

		draggable: true
	},

	// кол-во слайдов
	slidesPerView: 1.1,
	// отступы
	spaceBetween: 0,

	// breakpoints: {
	// 	320: {
	// 		slidesPerView:1,
	// 	},
	// 	480: {
	// 		slidesPerView:2,
	// 	},
	// 	767.98: {
	// 		slidesPerView:3,
	// 	},
	// 	970: {
	// 		slidesPerView:3,
	// 	}
	// },

});