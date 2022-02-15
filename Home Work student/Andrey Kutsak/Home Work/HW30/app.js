// HW30
// 1) Создать объект obj
//  - name
// -last name
// -age
// Sullary{
//    - зарплата
//    - рабочий дни
//    отпускные{
//      - деньги
//      - сколько дней отпускных
// }

// }

// Через цикл for in получить все свойства всего объекта и вывести через class="Result"

// Дублировать этот объект к другой переменной и поменять все значения и вывести в class="ResultFinish"

// 2) Создать массив со всеми значениями как в объекте создать 5 рабочих с такими значениями
// И вывести отпускные рабочих в class="ResultFinishArr"
// 1

let innerResult = document.getElementsByClassName("result")[0];
let innerResult2 = document.getElementsByClassName("ResultFinish")[0];
innerResult2.style.background = "yellow";

let userJob = {
	name: "Andrey",
	LstName: "Kutsak",
	age: 24,
	Sallary: {
		salary: 10000,
		workDays: 1,
		vocation: {
			vocSalary: 12000,
			vocationLength: 25,
		},
	},
};
let createEl = function (el, data) {
	let element = document.createElement(String(el));
	element.innerText = String(data);
	return element;
};
function showObj(obj, par) {
	for (let i in obj) {
		if (typeof obj[i] !== "object") {
			par.appendChild(createEl("p", i + ": " + obj[i]));
		} else {
			for (let a in obj[i]) {
				if (typeof obj[i][a] !== "object") {
					par.appendChild(createEl("p", a + ": " + obj[i][a]));
				} else {
					for (const b in obj[i][a]) {
						par.appendChild(createEl("p", b + ": " + obj[i][a][b]));
					}
				}
			}
		}
	}
}
showObj(userJob, innerResult);
// 2
let userJob2 = Object.assign({}, userJob);
userJob2.name = "Artem";
userJob2.LstName = "Kutsak";
userJob2.age = 20;
userJob2.Sallary.salary = 2000;
userJob2.Sallary.workDays = 12;
userJob2.Sallary.vocation.vocSalary = 20000;
userJob2.Sallary.vocation.vocationLength = 24;
showObj(userJob2, innerResult2);

// 3
let arr = [
	{
		name: "Andrey",
		LstName: "Kutsak",
		age: 24,
		Sallary: {
			salary: 10000,
			workDays: 1,
			vocation: {
				vocSalary: 12000,
				vocationLength: 25,
			},
		},
	},
	{
		name: "Artem",
		LstName: "Kutsak",
		age: 24,
		Sallary: {
			salary: 10000,
			workDays: 1,
			vocation: {
				vocSalary: 12000,
				vocationLength: 25,
			},
		},
	},
	{
		name: "Ivan",
		LstName: "Kutsak",
		age: 24,
		Sallary: {
			salary: 10000,
			workDays: 1,
			vocation: {
				vocSalary: 12000,
				vocationLength: 25,
			},
		},
	},
	{
		name: "Vasiliy",
		LstName: "Kutsak",
		age: 24,
		Sallary: {
			salary: 10000,
			workDays: 1,
			vocation: {
				vocSalary: 12000,
				vocationLength: 25,
			},
		},
	},
	{
		name: "Ruslan",
		LstName: "Kutsak",
		age: 24,
		Sallary: {
			salary: 10000,
			workDays: 1,
			vocation: {
				vocSalary: 12000,
				vocationLength: 25,
			},
		},
	},
];
console.log(arr);
