import React from 'react';
import icons from '../assess/icons.svg';
import cart from '../assess/shopping-cart.svg';
import profil from '../assess/profil.svg';
import en from '../assess/en.svg';
import '../components/navbar.css';
import { Link } from 'react-router-dom';

 const NavbarComponet = () => {
  return (
    <>
        <div className='navbar-con'>
            <div>
                 <Link to={'/'} style={{ textDecoration: 'none'}}>
                 <h2>Camper</h2>
                 </Link>
        
             
            </div>
            <div className='navbar-wap'>
             <Link to={'/motor'} style={{ textDecoration: 'none'}}>
                <p>Motor <img src={icons} alt="img" /> </p>
                </Link>
                <Link to={'/caravan'} style={{ textDecoration: 'none'}}>
                <p>Caravan <img src={icons} alt="img" /></p>
                </Link>
               <Link to={'/tuningcar'} style={{ textDecoration: 'none'}} >
                <p>Tuning <img src={icons} alt="img" /> </p>
               </Link>
                <Link to= {'/usedcar'} style={{ textDecoration: 'none'}}>
                <p>Used Car <img src={icons} alt="img" /></p>
                </Link>
                <Link to={'/camping'} style={{ textDecoration: 'none'}}>
                <p>Camping Place <img src={icons} alt="img" /></p>
                </Link>
            </div>
             <div className='nav-img'>
                 <img src={cart} alt="imege" />
               <Link to={'/login'} style={{ textDecoration: 'none'}}>
               <img src={profil} alt="img" />
               </Link>
              
                 <img src={en} alt="img" />
             </div>
        </div>
    </>
  )
}

export default NavbarComponet;