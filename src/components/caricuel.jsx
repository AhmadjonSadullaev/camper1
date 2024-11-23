import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ccc1 from '../assess/ccc1.jpg';
import ccc2 from '../assess/ccc2.jpg';
import ccc3 from '../assess/ccc3.jpg';
import ccc4 from '../assess/ccc4.webp';
import NavbarComponet from './navbar';
import FooterComponet from './footer';


const CaricuelComponent = () => {
  return (
          <>
          <NavbarComponet/>
             <Carousel avtoplay
             //showArrows={true} 
             //onChange={onChange}
             // onClickItem={onClickItem} 
             //onClickThumb={onClickThumb}
             >
            
                <div>
                    <img  src={ccc1} alt='img' />
                    <p className="legend">camper</p>
                </div>
                <div>
                    <img src={ccc2} alt='img'  />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={ccc3}  alt='img' />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={ccc4}  alt='img' />
                    <p className="legend">Legend 4</p>
                </div>
              
            </Carousel>
            <FooterComponet/>
</>

    
  )
}

export default CaricuelComponent;