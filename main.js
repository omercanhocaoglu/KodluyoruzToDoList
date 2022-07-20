setInterval (Timer , 1000);                     //---Bu kısım saat ve zaman eklentisi içindir---

function Timer () {
    let time = new Date().toLocaleTimeString();

    let date = new Date().toDateString();

    document.querySelector("#timer").innerHTML = ` ${time} ${date} `
};


// ---------------------------------- 


let inputDom = document.querySelector("#input1");

let divDom = document.querySelector("#maindiv");

let alertDiv = document.querySelector("#alertdiv");

let infoDiv = document.querySelector("#infodiv");

let alertMessage = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong> Listeye Boş Ekleme Yapamazsınız! </strong> 
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

let infoMessage = `<div class="alert alert-primary alert-dismissible fade show" role="alert">
<strong> Listeye Eleman Eklendi! Üstüne tek tıklayıp çizebilirsiniz ya da çift tıklayıp çizgiyi kaldırabilirsiniz </strong> 
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`


// -----------------------------------------------


document.querySelector("#form1").addEventListener("submit", FormSubmit)

function FormSubmit (event) {
    event.preventDefault();

console.log(document.querySelector("#input1").value);

localStorage.setItem("keys",document.querySelector("#input1").value );

if (inputDom.value) {AddItem(inputDom.value), infoDiv.innerHTML=infoMessage , inputDom.value=""}

else if (inputDom.value == "") {alertDiv.innerHTML = alertMessage}



};


// ---------------------------------------------------------


function AddItem (item) {
    let createDiv = document.createElement("div");

    createDiv.style.textTransform = "capitalize"

    createDiv.innerHTML = ` 
    <div class="alert alert-warning alert-dismissible fade show">
    <strong> ${item} </strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    `;

    divDom.prepend(createDiv);

    createDiv.addEventListener("click", function () {
        createDiv.style.textDecoration = "line-through"
        
    })

    createDiv.addEventListener("dblclick", function () {
        createDiv.style.textDecoration = "none"
    })

};

// -----------------------------------------------------------------