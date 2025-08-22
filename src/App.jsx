import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Lifestyle from './pages/Lifestyle';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Education />
        <Work />
        <Skills />
        <Lifestyle />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

