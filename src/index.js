import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import Works from './components/Works';
//styles
import "./styles/index.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <Banner/>
    <Works/>
  </React.StrictMode>
);


