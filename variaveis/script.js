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
        
        let linkElement = document.createElement("a")
        let textLink = document.createTextNode("Excluir")
        linkElement.appendChild(textLink)

        linkElement.setAttribute("href", "#")
        let posicao = tarefas.indexOf(todo)

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)
        
        liElement.appendChild(tarefaText)
        listElement.appendChild(liElement)
        liElement.appendChild(linkElement)
        

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

function deletarTarefa(posicao){
    tarefas.splice(posicao,1);
    aparecerTarefas();
}


