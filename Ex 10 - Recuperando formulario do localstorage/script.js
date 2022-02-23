let arrayList = [];

document.addEventListener('DOMContentLoaded', getLocalStorage);

function getLocalStorage(){
    const storageList = localStorage.getItem('tableData');
    if(storageList === null){
        arrayList = [];                                     
       }else{
        arrayList = JSON.parse(storageList); 
        for (i in arrayList) {
            createTable(arrayList[i]);
          }                  
       }
    }

function setLocalStorage(){                                  
    localStorage.setItem('tableData', JSON.stringify(arrayList));   
}

function saveForm(){
    const form = new Object();
    form.name = document.querySelector('#name').value;
    form.lastName = document.querySelector('#last_name').value;
    form.email = document.querySelector('#email').value;
    form.phoneNumber = document.querySelector('#phone_number').value;
    form.address = document.querySelector('#address').value;
    if(form.name != "" && form.lastName != "" && form.email != "" && form.phoneNumber != "" && form.address != ""){
        arrayList.push(form);
        setLocalStorage();
        createTable(form);
    } else {
        alert("Informe todos os dados!");
    }
}

function createTable(arrayList){
    const tbody = document.querySelector('#tbody');
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.innerHTML = arrayList.name;
    tr.appendChild(tdName);

    const tdLastName = document.createElement('td');
    tdLastName.innerHTML = arrayList.lastName;
    tr.appendChild(tdLastName);

    const tdEmail = document.createElement('td');
    tdEmail.innerHTML = arrayList.email;
    tr.appendChild(tdEmail);

    const tdPhone = document.createElement('td');
    tdPhone.innerHTML = arrayList.phoneNumber;
    tr.appendChild(tdPhone);

    const tdAddress = document.createElement('td');
    tdAddress.innerHTML = arrayList.address;
    tr.appendChild(tdAddress);

    tbody.appendChild(tr);
}