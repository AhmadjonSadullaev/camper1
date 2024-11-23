import React from "react";
import {  Route, Routes,  } from "react-router-dom";
import CampingplaeComponents from "./components/campingplace/campingplace";
import CaravanComponents from "./components/caravan/carvan";
import MotorComponent from "./components/motor/motor";
import Notfound from "./components/notfound";
import TuningComponent from "./components/tuning/tuning";
import UsedcarComponent from "./components/usedcar/usedcar";
import CaricuelComponent from "./components/caricuel";
import AidalComponent from "./components/aidal/aidal";
import OrderComponent from "./components/order/order";
import LoginComponent from "./components/login/login";







const RouterComponent = () => {
 
  return (
     <>
          <Routes>
         
             <Route  path="/motor" element={<MotorComponent/>} />
              <Route path="/caravan" element={<CaravanComponents/>}  />
              <Route path="/camping" element={<CampingplaeComponents/>}  />
               <Route path="/tuning" element={<TuningComponent/>}  />
               <Route path="/usedcar" element={<UsedcarComponent/>} />
               <Route path="/" element={<CaricuelComponent/>} />
               <Route path="/login" element={<LoginComponent/>}/>
               <Route path="/order" element={<OrderComponent/>}/>
               <Route path="/aidal" element={<AidalComponent/>}  />
              <Route path="*"  element={<Notfound/>} />
            
           </Routes>    
     </>
  );
};

export default RouterComponent;