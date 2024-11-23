import React from 'react';
import '../components/footerstyle.css';


const FooterComponet = () => {
  return (
    <>
      <div className='footer-con'>
            <div className='camper-web'>
                <h1>Camper</h1>
             
             
           
            </div>
            <div>
               
            <h3>Services</h3> <br />
                 <p>Camping</p>
                 <p>Lodging</p>
                 <p>Day Use</p>
                
            </div>
            <div> 
      
                 <h3>Menu</h3><br />
                   <p>About  </p>
                   <p>Services  </p>
                   <p>Booking   </p>
                   <p> Blog</p>
            </div>
            <div>
            <h3>Contact    </h3> <br />
                <p>021 Korea Seul, LA                 </p>
                <p>camper@example.com                </p>
                <p>(021) 345-6789-99 </p>
            </div>
      </div>
    
    
    </>
  )
}

export default FooterComponet;