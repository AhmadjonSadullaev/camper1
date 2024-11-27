
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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Inputdiv, Motordiv } from './styled';





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
            <FormGroup>
               <FormControlLabel control={<Checkbox defaultChecked />} label="르벤투스S+" />
                 <FormControlLabel  control={<Checkbox />} label="ST-7" />
                  <FormControlLabel  control={<Checkbox />} label="르벤투스 차박S" />
            </FormGroup>
              </div>
            <div className='brand'>
           <h3> Company </h3>
           <img src={icons} alt="img" />
           </div>
            <b></b>
            

            <div className='aidal-con'>
            <FormGroup>
               <FormControlLabel control={<Checkbox defaultChecked />} label="제일모빌" />
                 <FormControlLabel  control={<Checkbox />} label="다온티앤티" />
                  <FormControlLabel  control={<Checkbox />} label="Azure" />
            </FormGroup>
            

              </div>
              <div className='brand'>
           <h3> License type </h3>
           <img src={icons} alt="img" />
           </div>
            <b></b>
            <div className='aidal-con'>
            <FormGroup>
               <FormControlLabel control={<Checkbox defaultChecked />} label="1 years" />
                 <FormControlLabel  control={<Checkbox />} label="2 years" />
                  <FormControlLabel  control={<Checkbox />} label="4 years" />
            </FormGroup>
              </div>
              <div className='brand'>
           <h3> Number of travelers </h3>
           <img src={icons} alt="img" />
           </div>
            <b></b>
            <div className='aidal-con'>
            <FormGroup>
               <FormControlLabel control={<Checkbox defaultChecked />} label="4" />
                 <FormControlLabel  control={<Checkbox />} label="5" />
                  <FormControlLabel  control={<Checkbox />} label="6" />
            </FormGroup>
              </div>
              <div className='brand'>
           <h3> Location </h3>
           <img src={icons} alt="img" />
           </div>
            <b></b>
            <div className='aidal-con'>
            <FormGroup>
               <FormControlLabel control={<Checkbox defaultChecked />} label="Seoul" />
                 <FormControlLabel  control={<Checkbox />} label="Busan" />
                  <FormControlLabel  control={<Checkbox />} label="Korea" />
            </FormGroup>
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
           
      
         <Motordiv>
        
           <div className="item-con">
           <div className='item-con2'>
              <div style={{flex:"1" }}>
                 <img src={item1} alt="img" />
              </div>
            <div style={{ display:"flex", flex:"1" ,gap:"10px"}}>
              <div style={{display:"flex", alignItems:"center"}}>
                  
                 <Inputdiv>
                 <label >Sort by</label>
                  <input style={{width:"300px"}} type="text" />
                 </Inputdiv>
          
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
        
        </Motordiv>
        
</div>
    
  
    
          
        

  
  
   
     


     
    <div><FooterComponet/></div>
     </>
  )
}

export default MotorComponent;

