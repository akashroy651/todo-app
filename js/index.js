import { Todo } from "./classes/Todo.js";



///////  find the element
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoAddButton = document.querySelector("#addTodoButton");
const todoLists = document.getElementById("lists");
const messageElement = document.getElementById("message");

// showMessage ar jonno use
const showMessage = (text, status)=> {
    messageElement.textContent =text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(() => {
        messageElement.textContent =" ";
        messageElement.classList.remove(`bg-${status}`)
    }, 1000)
}

//  create todo 
const createTodo = (newTodo) =>{
    const todoElement = document.createElement("li");
    todoElement.id =newTodo.todoId;
    // css theke class (li-style ) add ar jonno
    todoElement.classList.add("li-style")
    todoElement.innerHTML =`<span> ${newTodo.todoValue}</span>
    <span> <button class="btn" id="deleteButton"> <i class="fa fa-trash"> </i> </button> </span>
    `;

     todoLists.appendChild(todoElement);

// button click kore  delete ar jonno

const deleteButton = todoElement.querySelector("#deleteButton");
deleteButton.addEventListener("click", deleteTodo);
};
 // deleteTodo call function use kore
 const deleteTodo = (event) =>{
   const selectedTodo = event.target.parentElement.parentElement.parentElement;
    ///// delete ar somoy ai message show hobe 
   todoLists.removeChild(selectedTodo);
    showMessage("todo is deleted", "danger");

///  message ar sate sate localstorage theke sms delete  korar jonno


 let todos = getTodosFromLocalstorage();
 todos = todos.filter((todo)=> todo.todoId !== selectedTodo.id);
 localStorage.setItem("mytodos", JSON.stringify(todos));

 }

//  getTodosFromLocalstorage use
const getTodosFromLocalstorage = ()=>{
  return localStorage.getItem("mytodos")
    ? JSON.parse(localStorage.getItem("mytodos")) : [];
}


    // add todo function use
    
const addTodo = (event)=>{
    event.preventDefault();
   const todoValue = todoInput.value;
   


   //  unique id jonno ( date.now )  use kora hoyece

   const todoId = Date.now().toString();

   ////  ( Todo.js ) ar class use kora hoyece

   const newTodo = new Todo(todoId,todoValue);
      /// newTodo tik moto kaj korce kina tar jonno console diye check kora
   // console.log(newTodo);
   
  createTodo(newTodo);
  showMessage("todo is added", "success"); 

         ////// add todo in localStorage

// localStorage all ready todo ace kin aseta check korte casci
// ? jodi thake se khetre (parse) kore getItem use kore same key use korbo
// r jodi kicu na thake :[] ba fhaka array thakbe

// const todos = localStorage.getItem("mytodos")
//  ? JSON.parse(localStorage.getItem("mytodos")) : [];
          ////  uporer function use korle  ak jinis bar bar use kora lagbe
const todos = getTodosFromLocalstorage()
todos.push({newTodo});
localStorage.setItem("mytodos", JSON.stringify(todos));

//// jokon ei store kora hoye jabe tokon  input  fhaka kore dibo
todoInput.value = "";
}

// loadTodos function use kore

const loadTodos =()=>{
    const todos = getTodosFromLocalstorage();
    todos.map((todo)=> createTodo(todo));
}


//  adding listeners
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos);


 


