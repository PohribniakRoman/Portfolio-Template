import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Hire from './components/Hire';
import Navigation from './components/Navigation';
import Skills from './components/Skills';
import Works from './components/Works';
//styles
import "./styles/index.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <Banner/>
    <Works/>
    <Skills/>
    <Hire/>
    <Footer/>
  </React.StrictMode>
);


