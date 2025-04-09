const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todoInput')
const todoListUl = document.getElementById('todoList')

let allTodos = [];
todoForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
    addTodo();
    // alert("test")
    // console.log(e)
})
function addTodo(){
    const todoText = todoInput.value.trim();
    // alert(todoText)
    //allTodos.push(todoText);
    console.log(allTodos);
    if(todoText.length > 0){
        allTodos.push(todoText);
        createTodoItem(todoText)
        // updateTodoList(todoText)
        todoInput.value = "";
    }
}
function createTodoItem(todo) {
    const todoLi = document.createElement("li");
    todoLi.setAttribute('class', 'todo');
  
    const todoId = `todo-${Date.now()}`;
  
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = todoId;
  
    const label1 = document.createElement("label");
    label1.className = "custom-checkbox";
    label1.htmlFor = todoId;
  
    const checkImg = document.createElement('img');
    checkImg.setAttribute('src', 'icons/check.png');
    checkImg.style.width = '20px';
  
    label1.append(checkImg);
    todoLi.append(input, label1);
  
    const label2 = document.createElement('label');
    label2.className = "todo-text";
    label2.htmlFor = todoId;
    label2.innerText = todo;
    todoLi.append(label2);
  
    const buttonDel = document.createElement('button');
    buttonDel.className = 'delete-button';
  
    const deleteImg = document.createElement('img');
    deleteImg.setAttribute('src', 'icons/delete.svg');
    deleteImg.style.width = '20px';
  
    buttonDel.append(deleteImg);
    todoLi.append(buttonDel);
  
    buttonDel.addEventListener('click', () => {
      todoLi.remove();
    });
  
    // input.addEventListener('change', () => {
    //   if (input.checked) {
    //     label2.style.textDecoration = 'line-through';
    //     label2.style.color = 'gray';
    //   } else {
    //     label2.style.textDecoration = 'none';
    //     label2.style.color = '';
    //   }
    // });
    
    input.addEventListener('change', () => {
        label2.classList.toggle('done');
    });
    
    todoListUl.append(todoLi);
}
  
function updateTodoList(){
    todoListUl.innerHTML = "";
    allTodos.forEach((todo, todoIndex)=>{
        const todoLi = document.createElement("li");
        todoLi.innerText = todo;
        todoListUl.append(todoLi)
    })
}

