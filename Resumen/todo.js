let tasks = [];

// Función para agregar una nueva tarea
function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        };

        tasks.push(newTask);
        newTaskInput.value = '';
        displayTasks();
    }
}

// Función para mostrar las tareas en la lista
function displayTasks(taskArray = tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    taskArray.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
            <span>${task.text}</span>
            <button onclick="deleteTask(${task.id})">Eliminar</button>
        `;
        taskList.appendChild(li);
    });
}

// Función para cambiar el estado de una tarea (completada / incompleta)
function toggleTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    displayTasks();
}

// Función para eliminar una tarea
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    displayTasks();
}

// Función para mostrar solo las tareas completadas
function showCompletedTasks() {
    const completedTasks = tasks.filter(task => task.completed);
    displayTasks(completedTasks);
}

// Función para mostrar solo las tareas incompletas
function showIncompleteTasks() {
    const incompleteTasks = tasks.filter(task => !task.completed);
    displayTasks(incompleteTasks);
}

// Función para mostrar todas las tareas
function showAllTasks() {
    displayTasks();
}

// Función para ordenar las tareas alfabéticamente
function sortTasks() {
    tasks.sort((a, b) => a.text.localeCompare(b.text));
    displayTasks();
}

// Función para limpiar las tareas completadas
function clearTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

// Ejemplo de tareas iniciales
tasks = [
    { id: Date.now() - 1, text: 'Hacer ejercicio', completed: false },
    { id: Date.now() - 2, text: 'Estudiar programación', completed: true },
];

// Mostrar las tareas iniciales
displayTasks();
