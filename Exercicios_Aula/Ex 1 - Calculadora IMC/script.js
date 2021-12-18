function calculateIBM(){
    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);
    const message = document.querySelector('.message');

    let imc = (weight/(height * height)).toFixed(1);
    if(imc != '' && !isNaN(imc)){
        let rating = ''

        if(imc < 18.5){
            rating = 'abaixo do peso.';
        }else if(imc < 25){
            rating = 'com o peso ideal.';
        }else if(imc < 30){
            rating = 'com obesidade grau I.';
        }
        else if(imc < 35){
            rating = 'com obesidade grau II.';
        }
        else if(imc < 40){
            rating = 'com obesidade grau III.';
        }

        message.textContent = `O seu IMC é ${imc}, você está ${rating}`;
    }else{
        window.alert("Digite um valor válido!");
    }
}


