let btn = document.querySelectorAll("button"),
	screen = document.querySelector(".screen"),
	num1 = document.querySelector("#num1"),
	num2 = document.querySelector("#num2"),
	res = 0;
btn.forEach(function (k, i) {
	k.addEventListener("click", (e) => {
		let val = e.target.textContent;
		console.log(val);
		if (val == "=") {
			screen.textContent = res;
		} else if (val == "-") {
			res = Number(num1.value) - Number(num2.value);
			console.log(res);
		} else if (val == "/") {
			res = Number(num1.value) / Number(num2.value);
			console.log(res);
		} else if (val == "*") {
			res = Number(num1.value) * Number(num2.value);
			console.log(res);
		} else if (val == "+") {
			res = Number(num1.value) + Number(num2.value);
			console.log(res);
		} else if (val == "%") {
			res = (Number(num2.value) / 100) * Number(num1.value);
			console.log(res);
		}
		console.log(res);
	});
});
