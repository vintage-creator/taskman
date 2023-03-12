import React from 'react'
import TaskList from './TaskList';

const TaskCard = (props) => {
  const {func} = props;
  return (
    <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
      {props.task && props.task.length > 0 ? (props.task.map((task)=>(<TaskList key={task.id} tasky={task} funct={func} />))) : (<div style={{display: 'flex', height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center'}}><h1>No task yet</h1></div>)}
    </div>
  )
}

export default TaskCard;