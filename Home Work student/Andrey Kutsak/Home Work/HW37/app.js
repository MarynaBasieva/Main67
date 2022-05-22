$(document).ready(function () {
	$("#dropdown-item").click(() => {
		$(".dropdown-menu").toggle("slow");
	});
	$("#show-menu").click(() => {
		$(".form-wraper").toggleClass("active");
	});
	$("#popup-btn,.close-btn,#popupBg").on("click", (event) => {
		event.stopPropagation();
		let t = event.target.id;
		if (t == "popupBg" || t == "popup-btn" || t == "close") {
			toogleModal(".popup-wraper");
		}
	});
	let toogleModal = (a) => {
		let h = Number($(String(a)).height()),
			chekErr = isNaN(h);
		if (!chekErr) {
			console.log(h);
			if (h === 0) {
				console.log(a);
				$(String(a)).css({ height: "100%", width: "100%" });
			} else {
				$(String(a)).css({ height: "0%", width: "0%" });
			}
		}
	};
});
