import React, { useState } from 'react';
import NavbarComponet from '../navbar';
import FooterComponet from '../footer';
import '../motor/motorstyle.css';
import icons from '../../assess/icons.svg';
import item1 from '../../assess/item1.svg';
import icons4 from '../../assess/icons4.svg';
import icons3 from '../../assess/icons3.svg';
import HmenuCom from './hmenu';
import VmenuCom from './vmenu';
import icons12 from '../../assess/icons12.svg'
import { Link } from 'react-router-dom';



const MotorComponent = () => {
  const[active, setActive ] = useState(true);
   function handleHmenu(){
   setActive(true);
  }
  function handleVmenu() {
    setActive(false);
  }

  return (
    
     <> 
     <div>    <NavbarComponet/></div>
    
     <div>
        <div className='homepage'>
           <div className='motor-con'>
             <p>Home / Motors</p>
              <h3 >Our ranges</h3>
              <h1 style={{fontWeight:"800"}}>Motors</h1>
           </div>
        </div>
     </div>
     
     <div className='all-con' >
        <div className='const-con' >
          <div>
            <h3>Cost of car</h3>
          </div>
          <b></b>
          <div className='input-con'>
            <div>
               <label htmlFor="">from</label>
               <input type="text" />
            </div>
               <div>
               <label htmlFor="">to</label>
               <input type="text" />
               </div>
            </div>
           <div className='brand'>
           <h3> Brand </h3>
           <img src={icons} alt="img" />
           </div>
            <b></b>
            <div className='aidal-con'>
              <div style={{display:"flex"}}>
              <input type="checkbox" />
              <label>escape</label>
              </div>
              <div style={{display:"flex"}}>
              <input type="checkbox" />
              <label>Aidal</label>
              </div>
              <div style={{display:"flex"}}>
              <input type="checkbox" />
              <label>escape</label>
              </div>
              </div>
            <div className='brand'>
           <h3> Company </h3>
           <img src={icons} alt="img" />
           </div>
            <b></b>
            

            <div className='aidal-con'>
              <div style={{display:"flex"}}>
              <input type="checkbox" />
              <label>escape</label>
              </div>
              <div style={{display:"flex"}}>
            
              <input type="checkbox" />
            <Link to={'/aidal'}>
            <label>Aidal</label>

            </Link>
              

              </div>
              
           </div>
           <div className='brand'>
           <h3> License type </h3>
           <img src={icons} alt="img" />
           </div>
            <b></b>
            <div className='aidal-con'>
              <div style={{display:"flex"}}>
              <input type="checkbox" />
              <label>1year</label>
              </div>
              <div style={{display:"flex"}}>
              <input type="checkbox" />
              <label>2years</label>
              </div>
              <div style={{display:"flex"}}>
              <input type="checkbox" />
              <label>3years</label>
              </div>
              </div>
          

            <div className='brand'>
           <h3> Number of travelers </h3>
           <img src={icons} alt="img" />
           </div>
            <b></b>
            <div className='aidal-con'>
              <div style={{display:"flex"}}>
              <input type="checkbox" />
              <label>2</label>
              </div>
              <div style={{display:"flex"}}>
              <input type="checkbox" />
              <label>3,4</label>
              </div>
              <div style={{display:"flex"}}>
              <input type="checkbox" />
              <label>5+</label>
              </div>
              </div>

            <div className='brand'>
           <h3> Location </h3>
           <img src={icons} alt="img" />
           </div>
            <b></b>
            <div className='aidal-con'>
              <div style={{display:"flex"}}>
              <input type="checkbox" />
              <label>Seoul</label>
              </div>
              <div style={{display:"flex"}}>
              <input type="checkbox" />
              <label>Korea</label>
              </div>
              <div style={{display:"flex"}}>
              <input type="checkbox" />
              <label>Busan</label>
              </div>
              </div>
        <div className='cancel-con'>
              <div>
                 <button className='can-but'>Cancel</button>
              </div>
              <div>
                 <button className='can-but1'>Search</button>
              </div>
      </div>
       <div>  <img src={icons12} alt="img" /></div>
   
      </div>

        <div style={{ display:"flex", flexDirection:"column", paddingTop:"30px", gap:"20px"}}>
           <div className="item-con">
           <div className='item-con2'>
              <div style={{flex:"1" }}>
                 <img src={item1} alt="img" />
              </div>
            <div style={{ display:"flex", flex:"1" ,gap:"10px"}}>
              <div style={{display:"flex", alignItems:"center"}}>
                   <label >Sort by</label>
                   <input className='input22' placeholder='Select' type="text" />
                    <button className='button1' ><img src={icons} alt="" /></button>
              </div>
              <div style={{display:"flex"}}>
                  <input className='input23' placeholder='60' type="text" />
                  <button className='button1'><img src={icons} alt="" /></button>
              </div>
              <div className='button1' style={{display:"flex", }}>
                  <button onClick={handleHmenu} ><img src={icons4} alt="img" /></button>
                  <button onClick={handleVmenu}><img src={icons3} alt="img" /></button>
              </div>
            </div>

          </div>
           <hr />
           </div>
          
           <div className='hvmenu'>
               {active ? <HmenuCom/> : <VmenuCom/>}
           </div>
        </div>
        
</div>
    
  
    
          
        

  
  
   
     


     
    <div><FooterComponet/></div>
     </>
  )
}

export default MotorComponent;

