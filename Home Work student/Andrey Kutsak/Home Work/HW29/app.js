let user = {};
user.name = "Andrey";
user.age = 30;
console.log(user);
user.name = "Алёна";
console.log(user);
delete user.name;
console.log(user);
let user2 = {
	name: "Vika",
	age: 90,
	data: {
		eyeColor: "blue",
		hairColor: "yellow",
		speack: "ukraininan",
	},
	showInfo: function () {
		return "name " + this.name + " age " + this.age + " has eye color " + this.data.eyecolor + " has harir color " + this.data.hairColor + " and speack in " + this.data.speack;
	},
};

document.write(user2.showInfo());
