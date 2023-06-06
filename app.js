
document.addEventListener("DOMContentLoaded", function() {
  let taskForm = document.getElementById("newTaskForm");
  let taskList = document.getElementById("taskList");

  // Retrieve tasks from LS
  let savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    taskList.innerHTML = savedTasks;
  }

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";

    let newTask = document.createElement("li");
    newTask.innerText = document.getElementById("task").value;

    taskList.appendChild(newTask);
    newTask.appendChild(removeButton);

    taskForm.reset();

    // Save tasks to LS
    localStorage.setItem("tasks", taskList.innerHTML);
  });

  taskList.addEventListener("click", function(event) {
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
      event.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === "button") {
      event.target.parentNode.remove();
      
      // Update LS
      localStorage.setItem("tasks", taskList.innerHTML);
    }
  });
});




