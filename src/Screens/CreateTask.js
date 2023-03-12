import React, {useState} from 'react';
import {toast} from 'react-toastify';
import { Player } from "@lottiefiles/react-lottie-player";
import TaskCard from '../Components/TaskCard';
import { ReactId } from 'reactjs-id';
import { useTheme} from "switch-mode";



const CreateTask = () => {
  const {theme} = useTheme();
  const [taskItem, setTaskItem] = useState([]);
  const [touched, setTouched] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  
  const [state, setState] = useState({
    title: '',
    desc: '',
    assignee:'',
    date:''
  })
  
  const {title, desc, assignee, date} = state;

  
 
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setState({
      ...state,
      [name]: value
    })
  }

  React.useEffect(()=>{
    
   })
 
   //Getting tasks
   React.useEffect(()=>{
    getTasks();
   }, [openModal])

   //Getting tasks
   const getTasks = ()=>{
    const tasks = localStorage.getItem('tasks')
    const taskJson = JSON.parse(tasks)
    setTaskItem(taskJson)
   }

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!title || !desc || !assignee){
     toast.warning('All fields must be filled')
     return;
    }
    setTouched(true)
    const data = {id: ReactId(),title, desc, assignee, date};
   
    setTimeout(()=>{
      const task = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) :[]
      const taskCopy = [...task,data]
      localStorage.setItem('tasks', JSON.stringify(taskCopy))
    
     setState({
      title: '',
      desc: '',
      assignee:'',
      date:''
    })
    toast.success('Your task has been created. Well done!')
     setTouched(false)
     setOpenModal(false)
    }, 5000)
    
  }

  
  return (
   
    <div style={{backgroundColor: theme === "light" ? "#080910" : "white" }}>
      
     { openModal && <modal style={{backgroundColor: 'rgba(8, 9, 16, 0.873)', height: '100vh', position: 'fixed', top: 0,
    bottom: 0, left: 0, right:0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      
         <div style={{backgroundColor: 'white',padding:'5px 15px', width: '400px', height: '490px', borderRadius: '8px', zIndex: 999}}>
            <h3 style={{color: '#080910'}}>New task<span style={{marginLeft: '75%', cursor: 'pointer'}} onClick={()=>setOpenModal(false)}>🗙</span></h3>
          <form style={{color: '#080910', fontWeight:'600'}}>
            <label htmlFor='title'>Title: </label><br/>
            <input type='text' id='title' placeholder='Enter task title' value={title} name='title' onChange={handleChange} style={{padding: '5px 8px', width: '94%', borderRadius:'8px', outline: 'none'}}/><br/><br/>
            <label htmlFor='desc'>Description: </label><br/>
            <textarea id='desc' cols={20} rows={8} placeholder='Enter a detailed description of your task' value={desc} name='desc' onChange={handleChange} style={{padding: '5px 8px', width: '94%', borderRadius:'8px', outline: 'none'}}/><br/><br/>
            <label htmlFor='assignee'>Assignee: </label><br/>
            <input type='text' id='assignee' placeholder='Enter the task receipient(e.g "John Doe")' value={assignee} name='assignee' onChange={handleChange}style={{padding: '5px 8px', width: '94%', borderRadius:'8px', outline: 'none'}}/><br/><br/>
            <label htmlFor='date'>Date: </label>
            <input type='date' value={date} name='date' onChange={handleChange}/><br/><br/>
           
            {touched ? (<Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_gbfwtkzw.json"
              style={{ height: "80px", width: "80px" }}
            ></Player>) : (<button onClick={handleSubmit} type='button' style={{fontSize:'15px',margin:'5% 40.5%', backgroundColor:'#080910',cursor: 'pointer', color:'white', padding: '5px 15px', borderRadius:'8px'}}>Create</button>)}
          </form>
          </div>
      
      </modal>}

      <div style={{backgroundColor: 'white', padding: '8px', color: '#080910', fontWeight: '700', border: '1px solid #080910'}}>
        <button onClick={()=>setOpenModal(true)} type='button' style={{backgroundColor: '#080910', color: 'white', marginLeft:'22px', fontSize: '15px', padding: '8px 18px',cursor: 'pointer', borderRadius:'8px'}}>+ {' '}Add task</button>
      </div>

     {/* { map over the data} */}
     <TaskCard task={taskItem} func={getTasks}/>
     
    </div>
  )
  
}

export default CreateTask

