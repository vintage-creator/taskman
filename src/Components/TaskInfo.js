import React from 'react'
import { useTheme } from 'switch-mode';
import { Link } from 'react-router-dom';

function TaskInfo({task}) {
    const {theme}= useTheme();
  return (
    <>
     <div style={{marginLeft: '35px', fontWeight: 'bold', paddingTop: '20px'}}><Link to='/task' style={{color: theme === "light" ? "white" : "#080910", fontSize: '20px'}}>← Back</Link></div>
    <div style={{ backgroundColor:
        theme === "light" ? "#080910" : "white", color: theme === "light" ? "white" : "#080910",
        padding: "20px",
        borderRadius: "8px",
        width:'50%', height: '250px', margin:'50px auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        
        <div>
            <h1 style={{textAlign: 'center'}}>Task Details:</h1><hr/><br/>
        <h3>Task title: {task && task.title ? task.title : ''}</h3>
        <div><b>Description:</b> {task && task.desc ? task.desc : ''}</div><br/>
        <div><b>Assigned to:</b> {task && task.assignee ? task.assignee : ''}</div><br/>
        <div><b>Date: </b>{task && task.date ? task.date : 'Task date was not assigned'}</div>
        </div>
    </div>
    </>
  )
}

export default TaskInfo