import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import RouterComponent from './routes';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



import 'react-responsive-carousel/lib/styles/carousel.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < BrowserRouter>  
<RouterComponent/>
 
  </ BrowserRouter>
);

