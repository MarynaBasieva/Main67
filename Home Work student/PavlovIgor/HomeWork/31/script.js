// ===one===
function Name (dog, cat, rabbit, fish, parrot) {
    this.dog = dog;
    this.cat = cat;
    this.rabbit = rabbit;
    this.fish = fish;
    this.parrot = parrot
}

let animals = new Name ("Mylo", "Murka", "King", "Dora", "Gosha");

let res = Object.keys(animals);

    for (let i in res) {
        document.write(animals[res[i]], "<br>");
    };

console.log (animals.dog);
console.log (animals.cat);
console.log (animals.rabbit);
console.log (animals.fish);
console.log (animals.parrot);

// ===two===
let makeCall = function (ec, cl,cb) {
    console.log("Звоню");
    setTimeout(ec, 2000),
    setTimeout(cl, 4000),
    setTimeout(cb, 6000);
  };

  let callBack = function () {
    console.log("Мы вам перезваниваем");
  };

  let expectСall = function () {
    console.log("Ожидаю звонок");
  };

  let callLater = function () {
    console.log("Мы вам перезвоним");
  };

  makeCall(expectСall, callLater, callBack);