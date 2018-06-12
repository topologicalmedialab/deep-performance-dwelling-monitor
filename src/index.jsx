import React from 'react';
import ReactDOM from 'react-dom';

import IndexPage from './pages/index-page/index-page.jsx';

// liquid light pages
import LiquidLightPage from './pages/liquid-light/liquid-light-page.jsx';
import LiquidLightModesPage from './pages/liquid-light/liquid-light-modes-page.jsx';

// passing light pages
import PassingLightPage from './pages/passing-light/passing-light-page.jsx';
import PassingLightModesPage from './pages/passing-light/passing-light-modes-page.jsx';


ReactDOM.render(
  <div className="centered-content">
    <IndexPage />
    <LiquidLightPage />
    <LiquidLightModesPage />
    <PassingLightPage />
    <PassingLightModesPage />
  </div>
  ,
  document.getElementById('root')
);
