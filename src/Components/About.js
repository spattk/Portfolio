import React from 'react'
import './About.css'
import profPic from "../images/profpic.jpg"
import resume from "../files/Resume.docx"
import HoverButton from "./HoverButton.js"
import 'aos/dist/aos.css';

class About extends React.Component {

    render() {
        return <div id='about' className="about" >
            <div >
                <h1 data-aos="slide-right" data-aos-duration="1250">ABOUT</h1>
                <hr data-aos="slide-right" data-aos-duration="900" />
            </div>
            


            <div className="content">
                <div className="text-section" data-aos ="flip-down" data-aos-duration="750">
                    <p className="text"> Hi, I'm Raman, a second-year student studying Computer Science at 
                    <a className = "highlight" target = "_blank" rel="noopener noreferrer" href="https://www.ics.uci.edu/"> UC Irvine</a>. 
                    I enjoy exploring new concepts of Computer Science. From Web Development to Machine
                    Learning, I am always interested in creating new innovative products. I always try
                    to create change in the world through my work, one step at a time. </p>
                    <br/>
                    <p className = "text">Below are some of the projects I have done throughout my endeavors. Together, let's create something new. </p>
                    <br/>
                    <p>Here are some of the tools I have utilized in my work.</p>
                    <br/>
                    <div className="skills">
                        <div>
                            <h3>Languages</h3>
                            <ul className="skillCategory">
                                <li>Python</li>
                                <li>C++</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>C#</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Technologies</h3>
                            <ul className="skillCategory">
                                <li>Tensorflow</li>
                                <li>Keras</li>
                                <li>ReactJS</li>
                                <li>React Native</li>
                                <li>Flask</li>
                                <li>Unity</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div  className="image">
                    <img data-aos = "fade-down" data-aos-duration="750" src={profPic} alt=""></img>
                    <div data-aos = "fade-up" data-aos-duration="750" data-aos-anchor=".image">
                        <HoverButton page={resume} text = "Resume" download="Resume.docx"></HoverButton>
                    </div>
                 </div>

               
                

            </div>

        </div>
    }
}

export default About;
