let a = Math.max (50, 49, 36, 39);

let sum = prompt ('Введите верное число');

if (sum > a){
    alert ('Похоже это перебор...');
}else if (sum < a){
    alert ('А вот тут то ты и недобрал');
}else if (sum == a){
    alert('Ну наконец то');
    alert('Сколько можно ждать!');
    alert('ПОЗДРАВЛЯЮ!!!');
}else{
    alert('Да брат, это Матрица!');
}