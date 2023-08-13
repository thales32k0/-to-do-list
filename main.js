function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;
    
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remover";
    removeButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });
    
    const completeButton = document.createElement("button");
    completeButton.innerText = "Concluir";
    completeButton.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
        if (taskItem.classList.contains("completed")) {
            taskItem.style.color = "green";
            taskItem.removeChild(removeButton);
            taskItem.removeChild(completeButton);
        } else {
            taskItem.style.color = "black";
            taskItem.appendChild(removeButton);
            taskItem.appendChild(completeButton);
        }
    });
    
    taskItem.appendChild(removeButton);
    taskItem.appendChild(completeButton);
    taskList.appendChild(taskItem);
    
    taskInput.value = "";
}
