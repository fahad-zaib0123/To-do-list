let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskItem.addEventListener('click', toggleTask);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function toggleTask(event) {
    let taskItem = event.target;
    taskItem.classList.toggle('completed');
}
