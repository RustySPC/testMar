// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import cors from 'cors';
import axios from "axios";



let loadMore = document.querySelector('.loadmore-btn')
// Запрос на посты
if (loadMore) {
	let counter = 0;
	loadMore.addEventListener('click', () => {
		axios({
		method: 'get',
		url: `https://my-json-server.typicode.com/RustySPC/testMar/posts`,
		withCredentials: false,
		}).then(resp => {
			if (counter == 15) {
			loadMore.style.display = 'none'
		}
		console.log(counter);
		const cardWrapper = document.querySelector('.cards__row')
		const maket = document.querySelector('.cards__column').innerHTML;
		for (let index = counter; index < counter + 5; index++) {
			const element = resp.data[index];
			let item = sample(element) 
			cardWrapper.innerHTML = cardWrapper.innerHTML +  item;
		}
	counter = counter + 5;
	});
	})
}
// Шаблон поста
function sample(element) {
	return '<div class="cards__column">' +
		'<div class="cards__image">' +
		'<img src="' + element.image + '" alt="">' +
		'</div>' +
		'<div class="cards__content">' +
		'<div class="cards__name">' +
		'' + element.name + '' +
		'</div>' +
		'<div class="cards__info">' +
		'' + element.info + '' +
		'</div>' +
		'<div class="cards__about">' +
		'' + element.about + '' +
		'</div>' +
		'<div class="cards__data">' +
		'' + element.data + '' +
		'</div>' +
		'<div class="cards__btn btn-black">' +
		'<a href="" class="btn-black__link">Continue reading</a>' +
		'</div>'+
		'</div>' +
	'</div>'
}

// Классы для input
let inputs = document.querySelectorAll('.input')
if (inputs.length > 0) {
	for (let index = 0; index < inputs.length; index++) {
		const element = inputs[index];
		element.addEventListener('focusin', () => {
			element.parentElement.classList.add('_focus')
		})
		element.addEventListener('focusout', () => {
			if (element.value === '') {
				element.parentElement.classList.remove('_focus')
			} 
		})
	}
}

// Валидация телефона
[].forEach.call(document.querySelectorAll('.tel'), function (input) {
		var keyCode;
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___) ___ __ __",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5) this.value = ""
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)

	});