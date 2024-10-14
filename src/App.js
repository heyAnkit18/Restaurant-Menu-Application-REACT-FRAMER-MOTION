import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import './index.css';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={theme}>
      <Navbar toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Menu />
      <Reviews />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;




