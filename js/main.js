// Seleção dos Elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelBtn = document.querySelector("#cancel-edit-btn");
const todoList = document.querySelector("#todo-list");

// Funções
const saveTodo = (text) => {
    //Criando a variável todo
    const todo = document.createElement("div");
    todo.classList.add("todo");

    //Criando o título e colocando título dentro da variável Todo
    const todoTittle = document.createElement("h3");
    todoTittle.innerText = text;
    todo.appendChild("todoTittle");

    //Criando o Botão Concluído e colocando botão dentro da variável todo
    const doneBtn = document.createElement("button");
    doneBtn.innerHtml = '<i class="fa-solid fa-check"></i>';
    todo.appendChild("doneBtn");
}


// Eventos
todoForm.addEventListener("submit", (e) => { //Criando evento submit
    e.preventDefault(); //Evitando enviar ao clicar no botão
    const inputValue = todoInput.value; //Criando a variável para capturar o valor do input
    if(inputValue) { //Condicional If
        saveTodo(inputValue); //Salvando os valores do input na Todo list
    }
})