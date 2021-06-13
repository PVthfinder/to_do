import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MyAppBar from './components/MyAppBar';
import Tasks from './components/Tasks';

import './App.css';

function App() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/tasks').then(({data}) => {setTasks(data)});
  },[]);

  const onAddTask = taskObj => {
    const newTasks = [...tasks, taskObj];
    setTasks(newTasks);
  }

  const onDeleteTask = taskId => {
    if (window.confirm('Вы действительно хотите удалить задачу?')) {
            axios
        .delete('http://localhost:3001/tasks/' + taskId)
        .then(() => {
          const newTasks = tasks.filter(task => task.id !==taskId);
          setTasks(newTasks);
        })
        .catch(() => {alert('Не удалось удалить задачу!')})
    }
  }

  const onEditTask = (taskObj) => {
    const newTaskText = window.prompt('Введите текст задачи', taskObj.text);

    if (!newTaskText) {
      return;
    }

    axios
      .patch('http://localhost:3001/tasks/' + taskObj.id, {text: newTaskText})
      .then(() => {
        const newTasks = tasks.map(task => {
          if (task.id === taskObj.id) {
            task.text = newTaskText;
          }
          return task;
        })
        setTasks(newTasks);
      })
      .catch(() => {alert('Не удалось отредактировать задачу!')})
  }

  const onCompleteTask = (taskId, completed) => {
    axios
      .patch('http://localhost:3001/tasks/' + taskId, {completed})
      .then(() => {
        const newTasks = tasks.map(task => {
          if (task.id === taskId) {
            task.completed = completed;
          }
          return task;
        })
        setTasks(newTasks);
      })
      .catch(() => {alert('Не удалось обновить задачу!')})
  }

  return (
    <div className="App">
      <MyAppBar/>
      <Tasks
        tasks={tasks}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
        onCompleteTask={onCompleteTask}
      />
    </div>
  );
}

export default App;
