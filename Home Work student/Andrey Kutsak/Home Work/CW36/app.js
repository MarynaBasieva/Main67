let imgSrc = "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
	desc = document.querySelector("#hideDesc");
// change image
document.addEventListener("mouseover", (e) => {
	let el = e.target;
	if (el.classList.contains("img")) {
		el.setAttribute("src", imgSrc);
	}
});
// hide text
document.addEventListener("click", (e) => {
	let el = e.target;
	if (el.id == "hide-text") {
		desc.classList.toggle("hide");
	}
});
