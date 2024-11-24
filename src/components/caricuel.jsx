import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import caru from '../assess/home.svg';
import ccc2 from '../assess/home.svg';
import ccc3 from '../assess/home.svg';
import ccc4 from '../assess/home.svg';
import NavbarComponet from './navbar';
import FooterComponet from './footer';


const CaricuelComponent = () => {
  return (
          <>
          <NavbarComponet/>
             <Carousel autoPlay >
            
                <div style={{height:"300px"}}>
                    <img  src={caru} alt='img' />
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
            <div>
                dfddifhidhfidhf
            </div>

            <FooterComponet/>
</>

    
  )
}

export default CaricuelComponent;