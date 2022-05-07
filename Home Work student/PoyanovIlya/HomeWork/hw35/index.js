let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDEvide = document.getElementById("buttonDEvide");
let buttonProcent = document.getElementById('buttonProcent');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function SetNumber1(){
    return Number(input1.value);
}
function SetNumber2(){
    return Number(input2.value);
}

function OperationNumber(operationCode){
    let result;
    if(operationCode === '+'){
            result = SetNumber1() + SetNumber2();
    }else if(operationCode === '-'){
            result = SetNumber1() - SetNumber2();
    }else if(operationCode === '*'){
            result = SetNumber1() * SetNumber2();
    }else if(operationCode === '/'){
            result = SetNumber1() / SetNumber2();
    }else if(operationCode === '%'){
        result = SetNumber1() / 100 * SetNumber2();
    }else{
        console.log('Немає такого значення');
    }
    document.querySelector('.out-result').value = result;
}

function onButtonPlusClick(){
    
    OperationNumber('+');
}

function onButtonMinusClick(){
    
    OperationNumber('-');
}

function onButtonMultiplyClick(){
    
    OperationNumber('*');
}

function onButtonDEvideClick(){
    
    OperationNumber('/');
}
function onButtonProcentClick(){
    
    OperationNumber('%');
}

buttonPlus.addEventListener("click",onButtonPlusClick);
buttonMinus.addEventListener("click",onButtonMinusClick);
buttonMultiply.addEventListener("click",onButtonMultiplyClick);
buttonDEvide.addEventListener("click",onButtonDEvideClick);
buttonProcent.addEventListener("click",onButtonProcentClick);