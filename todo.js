const todoForm= document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type ='text']")
const todoList = document.querySelector(".todo-list");



todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML = `
        <span class="text"> ${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newLi.innerHTML = newLiInnerHTML;
    todoList.append(newLi)
    todoInput.value = "";
});

todoList.addEventListener("click",(e) => {
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
});





document.addEventListener('DOMContentLoaded', function () {
    const heading = document.getElementById('loading-text');
    const textContent = heading.textContent;
    heading.innerHTML = '';

    for (let i = 0; i < textContent.length; i++) {
        const span = document.createElement('span');
        span.textContent = textContent[i];
        heading.appendChild(span);

        // Set a delay (adjust the milliseconds as needed)
        setTimeout(function () {
            span.style.visibility = 'visible';
        }, i * 100);
    }
});
