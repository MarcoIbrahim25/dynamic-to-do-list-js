document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  loadTasks();

  function addTask(taskText, save = true) {
    if (!taskText || taskText.trim() === "") {
      if (save) alert("Please enter a task.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = () => {
      taskList.removeChild(li);
      removeTaskFromStorage(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
      saveTaskToStorage(taskText);
    }

    taskInput.value = "";
  }

  addButton.addEventListener("click", () => {
    addTask(taskInput.value);
  });

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask(taskInput.value);
    }
  });

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  function saveTaskToStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function removeTaskFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const index = tasks.indexOf(taskText);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
