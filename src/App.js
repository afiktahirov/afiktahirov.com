import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Skills from './components/Skills';
import Portofolio from './components/Portofolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
};

export default App;
