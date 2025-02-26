///////  find the element
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoAddButton = document.querySelector("#addTodoButton");
const todoLists = document.getElementById("lists");  

    // add todo
const addTodo = (event)=>{
    event.preventDefault();
   const todoValue = todoInput.value;


   //  unique id
   const todoId = Date.now().toString()
   console.log(todoId);
}


//  adding listeners
todoForm.addEventListener("submit", addTodo)



 


