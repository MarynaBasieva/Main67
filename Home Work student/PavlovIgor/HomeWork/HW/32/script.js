let position = 0;

function recursionAnimation(){
    document.querySelector('.block').style.left = position +'px';
    position = position +10;
    if (position > 700) return;
    animation();
}

function animation (){
    setTimeout(recursionAnimation, 100);
}

animation();


// =========================================================================
class People {
    constructor(options){
        this.director = options.director;
        this.alternate = options.alternate;
        this.storekeeper = options.storekeeper;
        this.operator = options.operator;
        this.driver = options.driver;
    }
}

const people = new People({
    director: "Prokop Sergeev",
    alternate: "Fedor Rogov",
    storekeeper: "Boris Borisov",
    operator: "Olga Frolova",
    driver: "Alex Voronov"
});

console.log (people);

class NewPeple extends People{
    constructor(options){
        super(options)
        this.inspector = options.inspector;
        this.curator = options.curator;
    }
}

const newPeple = new NewPeple({
    inspector: "Nikita Lukin",
    curator: "Andrey Kutsak",
    director: "Prokop Sergeev",
    alternate: "Fedor Rogov",
    storekeeper: "Boris Borisov",
    operator: "Olga Frolova",
    driver: "Alex Voronov"
});

console.log (newPeple);