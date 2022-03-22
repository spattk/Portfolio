import React from 'react'
import './About.css'
import profPic from "../images/profpic.jpg"
// import resume from "../files/RamanResume.docx"
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
                <div className="text-section" data-aos ="fade-up" data-aos-duration="750">
                    <p className="text"> Hi, I'm Sitesh, a graduate student studying Computer Science at 
                    <a className = "highlight" target = "_blank" rel="noopener noreferrer" href="https://www.ics.uci.edu/"> UC Irvine</a>. 
                    I enjoy applying concepts of Computer Science. From building Scalable backend services to Machine
                    Learning, I am always interested in creating new innovative products. With my prowess in technical skill combined with the ability to understand people
                    , I feel I can help create a better tomorrow.</p>
                    <br/>
                    <p className = "text">Below are some of the projects I have done throughout my endeavors. Together, let's create something new. </p>
                    <br/>
                    <p>Here are some of the tools I have utilized in my work.</p>
                    <br/>
                    <div className="skills">
                        <div>
                            <h3>Languages</h3>
                            <ul className="skillCategory">
                                <li>Java</li>
                                <li>Python</li>
                                <li>C++</li>
                                <li>Rust</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Technologies</h3>
                            <ul className="skillCategory">
                                <li>Springboot</li>
                                <li>Django</li>
                                <li>Keras</li>
                                <li>TensorFlow</li>
                                <li>Pytorch</li>
                                <li>React.js</li>
                                <li>AWS</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div  className="image">
                    <img data-aos = "fade-down" data-aos-duration="750" src={profPic} alt=""></img>
                    {/* <div data-aos = "fade-up" data-aos-duration="750" data-aos-anchor=".image">
                        <HoverButton page={resume} text = "Resume" download="Resume.docx"></HoverButton>
                    </div> */}
                 </div>

               
                

            </div>

        </div>
    }
}

export default About;
