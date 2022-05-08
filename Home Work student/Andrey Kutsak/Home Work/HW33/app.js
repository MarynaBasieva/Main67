let date = new Date();
//seting date
date.setFullYear(2020), date.setMonth(11), date.setDate(12);
document.write(`the year ${date.getFullYear()} the month ${date.getMonth()} the date${date.getDate()}`);
let userDate = prompt("Введіть поточний рік");
let curentYear = date.getFullYear();
// check is Empty and corect data
if (userDate == "" || isNaN(Number(userDate))) {
	alert("Ви ввели не коректну дату або залишили її пустою");
} else {
	// checking is it curent Year
	if (Number(userDate) > curentYear) {
		alert("Ще не настав цей рік");
	} else if (Number(userDate) < curentYear) {
		alert("Вже пройшов");
	} else if (Number(userDate) === curentYear) {
		alert("Ви ввели поточний рік");
	}
}
