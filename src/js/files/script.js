// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import cors from 'cors';
import axios from "axios";


// const API_SEVRIVE_URL = 'https://my-json-server.typicode.com/RustySPC/testMar'

let loadMore = document.querySelector('.loadmore-btn')
if (loadMore) {
	loadMore.addEventListener('click', () => {
		axios({
		method: 'get',
		url: `https://my-json-server.typicode.com/RustySPC/testMar/posts`,
		withCredentials: false,
		//  params: {
		//    access_token: SECRET_TOKEN,
		//  },
	}).then(resp => {
		
		console.log(resp.data);
		const cardWrapper = document.querySelector('.cards__row')
		const maket = document.querySelector('.cards__column').innerHTML
		for (let index = 0; index < resp.data.length; index++) {
			const element = resp.data[index];
			let item = asd(element) 
			cardWrapper.innerHTML = cardWrapper.innerHTML +  item;
			// let column = document.createElement('div');
			// column.classList.add('cards__column');
			// column.innerHTML = maket;
			
			// let image = maket.indexOf('src="img/card.png"');
			// maket[image] =
			// console.log(image);
			// cardWrapper.appendChild(column);
		}
	});
	})
	
}
function asd(element) {
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

			// const sample = `<div class="cards__column">
			// 					<div class="cards__image">
			// 						<img src="`+ element.img +`" alt="">
			// 					</div>
			// 					<div class="cards__content">
			// 						<div class="cards__name">
			// 							`+ element.name + `
			// 						</div>
			// 						<div class="cards__info">
			// 							`+ element.info + `
			// 						</div>
			// 						<div class="cards__about">
			// 							`+ element.about + `
			// 						</div>
			// 						<div class="cards__data">
			// 							`+ element.data + `
			// 						</div>
			// 						<div class="cards__btn btn-black">
			// 							<a href="" class="btn-black__link">Continue reading</a>
			// 						</div>
			// 					</div>

			// 				</div>`;