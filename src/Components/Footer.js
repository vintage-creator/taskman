import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.module.css'

const Footer = () => {
  return (
    <>
      <div style={{backgroundColor: '#cfcfd2', padding: '70px 30px', color: '#080910', fontWeight: '600'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}} className='footer'>
          <div>
            <h3>Company</h3>
            <div style={{marginBottom:'8px'}}><Link to='/aboutus'>About Us</Link></div>
           <div style={{marginBottom:'8px'}}><Link to='/blog'>Blog</Link></div>
           <div style={{marginBottom:'8px'}}><Link to='/career'>Career</Link></div>
          </div>
          <div>
            <h3>Product</h3>
          <div style={{marginBottom:'8px'}}><Link to='/update'>Update</Link></div>
           <div style={{marginBottom:'8px'}}> <Link to='/security'>Security</Link></div>
           <div style={{marginBottom:'8px'}}> <Link to='/pricing'>Pricing</Link></div>
            <div style={{marginBottom:'8px'}}><Link to='/usecase'>Use Case</Link></div>
          </div>
          <div>
            <h3>Help</h3>
           <div style={{marginBottom:'8px'}}> <Link to='/contactus'>Contact Us</Link></div>
            <div style={{marginBottom:'8px'}}><Link to='/supportdocs'>Support Docs</Link></div>
            <div style={{marginBottom:'8px'}}><Link to='/apidocs'>Api Docs</Link></div>
            <div style={{marginBottom:'8px'}}><Link to='/systemstatus'>System Status</Link></div>
          </div>
          <div style={{marginTop:'18px'}}>
            <div><img src={require('../logo-diff.png')} alt='logo' width={120}/></div>
           <p style={{fontWeight: 'bold', color: '#080910', paddingTop: '10px'}}>Try Taskman for free</p>
           <div className='input' style={{backgroundColor: 'white', borderRadius:'8px', padding: '5px', marginTop: '-10px'}}><input type='email' placeholder='Enter your email' style={{padding: '5px', outline:'none', border: 'none'}}/><span style={{backgroundColor: '#0d99e8', color:'white', padding: '4px 6px', borderRadius:'5px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer'}}>Get Started</span></div>
          </div>
        </div>

      </div>
      <div style={{backgroundColor: '#080910', color: 'white', fontWeight: '600', padding: '30px', fontSize: '13px'}}>
      © Copyright 2023 Taskman LLC. All rights reserved.
      </div>
     
      
      </>
  )
}

export default Footer