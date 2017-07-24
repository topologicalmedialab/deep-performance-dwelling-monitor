import React from 'react';
import ReactDOM from 'react-dom';

import IndexPage from './pages/index-page/index-page.jsx';

// liquid light pages
import LiquidLightPage from './pages/liquid-light/liquid-light-page.jsx';
import LiquidLightModesPage from './pages/liquid-light/liquid-light-modes-page.jsx';


ReactDOM.render(
  <div className="centered-content">
    <IndexPage />
    <LiquidLightPage />
    <LiquidLightModesPage />
  </div>
  ,
  document.getElementById('root')
);
