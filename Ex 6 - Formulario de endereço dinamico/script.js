const formAddress = document.querySelector("#form-address");

let count = 1;
function addAddress(){
    count++
    
    const newLabelAddress = document.createElement('label');
    newLabelAddress.innerText = "Endereço Completo "+count;
    newLabelAddress.setAttribute("for","address");
    formAddress.appendChild(newLabelAddress);

    const newInputAddress = document.createElement('input');
    newInputAddress.setAttribute("type","text");
    newInputAddress.id = "address"+count;

    formAddress.appendChild(newInputAddress);
}