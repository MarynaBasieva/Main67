const works = [
    {name:'Игорь', surname:'Павлов', salary: 40000},
    {name:'Олег', surname:'Майами', salary: 1000},
    {name:'Андрей', surname:'Макаревич', salary: 3400},
    {name:'Татьяна', surname:'Фролова', salary: 8000},
    {name:'Даша', surname:'Ши', salary: 11300},
    {name:'Наталья', surname:'Подольская', salary: 2000},
    {name:'Василий', surname:'Андреев', salary: 9100},
    {name:'Алексей', surname:'Дурнев', salary: 151900},
    {name:'Илья', surname:'Макаров', salary: 142000},
    {name:'Тамби', surname:'Масаев', salary: 77100}
    ];

    let result2 = document.querySelector ('.works')

    for (let i of works) {
        if (i.salary > 5000) {
            result2.innerHTML += (i.name + " " + i.surname + " " + "Зарплата" +  " " + i.salary + " " + '<br>');
        };
    };

    let canvasNew = document.querySelector ('.canvas');
    let result = canvasNew.getContext("2d");

    result.beginPath();
    result.rect (0, 0, 3,100);
    result.fillStyle = ("yellow");
    result.fill();

    result.beginPath();
    result.rect (0, 0, 100,3);
    result.fillStyle = ("yellow");
    result.fill();

    result.beginPath();
    result.rect (100, 0, 3,100);
    result.fillStyle = ("yellow");
    result.fill();

    result.beginPath();
    result.rect (0, 100, 100,3);
    result.fillStyle = ("yellow");
    result.fill();

    result.beginPath();
    result.moveTo(75,40);
    result.bezierCurveTo(75,37,70,25,50,25);
    result.bezierCurveTo(20,25,20,62.5,20,62.5);
    result.bezierCurveTo(20,80,40,102,75,120);
    result.bezierCurveTo(110,102,130,80,130,62.5);
    result.bezierCurveTo(130,62.5,130,25,100,25);
    result.bezierCurveTo(85,25,75,37,75,40);
    result.fillStyle = ("red");
    result.fill();
