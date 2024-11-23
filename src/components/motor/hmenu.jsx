import React from 'react';
import '../motor/motorstyle.css';
import { motordata } from '../mock/motor (2)';
import { HContainer, Maincontainer } from './styled';


const HmenuCom = () => {
  console.log( motordata);
  return (
     <div style={{display: "flex",}}>
      <Maincontainer>
        {motordata.map((value,index) =>{
           return(
               <HContainer key={value.id}>
                 <img src={value.car.photo} alt="" />
                  <p>{value.car.name}</p>
                  <p>{value.car.cost}</p>
                  <p>{value.car.company}</p>
                 <div style={{display: "flex",justifyContent:"space-around", }}>
                    <button className='buttin'  >Order</button>
                     <button className='buttin'>Compare</button>
                 </div>
                 
                 
                
                

               </HContainer>



          )


        })}
         </Maincontainer>
     </div>


  )
   

 
}

export default HmenuCom;