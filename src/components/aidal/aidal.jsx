import React from 'react'
import NavbarComponet from '../navbar';
import FooterComponet from '../footer';
import '../aidal/aidalstyle.css'

const AidalComponent = () => {
  return (
    <>
      <div><NavbarComponet/></div>
       <div>
       <div className='motor-con'>
           <div className='aidal'>
              <h1 style={{fontWeight:"800"}}>Aidal</h1>
              </div>
           </div>



       </div>
    
    
      <div><FooterComponet/></div>
    </>
  )
}

export default AidalComponent;