let color = prompt("Выберете нужный цвет", "");
switch (color) {
    case "серый":
    case "черный":
        alert ("Это слишком темный тон");
        break;
    case "белый":
        alert ("Это слишком светлый тон");
        break;
    case "красный":
        alert ("Это слишком яркий тон");
        break;  
    case "зеленый":
        alert ("Вы угадали цвет");
        break;
    default:
        alert ("Давай попробуем ещё раз");  
}


for (let i = 0; i <= 100; i++) {
    if (i == 5 || i == 55 || i == 68 || i == 99) {
        continue
    } 

    let res = i;
    console.log (res);
}





const fruit = ["pineapple", "papaya", "pamela", "strawberry", "blueberry", "rowan", "apricot", "plum", "banana", "pear"];
for (let i in fruit) {
    console.log(fruit[i]);
    document.write(fruit[i] + "  ");
}
