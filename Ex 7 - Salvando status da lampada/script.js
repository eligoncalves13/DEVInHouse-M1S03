const lampImage = document.querySelector("#lamp-image");

let statusLamp = false;

function turnOnOff(){
    statusLamp = !statusLamp;
    if(statusLamp == true){
        lampImage.setAttribute("src","images/luz-acesa.png");
    }else{
        lampImage.setAttribute("src","images/luz-apagada.png");
    }

    saveStatus()
}

function saveStatus(){
    let statusLocalSotarage = localStorage.getItem("status");
    statusLocalSotarage = statusLocalSotarage == "true";

    localStorage.setItem("status", statusLamp);
}

