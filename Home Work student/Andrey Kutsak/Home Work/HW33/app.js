class Flag {
	constructor(selector) {
		this.$element = document.querySelector(String(selector));
	}
}
class Colors extends Flag {
	constructor(optiions) {
		super(selector, options);
		this.$element.style.height + "px";
		this.$element.style.width + "px";
	}
}
let flags = new Colors();

flags.setSize(".box-1");
flags.setSize(".box-2");
