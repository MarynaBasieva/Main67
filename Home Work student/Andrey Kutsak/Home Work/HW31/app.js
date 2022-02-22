// 1
let element = document.getElementsByClassName("data")[0];
let User = function (a, b, c, d, e) {
	this.name = a;
	this.lastName = b;
	this.age = c;
	this.bornDate = d;
	this.password = e;
	this.printData = function (g) {
		let patern = `hello my name ${this.name} and my lastName ${this.lastName} and my age ${this.age} I was born ${this.bornDate} i set passworn like ${this.password}`;
		this.el = g;
		this.el.innerText = patern;
	};
};
let a = new User("andrey", "kutsak", "24", "13.25.2323", "123456");
a.printData(element);
// 2
function calling() {
	console.log("ми вам телефонуємо");
}
function callCenter(c) {
	setTimeout(function () {
		c(calling);
	}, 1000);
	console.log("ми вам  перетелефонуємо");
}
function delay(b) {
	console.log("очікуємо");
	setTimeout(function () {
		b(calling);
	}, 1000);
}
function call(a) {
	setTimeout(function () {
		a(callCenter);
	}, 1000);
	console.log("звоним");
}
call(delay);
