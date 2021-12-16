const message = document.querySelector('.message');

function numberValidator(){
    const number = parseInt(document.querySelector('#number').value);

    if(number != '' && !isNaN(number)){
        if(number % 2 == 0){
            message.textContent = `O número ${number} é par.`;
        }else{
            message.textContent = `O número ${number} é ímpar.`;
        }
    }else{
        window.alert("Digite um valor válido!");
        message.textContent = '';
    }
    document.querySelector('#number').value = '';
}