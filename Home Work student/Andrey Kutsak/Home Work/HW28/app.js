const people = [
  { name: "Игорь", surname: "surname1", age: 14, salary: 400000 },
  { name: "Марина", surname: "surname2", age: 30, salary: 800000 },
  { name: "Андрей", surname: "surname3", age: 44, salary: 3400 },
  { name: "Олег", surname: "surname4", age: 16, salary: 1000 },
  { name: "Даша", surname: "surname5", age: 15, salary: 2300 },
  { name: "Таня", surname: "surname6", age: 28, salary: 25000 },
  { name: "Іван", surname: "surname7", age: 22, salary: 25000 },
];

let users = people.filter(function (a) {
  if (a.name === "Олег" || a.name === "Таня") {
    return a;
  }
});
console.log(users);

let sum = people.reduce(function (a, b) {
  return a + b.salary;
}, 0);
console.log(sum);
let usersData = people.map(function (a, b) {
  return "name " + a.name + " surname " + a.surname;
});
console.log(usersData);
