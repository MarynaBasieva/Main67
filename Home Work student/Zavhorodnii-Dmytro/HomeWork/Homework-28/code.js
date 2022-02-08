
let canvasItem = document.getElementById("something");
let result = canvasItem.getContext("2d");

result.fillStyle = "yellow";
result.fillRect (10, 10, 55, 50);

result.fillStyle = "rgba(0, 0, 200, 0.5)";
result.fillRect (55, 30, 55, 50);


let factory = [
    {name:'Игорь', surname: 'Потапенко', salary: 4000},
    {name:'Марина', surname: 'Петренко', salary: 8000},
    {name:'Олег', surname: 'Попов', salary: 3400},
    {name:'Сергей', surname: 'Прудько', salary: 2900},
    {name:'Татьяна', surname: 'Перекотиполо', salary: 2300},
    {name:'Наталья', surname: 'Петрова', salary: 25000},
    {name:'Ибрагим', surname: 'Пумба', salary: 5510},
    {name:'Ян', surname: 'Нахтигаль', salary: 4510},
    {name:'Боб', surname: 'Келсо', salary: 6510},
    {name:'Гомер', surname: 'Симпсон', salary: 6000}
];

const newPeople = factory
    .filter( person => person.salary > 5000 )
    .map(person => {
    return {
        information: `${person.name} ${person.surname}`,
        salary: person.salary
    }
});
console.log(newPeople);

for (let coworkers of factory) {
    if (coworkers.salary > 5000) {
        document.write(`</br> ${coworkers.name}  ${coworkers.surname}`);
    }
}