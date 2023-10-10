import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import { useTasks } from './TaskContext';
import './Admindashboard.css';

function AdminDashboard({ assignTask }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    deadline: '',
    assignedTo: '', 
  });

  const handleTaskAssignment = () => {
    
    assignTask(task);
    // window.location.href="/Tasklist";
      console.log(task);
    setTask({ title: '', description: '', deadline: '', assignedTo: '' });
  };

  return (
    <div className='pic'>
        <AdminHeader/>
      {/* <h2>Admin Dashboard</h2> */}
      <form className='adminForm'>
        <label>Title:</label>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <br />

        <label>Description:</label>
        <input
          type="text"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <br />

        <label>Deadline:</label>
        <input
          type="date"
          value={task.deadline}
          onChange={(e) => setTask({ ...task, deadline: e.target.value })}
        />
        <br />

        <label>Assign to:</label>
        <select
          value={task.assignedTo}
          onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
        >
          <option value="">Select Employee</option>
          <option value="employee1">Employee 1</option>
          <option value="employee2">Employee 2</option>
        </select>
        <br />

        <button type="button" onClick={handleTaskAssignment}>
          Assign Task
        </button>
      </form>
    </div>
  );
}

export default AdminDashboard;
