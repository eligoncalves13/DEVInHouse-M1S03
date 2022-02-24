let arrayList = [];

const btn_save = document.querySelector('#btn_save');

document.addEventListener('DOMContentLoaded', () => {
    for(i in arrayList) {
        createTable(arrayList[i]);
      }
});

btn_save.addEventListener('click', saveForm);

function setLocalStorage(arrayList){
    localStorage.setItem('tableAddress', JSON.stringify(arrayList));
}
  
function getLocalStorage(){
    let storageList = localStorage.getItem('tableAddress');
        storageList = JSON.parse(storageList); 
       return storageList;
}

let localStorageList = getLocalStorage();

if(localStorageList.length > 0) {
    arrayList = localStorageList;
}

function saveForm() { 
    let totalRegister = arrayList.length; 

    const formRegister = new Object
    formRegister.name = document.querySelector('#name').value;
    formRegister.address = document.querySelector('#address').value;
    formRegister.typeAddress = document.querySelector('#type_address').value;
    formRegister.id = totalRegister;
    formRegister.actions = `<i class='fas fa-trash' id='total_register_${totalRegister}' onclick="deleteItem(${totalRegister})"> </i>`;
    

    if (formRegister.typeAddress === 'Residencial') {
        const icon = '<i class="fas fa-home"></i> ';
        formRegister.typeAddress = icon + formRegister.typeAddress;

    } else {
        const icon = '<i class="fas fa-building"></i> ';
        formRegister.typeAddress = icon + formRegister.typeAddress;
    }

    arrayList.push(formRegister);
    createTable(formRegister);
    setLocalStorage(arrayList);
}

function createTable(arrayList) {
    const tbody = document.querySelector('#tbody');

    const tr = document.createElement('tr');
    tr.id = arrayList.id;

    const tdName = document.createElement('td');
    tdName.innerHTML = arrayList.name;
    tr.appendChild(tdName);

    const tdAddress = document.createElement('td');
    tdAddress.innerHTML = arrayList.address;
    tr.appendChild(tdAddress);

    const tdTypeAddress = document.createElement('td');
    tdTypeAddress.innerHTML = arrayList.typeAddress;
    tr.appendChild(tdTypeAddress);

    const tdActions = document.createElement('td')
    tdActions.innerHTML = arrayList.actions;
    tr.appendChild(tdActions);
    
    tbody.appendChild(tr);
}

function deleteItem(index){
    const trDelete = document.getElementById(index);
    trDelete.remove();
    arrayList = JSON.parse(localStorage.getItem('tableAddress'));
    arrayList.splice(index -1, 1);
    localStorage.setItem('tableAddress', JSON.stringify(arrayList));
  }