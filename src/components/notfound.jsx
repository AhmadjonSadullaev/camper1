import React from 'react';
import '../../src/index.css';
import NavbarComponet from './navbar';
import FooterComponet from './footer';


const Notfound = () => {
  return (
    <> 
    <NavbarComponet/>
       <div className='error-img'>
      
       </div>
     <FooterComponet/>
  </>
  )
}

export default Notfound;