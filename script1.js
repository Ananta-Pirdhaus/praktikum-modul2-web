document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("taskList");
  const newTaskInput = document.getElementById("newTask");
  const addTaskButton = document.getElementById("addTask");

  function createTaskElement(task) {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
    taskList.appendChild(li);
  }

  function addTask() {
    const task = newTaskInput.value.trim();
    if (task !== "") {
      createTaskElement(task);
      newTaskInput.value = "";
    }
  }

  function deleteTask(event) {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
    }
  }

  function editTask(event) {
    if (event.target.classList.contains("edit-btn")) {
      const taskText =
        event.target.parentElement.querySelector("span").textContent;
      const editedTask = prompt("Edit task:", taskText);
      if (editedTask !== null) {
        event.target.parentElement.querySelector("span").textContent =
          editedTask;
      }
    }
  }

  addTaskButton.addEventListener("click", addTask);
  taskList.addEventListener("click", deleteTask);
  taskList.addEventListener("click", editTask);
});
