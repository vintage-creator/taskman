import React from 'react';
import { Route, Routes } from "react-router-dom";
import LogIn from "../Screens/LogIn";
import CreateTask from "../Screens/CreateTask";
import Home from "../Screens/Home";
import Layout from '../WebLayout/Layout';
import Tasks from '../Screens/Tasks';



const Router = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Layout><Home/></Layout>}/>
        <Route path='/task' element={<Layout><CreateTask/></Layout>}/>
        <Route path='/login' element={<Layout><LogIn/></Layout>}/>
        <Route path='/tasks/:id' element={<Layout><Tasks/></Layout>}/>
       </Routes>
    </div>
  )
}

export default Router