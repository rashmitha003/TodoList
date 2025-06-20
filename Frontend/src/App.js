import './App.css';
import React, { useEffect, useState } from 'react';
import TodoItem from './Components/TodoItem';
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from './api/todoService';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Fetch tasks when component mounts
  useEffect(() => {
    fetchTodos()
      .then(res => setTasks(res.data))
      .catch(err => console.error('Error loading tasks:', err));
  }, []);

  // Add a new task
  const addTask = () => {
    if (input.trim() === '') return;

    const newTask = { title: input, completed: false };
    createTodo(newTask)
      .then(res => {
        setTasks([...tasks, res.data]);
        setInput('');
      })
      .catch(err => console.error('Error adding task:', err));
  };

  // Toggle completed status
  const toggleTask = (task) => {
    const updated = { ...task, completed: !task.completed };
    updateTodo(task.id, updated)
      .then(res => {
        setTasks(tasks.map(t => (t.id === task.id ? res.data : t)));
      })
      .catch(err => console.error('Error updating task:', err));
  };

  // Edit title
  const editTask = (id, updatedTask) => {
    updateTodo(id, updatedTask)
      .then(res => {
        setTasks(tasks.map(t => (t.id === id ? res.data : t)));
      })
      .catch(err => console.error('Error editing task:', err));
  };

  // Delete a task
  const removeTask = (id) => {
    deleteTodo(id)
      .then(() => {
        setTasks(tasks.filter(t => t.id !== id));
      })
      .catch(err => console.error('Error deleting task:', err));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">To-Do List</h2>
      <div className="input-group mb-3">
        <input
          className="form-control"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={() => toggleTask(task)}
            onRemove={() => removeTask(task.id)}
            onEdit={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
