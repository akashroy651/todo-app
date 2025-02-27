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
        messageElement.textContent ="";
        messageElement.classList.remove(`bg-${status}`)
    }, 1000)
}

//  create todo 
const createTodo = (todoId, todoValue) =>{
    const todoElement = document.createElement("li");
    todoElement.id =todoId;
    // css theke class (li-style ) add ar jonno
    todoElement.classList.add("li-style")
    todoElement.innerHTML =`<span> ${todoValue}</span>
    <span> <button class="btn" id="deleteButton"> <i class="fa fa-trash"> </i> </button> </span>
    `;

     todoLists.appendChild(todoElement);

// button click kore  delete ar jonno

const deleteButton = todoElement.querySelector("#deleteButton");
deleteButton.addEventListener("click", deleteTodo);
};
 // deleteTodo call function use kore
 const deleteTodo = (event) =>{
   const selectedTodo = event.target.parentElement;
   console.log(selectedTodo)
 }

//  getTodosFromLocalstorage use
const getTodosFromLocalstorage = ()=>{
  return localStorage.getItem("mytodos")
    ? JSON.parse(localStorage.getItem("mytodos")) : [];
}


    // add todo
    
const addTodo = (event)=>{
    event.preventDefault();
   const todoValue = todoInput.value;
   


   //  unique id jonno ( date.now )  use kora hoyece

   const todoId = Date.now().toString();
  createTodo(todoId, todoValue);
  showMessage("todo is added", "success"); 

                  ////// add todo in localStorage

// localStorage all ready todo ace kin aseta check korte casci
// ? jodi thake se khetre (parse) kore getItem use kore same key use korbo
// r jodi kicu na thake :[] ba fhaka array thakbe

// const todos = localStorage.getItem("mytodos")
//  ? JSON.parse(localStorage.getItem("mytodos")) : [];
          ////  uporer function use korle  ak jinis bar bar use kora lagbe
const todos = getTodosFromLocalstorage()
todos.push({todoId, todoValue});
localStorage.setItem("mytodos", JSON.stringify(todos));


}


//  adding listeners
todoForm.addEventListener("submit", addTodo)


 


