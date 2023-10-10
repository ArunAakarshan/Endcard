import React, { useState } from 'react';
import Task from './Task';
import Header from './Header';
import Footer from './Footer';
import './Tasklist.css';
import Sidebar from './Sidebar2';

function Tasklist({ taskss, newTaskss }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    deadline: '',
    priority: 'Low', // Default priority is 'low'
  });

  const handleTaskCreation = () => {
    if (
      newTask.title.trim() !== '' &&
      newTask.deadline.trim() !== '' &&
      newTask.priority.trim() !== ''
    ) {
      const createdTask = {
        title: newTask.title,
        deadline: newTask.deadline,
        priority: newTask.priority, // Assign priority
        status: 'Inactive',
      };
      setTasks([...tasks, createdTask]);
      setNewTask({ title: '', deadline: '', priority: 'Low' }); // Reset priority to 'low'
    }
  };

  const handleTaskStart = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = 'In progress';
    setTasks(updatedTasks);
  };

  const handleTaskComplete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='cov'>
      <Header />
      <div className="task-list">
        <Sidebar></Sidebar>
        <div className="new-task-form fixed-form">
          <input
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            type="date"
            placeholder="Deadline"
            value={newTask.deadline}
            onChange={(e) =>
              setNewTask({ ...newTask, deadline: e.target.value })
            }
          />
          <select
            value={newTask.priority}
            onChange={(e) =>
              setNewTask({ ...newTask, priority: e.target.value })
            }
          >
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
          <button className="create-task-button" onClick={handleTaskCreation}>
            Create Task
          </button>
        </div>

        <div className="task-list-content">
          {tasks.map((task, index) => (
            <div key={index} className="task-card">
              <div className="task-card-content">
                <h3 className="task-title">{task.title}</h3>
                <p className="task-deadline">Deadline: {task.deadline}</p>
                <p className="task-priority">Priority: {task.priority}</p>
                <p
                  className={`task-status ${
                    task.status === 'In progress' ? 'in-progress' : ''
                  }`}
                >
                  {task.status}
                </p>
              </div>
              <div className="task-card-actions">
                {task.status === 'Inactive' && (
                  <button
                    className="start-button"
                    onClick={() => handleTaskStart(index)}
                  >
                    Start
                  </button>
                )}
                <button
                  className="complete-button"
                  onClick={() => handleTaskComplete(index)}
                >
                  Complete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="task-list-content">{}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Tasklist;
