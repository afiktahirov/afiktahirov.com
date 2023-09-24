import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Skills from './components/Skills';
import Portofolio from './components/Portofolio';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Brands />
      <About />
      <Skills/>
      <Portofolio/>
      <Services />
    </div>
  )
};

export default App;
