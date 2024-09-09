// Select the elements
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Function to create a new task element
function createTaskElement(taskText) {
    // Create the list item (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Add event listener to toggle completion on click
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // Prevent event bubbling for delete button
    deleteBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        taskList.removeChild(li);
    });

    return li;
}

// Add task function
function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create and append the new task to the list
    const taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);

    // Clear the input field
    newTaskInput.value = '';
}

// Add task when button is clicked
addTaskBtn.addEventListener('click', addTask);

// Add task when "Enter" is pressed
newTaskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
