import React from 'react'
import { Vcontainer } from './styled';
import vmenu from '../../assess/vmenu.svg';
import money from '../../assess/money.svg';
import star1 from '../../assess/star1.svg';
import '../motor/motorstyle.css';
import { Link } from 'react-router-dom';


const VmenuCom = () => {
  return (
    <div >
     <Vcontainer>
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
          <div className='vmenu-but'>
            <Link to={'/order'}>
            <button>Order</button>
            </Link>
           

             <button>Compare</button>
          </div>
     </div>
     
     </Vcontainer>
     <Vcontainer>
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
          <div className='vmenu-but'>
             <button>Order</button>
             <button>Compare</button>
          </div>
     </div>
     
     </Vcontainer>
     <Vcontainer>
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
          <div className='vmenu-but'>
             <button>Order</button>
             <button>Compare</button>
          </div>
     </div>
     
     </Vcontainer>
     <Vcontainer>
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
          <div className='vmenu-but'>
             <button>Order</button>
             <button>Compare</button>
          </div>
     </div>
     
     </Vcontainer>
     <Vcontainer>
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
          <div className='vmenu-but'>
             <button>Order</button>
             <button>Compare</button>
          </div>
     </div>
     
     </Vcontainer>
     <Vcontainer>
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
          <div className='vmenu-but'>
             <button>Order</button>
             <button>Compare</button>
          </div>
     </div>
     
     </Vcontainer>
     <Vcontainer>
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
          <div className='vmenu-but'>
             <button>Order</button>
             <button>Compare</button>
          </div>
     </div>
     
     </Vcontainer>

    </div>
  )
}

export default VmenuCom;