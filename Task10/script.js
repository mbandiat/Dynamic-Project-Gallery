let taskStack = [];

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        taskStack.push(taskInput);
        document.getElementById('taskInput').value = ''; 
        updateTaskStack();
    }
}

function undoTask() {
    if (taskStack.length > 0) {
        taskStack.pop();
        updateTaskStack();
    }
}

function updateTaskStack() {
    const taskStackElement = document.getElementById('taskStack');
    if (taskStack.length === 0) {
        taskStackElement.textContent = '[Empty]';
    } else {
        taskStackElement.textContent = '[' + taskStack.join(', ') + ']';
    }
}
