// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import cors from 'cors';
import axios from "axios";


// const API_SEVRIVE_URL = 'https://my-json-server.typicode.com/RustySPC/testMar'

let loadMore = document.querySelector('.loadmore-btn')
if (loadMore) {
	let counter = 0;
	

	loadMore.addEventListener('click', () => {

		axios({
		method: 'get',
		url: `https://my-json-server.typicode.com/RustySPC/testMar/posts`,
		withCredentials: false,
		//  params: {
		//    access_token: SECRET_TOKEN,
		//  },
		}).then(resp => {
			if (counter >= 20) {
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
