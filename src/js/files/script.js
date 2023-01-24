// Подключение списка активных модулей
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
		const cardWrapper = document.querySelector('.cards__row')
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
	return '<div class="cards__article">' +
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
		'<div class="cards__btn btn btn-black">' +
		'<a href="" class="btnBlack__link">Continue reading</a>' +
		'</div>'+
		'</div>' +
	'</div>'
}


