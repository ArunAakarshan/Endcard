import React from 'react';
import './Task.css';
function Task({ title, deadline, status, onStart, onComplete }) {
  const taskStyle = {
    color: 'azure',
  };

  return (
    <div className="task-item">
      <p style={taskStyle}>Title: {title}</p>
      <p style={taskStyle}>Deadline: {deadline}</p>
      <p style={taskStyle}>Status: {status}</p>
      <button style={{ backgroundColor: 'yellow', color: 'black' }} onClick={onStart}>
        Start
      </button>
      <button style={{ backgroundColor: 'green', color: 'white' }} onClick={onComplete}>
        Complete
      </button>
    </div>
  );
}
export default Task;
