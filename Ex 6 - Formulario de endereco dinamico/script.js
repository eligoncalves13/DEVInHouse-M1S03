const formAddress = document.querySelector("#form_address");

let count = 1;
function addAddress(){
    count++;

    const newAddress = document.createElement('input');
    newAddress.setAttribute("type","text");
    newAddress.setAttribute("placeholder", "Endereço Completo " +count);
    newAddress.id = "address" +count;

    formAddress.appendChild(newAddress);
}