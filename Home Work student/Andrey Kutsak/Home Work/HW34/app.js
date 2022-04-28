let w;
function windowOpen() {
	w = window.open("about:blank", "newWin", "height=400,width=700 top=600,left=700");
	w.alert("hello");
}
document.addEventListener("click", (e) => {
	if (e.target.id === "closeBtn") {
		w.close();
	} else if (e.target.id === "btn") {
		windowOpen();
	}
});
