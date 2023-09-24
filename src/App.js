import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Skills from './components/Skills';
import Portofolio from './components/Portofolio';

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Brands />
      <About />
      <Skills/>
      <Portofolio/>
      <div style={{height:'2000px'}}></div>
    </div>
  )
};

export default App;
