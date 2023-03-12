import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children, openSideBar}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'space-between'}}>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
        <Navigation/>
        {openSideBar && <Sidebar/>}
        <main style={{flex: 1}}>{children}</main>
        <Footer/>
        </div>
  )
}

export default Layout