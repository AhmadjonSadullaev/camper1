import React from 'react'
import NavbarComponet from '../navbar'
import FooterComponet from '../footer'
import { Vcontainer } from '../motor/styled'
import vmenu from '../../assess/vmenu.svg';
import money from '../../assess/money.svg';
import star1 from '../../assess/star1.svg';

const OrderComponent = () => {
  return (
     <>
     <div><NavbarComponet/></div>
       <div style={{textAlign: "center", }}>
             <h1>My Order</h1>

       </div>
      <div style={{textAlign: "center"}}>
     <Vcontainer >
        <img src={vmenu} alt="" /> 
     <div>
        <div style={{display:"flex",justifyContent: "space-between " ,width: "500px",alignItems:"center"}}>
        <div><h3>Name of the car</h3></div>
         <div><img src={money} alt="img" /></div>
         </div>
          <div style={{display:"flex",justifyContent: "space-between" ,width: "500px", alignItems:"center"}}>
             <div><p>Brand name</p></div>
             <div> <img src={star1} alt="img" /></div>
          </div>
          
     </div>
     
     </Vcontainer>
    </div> 
     
     
     
     <div><FooterComponet/></div>
     </>
  )
}

export default OrderComponent