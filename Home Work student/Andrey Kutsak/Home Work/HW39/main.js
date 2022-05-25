let response;
let el = document.querySelector(".posts");

let xhr = new XMLHttpRequest();
xhr.open("GET", "photo.json", false);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

if (xhr.status == 200) {
	response = JSON.parse(xhr.response);
	makeMarkUp();
} else {
	alert(`Сталася помилка ${xhr.statusText}`);
}
function makeMarkUp() {
	response.forEach((element) => {
		el.innerHTML += `<div class="col-12 col-md-4 block">
		<img src="${element.url}" alt="${element.title}">
		<h2 class="title">${element.title}</h2>
		<p class="desc">${element.desc}</p>
		<a href="${element.link}" class="link">${element.linkDesc}</a>
	</div>`;
	});
}
