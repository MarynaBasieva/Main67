let form = document.getElementById("form");
let erreDesc = document.querySelector(".err");
let xhr = new XMLHttpRequest();
form.addEventListener("submit", (e) => {
	e.preventDefault();
	let child = form.querySelectorAll("input");
	let url = e.target.action;
	let method = e.target.method;
	let data = "?";

	for (let i = 0; i < child.length; i++) {
		if (child[i].name) {
			data += `${child[i].name}=${child[i].value}&`;
		}
	}

	xhr.open(method, url + data, false);
	xhr.send();
	getResponse(xhr);
});
function getResponse(a) {
	if (a.responseText != "Заходьте будь ласка") {
		erreDesc.textContent = xhr.responseText;
		form.classList.add("err");
	} else {
		form.classList.add("suc");
	}
}
