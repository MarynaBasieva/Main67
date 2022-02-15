let res = document.getElementsByClassName("result");
let = [];
let userJob = {
	name: "Andrey",
	lastName: "Kutsak",
	age: 24,
	Salarry: {
		salary: 5000,
		workDays: 15,
		vocation: {
			vocationDays: 24,
			vocationSalary: 35000,
		},
	},
};
for (const i in userJob) {
	if (typeof userJob[i] != "object") {
		let p = document.createElement("p");
		p.innerText = i + " " + userJob[i];
		res[0].appendChild(p);
		console.log(typeof userJob[i]);
	}
}
