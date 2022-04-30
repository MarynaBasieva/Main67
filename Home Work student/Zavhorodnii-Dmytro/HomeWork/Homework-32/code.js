let offset = 0;

function move() {
    document.querySelector('.blue').style.left = offset + 'px';
    offset = offset + 90;
    if (offset > 100) {
        return offset;
    } else if (offset < 100) {
        document.querySelector('.blue').style.top = offset + 'px';
    } else if (offset < 100) {
        document.querySelector('.blue').style.right = offset + 'px';
    }

    setTimeout(move, 300);
}

document.querySelector('.button').onclick = move;






// Функции класса создать пять опций , после создать еще один класс и наследовать первый, во втором вывести вызове все
// значения. Во втором добавить пару новых опции с наследования и тоже вывести


class SuperHero {
    constructor(options) {
        this.name = options.name;
        this.superPower = options.superPower;
        this.age = options.age;
        this.kills = options.kills;
        this.immortal = options.immortal;
    }
}

const superHero = new SuperHero({
    name: "SpiderMan",
    superPower: "chuyka",
    age: 19,
    kills: 0,
    immortal: false,
});

console.log(superHero);

class BadHero extends SuperHero {
    constructor(options) {
        super(options)
        this.suit = options.suit;
        this.saveLife = options.saveLife;
    }
}

const badHero = new BadHero({
    name: "Shakal",
    superPower: "foot",
    age: 110,
    kills: 35,
    immortal: true,
    suit: "skin",
    saveLife: 0,
})

console.log(badHero);