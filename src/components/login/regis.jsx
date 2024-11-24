import React from 'react';
import '../login/style.css';
import { Link } from 'react-router-dom';

const RegisComponent = () => {
  return (
    <>
    <div className='homepage13' style={{alignItems:"center", display:"flex" , justifyContent:"center" ,paddingTop:"50px"}}>
       <div className='login-page'>
             <div>
                <h1 style={{color:"black"}}>Sign in</h1>
             </div>
             <div className='input-box'>
                <label htmlFor="">Email:</label><br />
                 <input placeholder='your email'  type="email" />
  
             </div>
             <div className='input-box'>
                 <label htmlFor="">Password</label><br />
                 <input  placeholder='Your password' type="Password" />
  
             </div>
             
             <div className='input-box'>
                 <label htmlFor="">Repeat your password</label><br />
                 <input placeholder='Your password' type="Password" />
  
             </div>
             <div  className='input-box1'>
                <Link to={'/motor'}>
                <button>REGISTRATE</button>
                </Link>
                
             </div>
       </div>
  
    
    
    </div>
    
    
    
    
    </>
  )
}

export default RegisComponent;