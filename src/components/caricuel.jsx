import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import caru from '../assess/home.svg'; 
import ccc2 from '../assess/home.svg';
import ccc3 from '../assess/home.svg';
import ccc4 from '../assess/home.svg';
import NavbarComponet from './navbar';
import FooterComponet from './footer';
import img1 from '../assess/motor/car1.svg';
import img2 from '../assess/motor/car2.svg';
import img3 from '../assess/motor/car3.svg';
import img4 from '../assess/motor/car4.svg';
import img5 from '../assess/motor/car4.svg';
import img11 from '../assess/caru/img1.png';
import img22 from '../assess/caru/img2.png';
import img33 from '../assess/caru/img3.png';
import img44 from '../assess/caru/img4.png';
import img55 from '../assess/caru/img5.png';
import img6 from '../assess/caru/img6.png';
import img7 from '../assess/caru/img7.png';
import img8 from '../assess/caru/img8.png';
import { Carusel, Carusels, Divs, Last } from './styled';
import res from '../assess/caru/rec.svg';
import res1 from '../assess/caru/rec1.svg';
import res2 from '../assess/caru/rec2.svg';
import res3 from '../assess/caru/rec3.svg';
import res4 from '../assess/caru/rec4.svg';
import res5 from '../assess/caru/rec5.svg';


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
                <div style={{textAlign:'center',}}>
                    <h2>Recommend</h2>
                </div>
                <div style={{display:"flex", overflow:"scroll" ,alignItems:"center",justifyContent:"flex-start", gap:"30px" ,
                    padding:"30px"}}>
                    <div>
                      <img src={img1} alt="" />
                      <p>Knaus</p>
                      <button style={{width:"200px",height:"45px",backgroundColor:"#006DAB", color:"white"}}>Discover the range</button>
                      <p>Choose a model</p>
                    </div>
                    <div>
                      <img src={img2} alt="" />
                      <br/>
                      <p>Knaus</p>
                      <button style={{width:"200px",height:"45px",backgroundColor:"#006DAB", color:"white"}}>Discover the range</button>
                      <p>Choose a model</p>
                    </div>
                    <div>
                      <img src={img3} alt="" />
                      <p>Knaus</p>
                      <button style={{width:"200px",height:"45px",backgroundColor:"#006DAB", color:"white"}}>Discover the range</button>
                      <p>Choose a model</p>
                    </div>
                    <div>
                      <img src={img4} alt="" />
                      <p>Knaus</p>
                      <button style={{width:"200px",height:"45px",backgroundColor:"#006DAB", color:"white"}}>Discover the range</button>
                      <p>Choose a model</p>
                    </div>
                    <div>
                      <img src={img5} alt="" />
                      <p>Knaus</p>
                      <button style={{width:"200px",height:"45px",backgroundColor:"#006DAB", color:"white"}}>Discover the range</button>
                      <p>Choose a model</p>
                    </div>
                    <div>
                      <img src={img1} alt="" />
                      <p>Knaus</p>
                      <button style={{width:"200px",height:"45px",backgroundColor:"#006DAB", color:"white"}}>Discover the range</button>
                      <p>Choose a model</p>
                    </div>
                    <div>
                      <img src={img4} alt="" />
                      <p>Knaus</p>
                      <button style={{width:"200px",height:"45px",backgroundColor:"#006DAB", color:"white"}}>Discover the range</button>
                      <p>Choose a model</p>
                    </div>

                </div>
 

            </div>
             <div style={{display:"flex",flexDirection:"column" ,padding:"30px",alignItems:"center",justifyContent:"center" }}>
                  <div style={{textAlign:"center"}}>
                       <h2>Videos</h2>
                    </div> 
                    <Carusel>
                      <div><img src={img11} alt="img" /></div>
                       <div><img src={img22} alt="img" /></div>
                        <div><img src={img33} alt="img" /></div>
                        <div><img src={img44} alt="img" /></div>
                      <div>  <img src={img55} alt="img" /> </div>
                      <div><img src={img6} alt="img" />   </div>
                      <div><img src={img7} alt="img" /></div>
                      <div><img src={img8} alt="img" /></div>
                       
                   
                      </Carusel>

             </div>
             <Carusels>
                   <div>
                       <h2>Camper</h2>
                       <br />
                       <Divs> Camping truly is for everyone, from your oldest family member to little campers just trekking out for the first time. Whether your plan is to relax, explore or reconnect, CAMPER campgrounds are a great place to create memories with those you love.</Divs>
                   </div>
                   <Last>
                      <img src={res} alt="img"/>
                      <img src={res1} alt="img" />
                      <img src={res2} alt="img" />
                      <img src={res3} alt="img" />
                      <img src={res4} alt="img" />
                      <img src={res5} alt="img" />
                  </Last>
                
             </Carusels>

            <FooterComponet/>
</>

    
  )
}

export default CaricuelComponent;