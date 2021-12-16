const message = document.querySelector("#message");

function calculate(){
    const amount = parseFloat(document.querySelector("#amount").value);
    const discount = parseFloat(document.querySelector("#discount").value);
    
    if(amount != '' && !isNaN(amount)){
        if(discount != '' && !isNaN(discount)){
            const discountAmount = (amount * (discount/100));
            console.log(discountAmount);
            const fullAmount = amount - discountAmount;
            console.log(fullAmount);

            message.innerHTML = `Valor Total: ${amount} <br> Valor do Desconto: ${discountAmount} <br> Valor Total com Desconto: ${fullAmount}`;
        }else{
            window.alert("Digite um valor válido!");
            message.textContent = '';
    }  
    }else{
        window.alert("Digite um valor válido!");
        message.textContent = '';
        }
    document.querySelector('#amount').value = '';
    document.querySelector('#discount').value = '';
}

