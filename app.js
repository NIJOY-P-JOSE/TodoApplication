const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


//add the task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");
  taskItem.className =
    "list-group-item d-flex justify-content-between align-items-center";
  taskItem.innerHTML = `<span>${taskText}</span><button class="btn btn-danger btn-sm delete">Delete</button>`;

  taskList.appendChild(taskItem);
  taskInput.value = "";
});

//remove the task
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let result = confirm("Do you want to delete?");
    if (result) e.target.parentElement.remove();
  }
});
