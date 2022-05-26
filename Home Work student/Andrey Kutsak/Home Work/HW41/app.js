let wordReg = /Україна/;
let word = "Українi";
let inp = document.querySelector("input");
let text = document.getElementsByTagName("p");
inp.addEventListener("keyup", (e) => {
	if (e.target.value != "") {
		repl(e.target.value, text, e.target.value);
	}
});
document.addEventListener("click", (e) => {
	if (e.target.id == "change") {
		if (inp.value != "") {
			repl(inp.value, text, e.target.dataset.str);
			inp.value = e.target.dataset.str;
		}
	}
	if (e.target.id == "nums") {
		repl("[0-9]{4}", text);
	}
});
function repl(reg, el, srch) {
	for (let i = 0; i < el.length; i++) {
		let str = el[i].textContent;
		let regExp = new RegExp(reg, "gim");
		let newStr = str.replace(regExp, function (match) {
			if (srch) {
				return String("<mark>" + srch + "</mark>");
			} else {
				return String("<mark>" + match + "</mark>");
			}
		});
		el[i].innerHTML = newStr;
	}
}
