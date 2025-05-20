const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todoInput')
const todoListUl = document.getElementById('todoList')

let allTodos = getTodos();//[] , [{}.{}]
//console.log(allTodos);
updateTodoList();

todoForm.addEventListener('submit' , (e)=>{
    //e.preventDefault();
    addTodo();
    // alert("test");
    // console.log(e);
})
function addTodo(){
    const todoText = todoInput.value.trim();
    // alert(todoText)

    //allTodos.push(todoText);
    console.log(allTodos);
    if(todoText.length > 0){
        const todoObject = {
            text : todoText,
            completed: false,
        }
        allTodos.push(todoObject);  //[{text: exercise, completed:false},{text: exercise, completed:false}]
        // createTodoItem(todoText);
        updateTodoList();
        todoInput.value = "";
    }
};  

//[{text: exercise, completed:TRUE},{text: exercise, completed:false},{text: exercise2, completed:false}]
function updateTodoList(){
   todoListUl.innerHTML = "";
    allTodos.forEach((todo, todoIndex)=>{
        const todoId = "todo-" + todoIndex;
        const todoLi = document.createElement("li");
        todoLi.className = 'todo';
        todoLi.innerHTML = `
            <input type="checkbox" id="${todoId}">
                <label class="custom-checkbox" for="${todoId}">
                    <img src="icons/check.png"  width="20"/>
                </label>
                <label for="${todoId}" class="todo-text">
                    ${todo.text}
                </label>
                <button class="delete-button">
                    <img  src="icons/delete.png" width="20" />
                </button>
        `;
        const deleteButton = todoLi.querySelector(".delete-button");
        deleteButton.addEventListener("click",()=>{
            deleteTodoItem(todoIndex);
        })
        const checkbox = todoLi.querySelector("input")
        checkbox.addEventListener("change",()=>{
            allTodos[todoIndex].completed = checkbox.checked;
            saveTodos();
        })
        checkbox.checked = todo.completed;
        todoListUl.append(todoLi);
        
    })
    saveTodos();
}

function saveTodos(){
    const todoJson = JSON.stringify(allTodos);

    localStorage.setItem("todos",todoJson);
}
saveTodos();

function getTodos(){
    const todos = localStorage.getItem("todos") || "[]" ;
    return JSON.parse(todos);
}

function deleteTodoItem(todoIndex){
    allTodos = allTodos.filter((item,i) => i !== todoIndex);
    saveTodos();
    updateTodoList();
}