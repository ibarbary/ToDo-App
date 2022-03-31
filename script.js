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

      //Adds line to separate Done tasks from To Do tasks
      if (
        done.querySelector("div") == null ||
        tasks.querySelector("div") == null
      )
        done.style.borderTop = "0px solid gainsboro";
      else done.style.borderTop = "1px solid gainsboro";
    });

    task.textContent = input.value;
    taskBox.append(task);
    taskBox.append(trash);
    tasks.append(taskBox);
    input.value = "";

    //Moves the finished tasks to the Done place and puts a check mark before them 
    task.addEventListener("click", function () {
      if (taskBox.querySelector(".fa-check") == null) {
        let check = document.createElement("i");
        check.classList = "fa-solid fa-check";
        taskBox.append(check);
        done.append(taskBox);

        //Adds line to separate Done tasks from To Do tasks
        if (tasks.querySelector("div") == null)
          done.style.borderTop = "0px solid gainsboro";
        else done.style.borderTop = "1px solid gainsboro";
      }
    });
  }
}
