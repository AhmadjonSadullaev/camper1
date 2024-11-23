import React from 'react'
import NavbarComponet from '../navbar';
import FooterComponet from '../footer';
import '../campingplace/campingstyle.css';
import cam1 from '../../assess/camping/cam1.svg';
import cam2 from '../../assess/camping/cam2.svg';
import cam3 from '../../assess/camping/cam3.svg';

const CampingplaeComponents = () => {
  return (
    <>
     <div>
        <NavbarComponet/>
     </div>
           

      <div className="camping-img">
          <div className='camper'>
               <h3>Home / Camping place</h3><br /><br />
               <h1>Camping places</h1>
          </div>

      </div>
       <div className="camper3">
         <img src={cam1} alt="" />
         <img src={cam2} alt="" />
         <img src={cam3} alt="" />
         
       </div>
       <div className="camper3">
         <img src={cam1} alt="" />
         <img src={cam2} alt="" />
         <img src={cam3} alt="" />
         
       </div>
       <div className="camper3">
         <img src={cam1} alt="" />
         <img src={cam2} alt="" />
         <img src={cam3} alt="" />
         
       </div>
       <div className="camper3">
         <img src={cam1} alt="" />
         <img src={cam2} alt="" />
         <img src={cam3} alt="" />
         
       </div>



     <div>
       <FooterComponet/>
     </div>
    
    </>
  )
}

export default  CampingplaeComponents;