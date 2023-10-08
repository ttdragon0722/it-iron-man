import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HomePage from './page/home/Home';
import Basket from './page/Basket/Basket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage></HomePage>
    {/* <Basket></Basket> */}
  </React.StrictMode>
);
