let btn = document.querySelectorAll(".btn"),
	screen = document.querySelector(".screen"),
	exp = "",
	num,res;
btn.forEach(function (k, i) {
	
	k.addEventListener("click", (e) => {
		let val = e.target.textContent;
		exp += val;
		if (Number(val) !== NaN) {
            Number(val)+=num
		} else if (val === "-") {
		} else if (val === "/") {
		} else if (val === "*") {
		}
        console.log(num)
		screen.textContent = exp;
	});
});
