let generateHTML = (a, b, c) => {
	let wrap = document.createElement("div");
	wrap.className = "wraper";
	let avtorName = document.createElement("p");
	avtorName.textContent = a;
	let bookName = document.createElement("p");
	bookName.textContent = b;
	let citi = document.createElement("p");
	citi.textContent = c;
	wrap.appendChild(avtorName);
	wrap.appendChild(bookName);
	wrap.appendChild(citi);
	document.body.appendChild(wrap);
};
let xhr = new XMLHttpRequest();
xhr.open("GET", "data.json", false);
xhr.send();
console.log(xhr);
if (xhr.status == "200") {
	let data = JSON.parse(xhr.response);

	for (const i in data) {
		data[i].forEach((k) => {
			generateHTML(k.Avtor, k.BookName, k.Citizen);
		});
	}
} else {
	console.log(xhr.status);
}
