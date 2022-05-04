let parameters = `toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=200,height=200`,
	win;
document.addEventListener("click", (e) => {
	if (e.target.id == "btn") {
		if (e.target.classList.contains("open")) {
			e.target.classList.toggle("open");
			e.target.textContent = "Закрити вікно";
			win = window.open("about:page", "new_win", parameters);
			win.document.write(
				`<h1>hello i am new window</h1> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png" alt="test" />`
			);
			let el = win.opener.document.querySelector("#text");
			el.textContent = "hello i am parent of the new window";
		} else if (!e.target.classList.contains("open")) {
			e.target.classList.toggle("open");
			e.target.textContent = "Відкрити вікно";
			if (win !== null) {
				win.close();
			}
		}
	} else if (e.target.id == "moveBtn") {
		win.moveTo(200, 200);
	}
});
