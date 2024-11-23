import React from 'react'
import NavbarComponet from '../navbar';
import FooterComponet from '../footer';
import '../components/homestyle.css';
import icons from '../assess/icons.svg';
import group1 from '../assess/group1.svg';
import item1 from '../assess/item1.svg';
import icons4 from '../assess/icons4.svg';
import icons3 from '../assess/icons3.svg';




const HomeComponent = () => {
 // const[ative, setActive ] = useState(true);
 // function handleHmenu(){
  //  setActive(true);
  //}
 // function handleVmenu() {
 //   setActive(false);
 //const[ative, setActive ] = useState(true);
 
  return (
    <>
     <div>
         <NavbarComponet/>
     </div>
     <div>
       <div className='home-con'>
            <div className="home-img-con">
              <p>Home / Motors</p>
              <h3 >Our ranges</h3>
              <h1>Motors</h1>
            </div>
        </div>
     </div>
  < div className='home-con121' >  
  <div> 
    < div className='cost-car'>
            <h3>Cost of car</h3>
        </div>
        <b></b>
        <div className='input-con'>
            <div>
          <label>from</label><br/>
          <input type="text" />
          </div>
          <div>
          <label>to</label>
          <input type="text" />
          </div>
        </div>
        <div className='brand'>
            <h3> Brand </h3>
            <img src={icons} alt="img"/>
        </div>
         <b></b>
        
         <div className='aidal-con'>
            <input type="checkbox" />
             <label>Aidal</label><br />
             <input type="checkbox" />
             <label>Knal</label><br />
             <input type="checkbox" />
             <label>escape</label>
         </div>
         
         <div className='brand'>
            <h3> Company </h3>
            <img src={icons} alt="img"/>
        </div>
        <b></b>
         <div className='aidal-con'>
            <input type="checkbox" />
             <label>escape</label><br />
             <input type="checkbox" />
             <label>Aidal</label>
            
         </div>
        
         <div className='brand1'>
            <h3> License type </h3>
            <img src={icons} alt="img"/>
        </div>
        <b></b>
         <div className='aidal-con'>
            <input type="checkbox" />
             <label>1 year</label><br />
             <input type="checkbox" />
             <label>2years</label><br />
             <input type="checkbox" />
             <label>1.5year</label>
         </div>
         <div className='brand2'>
            <h3> Number of travelers </h3>
            <img src={icons} alt="img"/>
        </div>
         <b></b>
        
         <div className='aidal-con'>
            <input type="checkbox" />
             <label>2</label><br />
             <input type="checkbox" />
             <label>3-4</label><br />
             <input type="checkbox" />
             <label>5+</label>
         </div>
         <div className='brand'>
            <h3> Location </h3>
            <img src={icons} alt="img"/>
        </div>
         <b></b>
        
         <div className='aidal-con'>
            <input type="checkbox" />
             <label>Seoul</label><br />
             <input type="checkbox" />
             <label>Korea</label><br />
             <input type="checkbox" />
             <label>Busan</label>
         </div>
          <div className='cancel-con'>
              <div>
                 <button className='can-but'>Cancel</button>
              </div>
              <div>
                 <button className='can-but1'>Search</button>
              </div>
          </div>
          <div className='group2' >
          <img src={group1} alt="img" /> 
          </div>
</div>




      <div style={{ display:"flex", flexDirection:"column", paddingTop:"30px", gap:"20px"}}>
   <div className='item-con1 '>
          <div className='item-con2'>
              <div style={{flex:"1" }}>
                 <img src={item1} alt="img" />
              </div>
            <div style={{ display:"flex", flex:"1" ,gap:"10px"}}>
              <div style={{display:"flex"}}>
                   <label >Sort by</label>
                   <input className='input22' placeholder='Select' type="text" />
                    <button className='button1' ><img src={icons} alt="" /></button>
              </div>
              <div style={{display:"flex"}}>
                  <input className='input23' placeholder='60' type="text" />
                  <button className='button1'><img src={icons} alt="" /></button>
              </div>
              <div style={{display:"flex", }}>
                  <button><img src={icons4} alt="img" /></button>
                  <button><img src={icons3} alt="img" /></button>
              </div>
            </div>

          </div>
     
    </div>
       <div className='HVmenu'>
          
       </div>
 </div>
 </div>
          

     <div > 
       <FooterComponet/>
     </div>
    
    
    
    
    </>
  )
}

export default HomeComponent;