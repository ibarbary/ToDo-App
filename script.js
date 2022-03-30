let input = document.querySelector("input");
let AddButton = document.querySelector("#addBtn");
let tasks = document.querySelector("#tasks");
AddButton.addEventListener("click", addTask);

let done = document.querySelector("#doneTasks");
function addTask() {
  if (input.value != "") {
    let taskBox = document.createElement("div");
    let task = document.createElement("span");
    task.style.cursor = "pointer";

    let trash = document.createElement("i");
    trash.classList = "fa-solid fa-trash";

    //Removes a task after clicking on the TrashCan
    trash.addEventListener("click", function () {
      this.parentElement.remove();
    });

    task.textContent = input.value;
    taskBox.append(task);
    taskBox.append(trash);
    tasks.append(taskBox);
    input.value = "";

    //Moves the finished tasks and puts a line through them
    task.addEventListener("click", function () {
      if (taskBox.querySelector("#line") == null) {
        let line = document.createElement("div");
        line.setAttribute("id", "line");
        taskBox.append(line);
        done.append(taskBox);
      }
    });
  }
}
