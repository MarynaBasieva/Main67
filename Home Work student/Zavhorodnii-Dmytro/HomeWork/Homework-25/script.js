let a = Math.max(50,49,36,39);

let sum = prompt('Введите максимальное число', 50);


if(sum == a) {
    alert('Совершенно верно! Удача на твоей стороне!');
}else if(sum == null) {
    alert('Ты куда это?')
} else if(sum < a) {
    alert('Нет! Это меньше чем надо! С таким подходом мы каши не сварим!');
} else if(sum > a) {
    alert('Воу! Воу! Воу! Полегче! Ты бы еще миллион ввел!')
} else {
    alert('Клавиатура - это не лифт. Не надо было поджигать кнопки с цифрами..')
}