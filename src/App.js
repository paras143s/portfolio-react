import React from 'react';
import './styles/main.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <article>
          <Hero />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default App;