import React from 'react';
import ReactDOM from 'react-dom';

import IndexPage from './pages/index-page/index-page.jsx';
import LiquidLightPage from './pages/liquid-light/liquid-light-page.jsx';


ReactDOM.render(
  <div className="centered-content">
    <IndexPage />
    <LiquidLightPage /> 
  </div>
  ,
  document.getElementById('root')
);
