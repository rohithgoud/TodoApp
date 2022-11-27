//selcectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



//Event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck);


//functions
function addTodo(event){
    // prevent form from adding
    event.preventDefault();


// create div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");


//create li
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);


// completed button

const completedButton = document.createElement('button');
completedButton.classList.add('complete-btn');
completedButton.innerHTML = '<i  class = "fas fa-check " ></i>';
todoDiv.appendChild(completedButton);

// trash button

const trashButton = document.createElement('button');
trashButton.classList.add('trash-btn');
trashButton.innerHTML = '<i  class = "fas fa-trash " ></i>';
todoDiv.appendChild(trashButton);

todoList.appendChild(todoDiv);

//clear todo input value
todoInput.value="";
}


function deleteCheck(e){
    const item = e.target;

    //delete todo
    if(item.classList[0] == "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }

 //check mark
   if(item.classList[0] == "complete-btn"){
       const todo = item.parentElement;
       todo.classList.toggle("completed");
   }

}