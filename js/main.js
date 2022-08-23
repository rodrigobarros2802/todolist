// Seleção dos Elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelBtn = document.querySelector("#cancel-edit-btn");
const todoList = document.querySelector("#todo-list");
let oldInputValue;

// Funções
const saveTodo = (text) => {
    //Criando a variável todo
    const todo = document.createElement("div");
    todo.classList.add("todo");

    //Criando o título e colocando título dentro da variável Todo
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    //Criando o Botão Concluído e colocando botão dentro da variável todo
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn);

    //Criando o Botão Editar e colocando botão dentro da variável todo
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    //Criando o Botão Remove e colocando botão dentro da variável todo 
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    //Adicionando toda função dentro da Todo List
    todoList.appendChild(todo);

    //Limpando input ao inserir tarefa na lista
    todoInput.value = "";
    todoInput.focus();
};

const toggleForms = () => {
    editForm.classList.toggle("esconde");
    todoForm.classList.toggle("esconde");
    todoList.classList.toggle("esconde");
};

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");
        console.log(todoTitle, text);
        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;
        }
    })
}

// Eventos
todoForm.addEventListener("submit", (e) => { //Criando evento submit
    e.preventDefault(); //Evitando enviar ao clicar no botão
    const inputValue = todoInput.value; //Criando a variável para capturar o valor do input
    if(inputValue) { //Condicional If
        saveTodo(inputValue); //Salvando os valores do input na Todo list
    }
})

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-todo")) {
       parentEl.classList.toggle("done");
    }
    if(targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }
    if(targetEl.classList.contains("edit-todo")) {
        toggleForms();
        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
});

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
})

 editForm.addEventListener("submit", (e) => {
    e.preventDefault;
    const editInputValue = editInput.value;
    if(editInputValue) {
        updateTodo(editInputValue);
    }
    toggleForms();
 });