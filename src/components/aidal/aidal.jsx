import React from 'react'
import NavbarComponet from '../navbar';
import FooterComponet from '../footer';
import '../aidal/aidalstyle.css';
import img from '../../assess/aidal/aidal1.svg';
import aidal2 from '../../assess/aidal/aidal2.svg';
import aidal3 from '../../assess/aidal/aidal3.svg';
import aidal4 from '../../assess/aidal/aidal4.svg';
import aidal5 from '../../assess/aidal/aidal5.svg';
import  aidal6 from '../../assess/aidal/aidal6.svg';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const AidalComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div><NavbarComponet/></div>
       <div>
       <div className='motor-con'>
           <div className='aidal'>
              <h1 style={{fontWeight:"800"}}>Aidal</h1>
              </div>
              <div>
                 <button>ADD TO CART</button>
                 <button>COMPARE</button>
              </div>
           </div>
          <div className='aidal-con'>
            <div>
            <img src={img} alt="" />

            </div>
             <div>
                 

             </div>
            
           </div>
         <div className='aidal-wapper'>
             <div className='comfort'>
              <div className='comfortp'>
              <p> <h2>Comfort</h2><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.

                </p>
              </div>
                <div>
                <img src={aidal2} alt="img" />
                </div>
                
             </div>
             <div className='comfort'>
          
            <div>
                <img src={aidal3} alt="img" />
              </div>   
           <div className='comfortp'>
           <p> <h2>Tidying away is child’s play!</h2><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.

                </p>

           </div>
             
             </div>
             <div className='comfort'>
              <div className='comfortp'>
              <p> <h2>Ventilated , Lit up</h2><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.

                </p>

              </div>
             <div>
             <img src={aidal4} alt="img" />
             </div>
             
             </div>
             <div className='comfort'>
           <div>
             <img src={aidal5} alt="img" />

           </div>
             <div className='comfortp'>
             <p> <h2>Easy access</h2><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.
                </p>

             </div>
             
             </div>
             <div className='comfort'>
              <div className='comfortp'>
              <p> <h2>Heating when driving</h2><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.

                </p>
              </div>
              <div>
              <img src={aidal6} alt="img" />
              </div>
          
             </div>
;



         </div>

         <div>
         <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item reviews"/>
            
        <Tab label="Q&A  "/>
        <Tab label="FAQ" />
        <Tab label="Contact" />
      </Tabs>
    </Box>

         </div>


       
       
       </div>    
      <div><FooterComponet/></div>
    </>
  )
}

export default AidalComponent;