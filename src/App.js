import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js'
import HoverButton from './Components/HoverButton.js'
import About from './Components/About.js'
import Projects from './Components/Projects.js'
import Contact from './Components/Contact.js'
import Particles from 'react-particles-js';
import particleConfig from './files/particlesjs-config.json'
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init()

console.log(particleConfig)

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <header className="App-heading" id="home" data-aos="fade-up" data-aos-duration="1000">
        <Particles className="particle-container" params={particleConfig} />
        <div style={{position: "absolute"}}>
           
            <p className="greeting">
              Hello, my name is <span className="name" >Raman Gupta</span>.
            </p>
            <p>
              I am a Creator.
            </p>
            <br/>
            <HoverButton page="#about" text="See my work"></HoverButton>
          
          
        </div>
        
      </header>
      <NavBar>        
      </NavBar>
      <About></About>

      <Projects></Projects>

      <Contact></Contact>

      <footer>
        <a href="https://github.com/ramanxg/Portfolio" target="_blank" rel="noopener noreferrer">Designed and Built by Raman Gupta</a>
      </footer>
      
    </div>
    
    
  );
}

export default App;
