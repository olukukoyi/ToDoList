// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo"); ////storing the select into a var

//Event listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterToDo);

// Functions

function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();
  //Todo div, creating elements and adding existing classes into them
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI, creating elements and adding existing classes into them
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  //adding the list item to the div
  todoDiv.appendChild(newTodo);
  // CHECK MARK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check'> </i> ";
  completedButton.classList.add("complete-btn");
  // adding button to the div, (tododiv)
  todoDiv.appendChild(completedButton);
  // CHECK TRASH BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'> </i> ";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // APPEND TO LIST
  todoList.appendChild(todoDiv);
  // Clear todo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  // storing what we click in a variable
  const item = e.target;
  //DELETE TODO
  // if the first item in what we clicked has the "trash-btn" class, store its parent into the variable
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterToDo(e) {
  const todos = todoList.childNodes; //storin childnodes of the List into a var
  todos.forEach(function (todo) {
    //for each child node, execute this witch function
    //filterOption.value returns the value of the specific option we're on
    switch (filterOption.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        // if it has the classlist completed, display it
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          //if it doesn't , dont display i
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        //if it does not have the class completed, display it
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          //if it has the classlist, dont display
          todo.style.display = "none";
        }
        break;
    } // returns value, for all, completed or uncompleted
  });
}
