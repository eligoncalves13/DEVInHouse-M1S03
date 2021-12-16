const display = document.querySelector('.display');

function calculate(type, digit){
    if(type === 'operator'){
        if(digit === 'clear'){
            display.value = '';
        }
        if(digit === '+' || digit === '-' || digit === '/' || digit === '*' || digit === '.'){
            display.value += digit;
        }
        if(digit === '='){
            display.value = eval(display.value);

        }
    }else if(type === 'value'){
        display.value += digit;
    }
}