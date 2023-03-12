import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import TaskInfo from '../Components/TaskInfo';
const Tasks = () => {
    const {id} = useParams();
    const [task, setTask] = useState(null)

    React.useEffect(()=>{
        if( !task || (task && task.id !== id)) {
            getTask(id);
        }
    }, [task, id])

    function getTask(id) {
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        const tasksCopy = [...tasks]

        //Check if the id in the localStorage match with the one we are interacting with
        const taskDetail = tasksCopy.find((x)=> x.id === id)
        setTask(taskDetail);
        return tasks;
    }
  return (
    <div><TaskInfo task={task} /></div>
  )
}

export default Tasks