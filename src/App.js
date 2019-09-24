import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js'
import HoverButton from './Components/HoverButton.js'
import About from './Components/About.js'
import Projects from './Components/Projects.js'
import Contact from './Components/Contact.js'
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init()

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <header className="App-heading" id="home" data-aos="fade-up" data-aos-duration="1000">
        
        <p className="greeting">
          Hello, my name is <a className="name" >Raman Gupta</a>
        </p>
        <p>
          I am a Creator.
        </p>
        <br/>
        <HoverButton page="#about" text="See my work"></HoverButton>
        
      </header>
      <NavBar>        
      </NavBar>
      <About></About>

      <Projects></Projects>

      <Contact></Contact>
      
    </div>
    
    
  );
}

export default App;
