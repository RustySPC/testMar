/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {EffectFade, Pagination, Autoplay} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	const sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}


// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.swiper')) {
		new Swiper('.swiper', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [EffectFade,Pagination,Autoplay],
			
			effect: 'fade',
			autoplay: {
				delay: 5000,
			},
			
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			simulateTouch: true,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.home__pagination',
				clickable: true,
				renderBullet: function (index, className) {
					const array = document.querySelector('.home__pagination').dataset.pagg.split(',')
					return array[index] !== undefined ?
						`<li class="${className} pagination__item">${array[index]}</li>` : ''
				},
			},
			// Arrows
			navigation: {
				nextEl: '.about__more .more__item_next',
				prevEl: '.about__more .more__item_prev',
			},

		});

	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)


window.addEventListener("load", function () {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)

});