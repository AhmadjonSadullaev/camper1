import React from 'react'
import { caravandata } from '../mock/caravan';

import { HContainer, Maincontainer } from '../motor/styled';

const Hcaravan = () => {
   console.log(caravandata);
   
  return (
    <div style={{display: "flex",gap:"20px"}}>
    <Maincontainer>
      {caravandata.map((value,index) =>{
         return(
             <HContainer key={value.id}>
               <img src={value.car.photo} alt="img" />
                <p>{value.car.name}</p>
                <p>{value.car.cost}</p>
                <p>{value.car.company}</p>
                <div style={{display: "flex",justifyContent:"space-around", }}>
                    <button className='buttin'  >Order</button>
                     <button className  ='buttin'>Compare</button>
               
                  </div>

             </HContainer>



        )


      })}
       </Maincontainer>
   </div>

  )
}

export default Hcaravan;