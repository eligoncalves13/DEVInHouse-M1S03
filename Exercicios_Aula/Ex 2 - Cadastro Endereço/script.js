let arrayList = [];

document.addEventListener('DOMContentLoaded', getLocalStorage);

function getLocalStorage(){
    const storageList = localStorage.getItem('tableAddress');
    if(storageList === null){
        arrayList = [];                                     
       }else{
        arrayList = JSON.parse(storageList); 
        for (i in arrayList) {
            createTable(arrayList[i]);
          }                  
       }
       return arrayList;
    }

function setLocalStorage(){                              
    localStorage.setItem('tableAddress', JSON.stringify(arrayList));   
}

function save(e){
       
    const form = new Object();
    form.name = document.querySelector('#name').value;
    form.typeAddress = document.querySelector('#type-address').value;
    form.address = document.querySelector('#address').value;
    // form.trash = `<buttom><i class="fa fa-trash" aria-hidden="true"></i></buttom>`
    console.log(form);
    arrayList.push(form);
    setLocalStorage();
    createTable(form);
    

}

function createTable(arrayList){

    // Object.keys(arrayList).forEach(function(element, index){
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

    
        var tdTrash = document.createElement('td');
        tdTrash.innerHTML =  `<buttom><i class="fas fa-trash" aria-hidden="true"></i></buttom>`
        tdTrash.setAttribute('onclick', deleteRow(this))
        tr.appendChild(tdTrash);
        tbody.appendChild(tr);
        
//   })  
    
   
}


function deleteRow(index){
    console.log('clicou');
    // const storageList = localStorage.getItem('tableAddress');
    // arrayList = JSON.parse(storageList) 
    // arrayList.splice(index, 1) 
    // localStorage.setItem('tableAddress', JSON.stringify(arrayList));  
}