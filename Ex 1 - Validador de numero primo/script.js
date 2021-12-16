const message = document.querySelector('.message');

function primeValidator() {
    const number = parseInt(document.querySelector('#number').value);
    let dividers = 0;

    if(number != '' && !isNaN(number)){
        for (let i = 1; i <= number; i++){
            if(number % i === 0){
                dividers++;
            }
        }
        if(dividers === 2){
            message.textContent = `O número ${number} é primo.`;
        } else{
            message.textContent = `O número ${number} não é primo.`;  
        }
    }else{
        window.alert("Digite um valor válido!"); 
        message.textContent = '';
    }
    document.querySelector('#number').value = '';
    
}
