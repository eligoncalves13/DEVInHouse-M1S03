const lampImage = document.querySelector("#lamp_image");

let statusLamp = false;

function turnOnOff(){
    statusLamp = !statusLamp;
    if(statusLamp == true){
        lampImage.setAttribute("src","images/luz-acesa.png");
    } else {
        lampImage.setAttribute("src","images/luz-apagada.png");
    }
}
