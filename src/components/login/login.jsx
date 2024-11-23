import React from 'react';
import '../login/style.css';



export const LoginComponent = () => {
  return (
  <>
  <div style={{alignItems:"center", display:"flex" , justifyContent:"center" ,paddingTop:"50px"}}>
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
               <input type="Password" />

           </div>
           <div  className='input-box1'>
              <button>Sign in</button>
           </div>
         <div className='input-box2'>

          <button>CREATE ACCOUNT</button>
         </div>
        
          
     </div>

  
  
  </div>
  
  
  
  
  </>





  )

    
    }
    

export default LoginComponent;