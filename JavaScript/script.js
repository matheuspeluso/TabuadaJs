// seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector("#multiplication-title span")
//funções
const createTable = (number, multiplicatorNumber)=>{
    multiplicationTable.innerHTML = "";
    
    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;
        
        const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`;

        const parse = new DOMParser()
        const htmlTemplate = parse.parseFromString(template,"text/html")
        const row = htmlTemplate.querySelector(".row")
        multiplicationTable.appendChild(row);
    }
    multiplicationTitle.innerText = number;
};


//eventos

multiplicationForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const multiplicationNumber = +numberInput.value; //+ transforma o numero em inteiro
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber)return;
    createTable(multiplicationNumber,multiplicatorNumber);
    
})
