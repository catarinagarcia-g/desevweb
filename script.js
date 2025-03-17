document.addEventListener("DOMContentLoaded", ()=>{
    loadTasks();
})

function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText == ""){
        alert("digite uma tarefa válida");
        return;
    }
    let taskList = document.getElementById("taskList");
    let item = document.createElement("li");
    item.innerHTML =  `
    <span onclick="toggleTask(this)">${taskText}</span>
    <button class = "delete-btn" onclick= "deleteTask(this)">X</button>
    `

    taskList.appendChild(item);
    saveTask();
    taskInput.value = "";
}
function toggleTask(element){
    element.parentElement.classList.toggle("completed");
}

function deleteTask(button){
    button.parentElement.remove();

}

function saveTask(){
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach((task)=>{
        tasks.push({
            task: task.innerText.replace("X", "").trim(),
            status: task.classList.contains("completed")
        })
    })
    localStorage.setItem("tasks" , JSON.stringify(tasks));

}

function loadTasks(){
    let tasks = JSON.parse(localStorage.getITem("tasks")) || [];

    let taskLIst = document.getElementById("taskList");

    task.forEAch(element => {
        let item = document.createElement("li")

        item.innerHTML =  `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button class = "delete-btn" onclick= "deleteTask(this)">X</button>
        `


        if(element.status){
            item.classList.add("completed");   
        }
    })

}