const lampImage = document.querySelector("#lamp-image");

let statusLamp = false;

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(turnOnOff, 5000);
  });

function turnOnOff(){
    statusLamp = !statusLamp;
    if(statusLamp == true){
        lampImage.setAttribute("src","images/luz-acesa.png");
    }else{
        lampImage.setAttribute("src","images/luz-apagada.png");
    }
}


