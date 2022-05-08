document.addEventListener("click", (e) => {
	let el = e.target;
	if (el.classList.contains("img")) {
		el.parentNode.querySelector("p").textContent = el.getAttribute("alt");
	}
});
