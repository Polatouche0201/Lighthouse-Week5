// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    completeTask: function() {
      this.complete = true;
    }

  };
  return task;
  // taskTitles.push(title);
  // taskDescriptions.push(description);
  // taskComplete.push(false);
}

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   task.complete = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the shit out of the litter box"); // task 1
const task2 = newTask("Do Laundry", "Oh,no!"); // task 2
const tasks = [task1, task2];

task1.logTaskState(task1); // Clean Cat Litter has not been completed
task1.completeTask(task1);
task1.logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
