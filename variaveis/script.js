let listElement = document.querySelector("#app ul")
let inputElement = document.querySelector("#app input")
let buttonElement = document.querySelector("#app button")

let tarefas = []
buttonElement.addEventListener("click",adicionarTarefa)

function aparecerTarefas(){
    listElement.innerHTML = '';
    tarefas.map((todo)=>{
        let liElement = document.createElement("li")
        let tarefaText = document.createTextNode(todo)

        liElement.appendChild(tarefaText)
        listElement.appendChild(liElement)
    });
}

function adicionarTarefa(){
    if(inputElement.value === ''){
        alert("Digite uma Tarefa")
        return false
    }
    else{
        tarefas.push(inputElement.value)
        inputElement.value = ''
        aparecerTarefas();
    }
}
