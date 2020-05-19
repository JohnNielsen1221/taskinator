var formEl = document.querySelector('#task-form');
var tasksToDoEl = document.querySelector('#tasks-to-do');

var createTaskHandler = function(event) {
    // Stops page from refreshing upon form submit
    event.preventDefault();
    var taskNameInput = document.querySelector('input[name="task-name"]').value;
    var taskTypeInput = document.querySelector('select[name="task-type"]').value;
    //Create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //create div to hold task infor and add to list item
    var taskInfoEl = document.createElement('div');
    //give it a class name
    taskInfoEl.classname = 'task-info';
    //add HTML content to div
    taskInfoEl.innerHTML = '<h3 class="task-name">' + taskNameInput + '</h3><span class="task-type">' + taskTypeInput + '</span>';
    listItemEl.appendChild(taskInfoEl);
    //Add entire list item to list

    tasksToDoEl.appendChild(listItemEl);
  };

formEl.addEventListener('submit', createTaskHandler);
  
