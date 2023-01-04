const todoInput = document.getElementById('todo_input');

const createTodo = () => {
    const todoList = document.querySelector("#todo_list");
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');

    newBtn.addEventListener('click',() => {
        newLi.classList.toggle('complete');
    })

    newLi.addEventListener('dblclick',() => {
        newLi.remove();
    })
    
    newSpan.textContent = todoInput.value;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value = "";
}

const keyCodeCheck = () => {
    if(window.event.keyCode === 13 && todoInput.value !== '') {
        createTodo();
    }
};

const deleteAll = () => {
    const liList = document.querySelectorAll('li');
    for (let i = 0; i < liList.length; i++) {
        liList[i].remove();
    }
}