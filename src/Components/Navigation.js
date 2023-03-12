import {Link} from 'react-router-dom';
import { ToggleSwitch } from 'switch-mode';

import React from 'react'

const Navigation = () => {
    const styles={
        textDecoration: 'none',
        paddingLeft: '25px',
        fontWeight: '600',
        color: 'white'
    }
  return (
    <div style={{position: 'sticky', top:'0', zIndex: '999'}}>
        <div style={{display: 'flex', padding: '30px 38px', backgroundColor: '#080910', marginTop: '-20px', justifyContent: 'space-between', borderBottom:'1px solid gray'}}>
            <Link to='/'><img src={require("../logo (1).png")} width={150} alt='logo'/></Link>
            <div style={{marginRight: '100px', marginTop: '3px'}}>
            <Link to='/' style={styles}>Home</Link>
            <Link to='/task' style={styles}>Create Task</Link>
            <Link to='/login' style={styles}>Log In</Link>
            </div>
            <ToggleSwitch/>
        </div>
    </div>
  )
}

export default Navigation