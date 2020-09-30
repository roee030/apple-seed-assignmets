(readlineSync = require("readline-sync")), (gameManager = null);

const arr = [
  { task: "wash dishes", complete: false },
  { task: "sleep", complete: true },
];
const addItem = () => {
  newTask = readlineSync.question("What is you new task? ");
  if (newTask.length == 0) console.log("task is too short");
  else {
    arr.push({ task: newTask, complete: false });
    console.log(arr);
  }
};
const deleteTask = () => {
  const onlyTask = [];
  arr.map((e) => {
    onlyTask.push(e.task);
  });
  const option = onlyTask;
  index = readlineSync.keyInSelect(option, "Which Task you want to delete?");
  arr.splice(index, 1);
};
const doneTask = () => {
  const onlyTask = [];
  arr.map((e) => {
    onlyTask.push(e.task);
  });
  const option = onlyTask;
  index = readlineSync.keyInSelect(option, "Which task is done?");
  if (index == 0) return;
  arr[index].complete = true;
  console.log(arr);
};
const undoneTask = () => {
  const onlyTask = [];
  arr.map((e) => {
    onlyTask.push(e.task);
  });
  const option = onlyTask;
  index = readlineSync.keyInSelect(option, "Which task is undone?");
  if (index == 0) return;
  arr[index].complete = false;
  console.log(arr);
};
const printTask = () => {
  const sortArr = arr.sort(function (a, b) {
    return a.xx - b.xx;
  });
  console.log(sortArr.reverse());
};
const startApp = () => {
  const option = [
      "Add",
      "Delete",
      "Mark as done",
      "Unmark as done",
      "print all task",
    ],
    index = readlineSync.keyInSelect(option, "Which option?");
  switch (index) {
    case 0:
      addItem();
      break;
    case 1:
      deleteTask();
      break;
    case 2:
      doneTask();
      break;
    case 3:
      undoneTask();
      break;
    case 4:
      printTask();
      break;
    default:
      break;
  }
};
startApp();
