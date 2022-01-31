let color = prompt('choose a color', '');

switch(color) {
    case 'red':
    case 'blue':
        alert('wrong twice');
        break;
    case 'green':
        alert('correct');
        break;
    case 'black':
        alert('wrong');
        break;
    case 'gray':
        alert('Sasha');
        break;
        default:
            alert('absolutely not');
}


for(let i = 0; i <= 100; i++) {
    if(i === 5 || i === 55 || i === 68 || i === 99) continue;
    console.log(i)
}

let arr = ["orange","apple","fig","lime","lemon","melon","watermelon","pineapple","avocado","banana"];

for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + " ");
}