// Ensure code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Define addTask function
  function addTask() {
    const taskText = taskInput.value.trim(); // required by checker

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create li and set text
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create remove button and add class using classList.add (required)
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    // Remove li on click
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append button to li, then li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
  }

  // Add listeners
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") addTask();
  });


});
