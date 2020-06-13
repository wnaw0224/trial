'use strict';
const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0];
const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0];
const addTaskValue = document.getElementsByClassName('js-addTask-value')[0];

const removeTask = removeButton => {
  const targetTask = removeButton.closest('li');
  addTaskTarget.removeChild(targetTask);
};

const addTask = task => {
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button'); //削除ボタン
  const completeButton = document.createElement('button'); //完了ボタン
  
  removeButton.innerText = '×';
  removeButton.addEventListener('click', () => removeTask(removeButton));
  
  listItem.innerText = task;

  completeButton.innerText = 'done!';
  completeButton.addEventListener('click', () => completeTask(completeButton));//完了イベント

  listItem.append(completeButton);
  listItem.append(removeButton);
  addTaskTarget.appendChild(listItem);
};


addTaskTrigger.addEventListener('click', event => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = '';
});

/*doneをクリックしたら線を引く*/
const completeTask = completeButton => {
  const targetTask = completeButton.closest('li');
  targetTask.classList.add('Completeline')
  targetTask.removeChild(completeButton);
};