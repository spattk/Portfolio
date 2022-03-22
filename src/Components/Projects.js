import React from 'react'
import "./Projects.css"
import 'aos/dist/aos.css';
import gitimage from "../images/github.svg"
import neuralnet from "../images/neuralnet.png"
import convnet from "../images/convnet.png"
import reco from "../images/reco.png"
import twit from "../images/twitter.jpg"
import gride from "../images/gride.jpg"
import card from "../images/cARd.jpg"
import allerg from "../images/allergize.jpg"
import portal from "../images/portal.png"

class Projects extends React.Component {

    render() {
        return <div id = "projects" className = "projects">
            <h1 data-aos="slide-left" data-aos-duration="1250">PROJECTS</h1>
            <hr data-aos="slide-left" data-aos-duration="900" />
            
            <div className = "portfolio">
                <h2 className="title" data-aos="fade-right">Machine Learning</h2>
                <div className="categories ml-projects">
                    <a target="_blank" href="https://github.com/spattk/lstm-intent-classifier" 
                    rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="500" data-aos-duration="750" className="example">

                            <div className="base">
                                <div className="image-container">
                                    
                                    <h3>Intent Classifier</h3>
                                    <p>This intent classifier is trained on the CLINC150 dataset. I have used sklearn to partion 
                                    the data into train and test, and used Bi-directional LSTM to be trained on the data. 
                                    </p>
                                    
                                    <img src={neuralnet} alt="" className="label-img"></img>
                                </div>
                                <ul className="tool-list">
                                    <li>Python</li>
                                    <li>Tensorflow</li>
                                    <li>Keras</li>
                                    <li>LSTM</li>
                                    <li>RNN</li>
                                </ul>
                            </div>
                            
                            <div className="overlay">
                                <div className="github">
                                    <p> See the Code on Github! </p>
                                    <img src={gitimage} alt="Octocat" className="git-image"></img>
                                </div>
                                
                            </div>
                    </a>

                </div>
                <h2 className="title" data-aos="fade-right">App Development</h2>
                <div className="categories web-projects">
                <a target="_blank" rel="noopener noreferrer" href="" 
                    data-aos-delay="500" data-aos-duration="750" data-aos="fade-up" className="example">

                        <div className="base">
                            
                            <div className="image-container">
                                <h3>Relational DBMS</h3>
                                <p>• Built a relational database management system from ground up using C++.</p>
                                <p>• Implemented Paged File Manager, Record Based File Manager, Relation Manager, Buffer Manager and B+ Tree Un-clustered Index Manager.</p>
                                <p>• Completed CRUD operations of more than 1M bulk records within 30s using optimized slot directory metadata page.</p>
                                <p>• Implemented Query Engine, relational operations and joined more than 200k records using Block Nested Loop Join.</p>
                                <img src={reco} alt="" className="label-img"></img>
                            </div>
                            
                            <ul className="tool-list">
                                <li>C++</li>
                                <li>GoogleTest</li>
                                <li>CMake</li>
                                <li>Valgrind</li>
                                <li>GDB</li>
                                <li>g++</li>
                                
                            </ul>
                        </div>

                        <div className="overlay">
                            <div className="github">
                                <p> See the Code on Github! </p>
                                <img src={gitimage} alt="Octocat" className="git-image"></img>
                            </div>
                            
                        </div>
                    </a>
                    

                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/spattk/kryptonite" 
                    data-aos-delay="500" data-aos-duration="750" data-aos="fade-up" className="example">

                        <div className="base">
                            
                            <div className="image-container">
                                <h3>Dynamic Content Management System</h3>
                                <p>A website that is used for AASRA, a social service club of National Institute of Technology, Rourkela, India.
                                    The website includes member details, profiling of the students studying and latest upto date events.
                                    With this update, I have re-engineered the whole system using Model View Controller (MVC) paradigm. <br/>
                                    It helped enhance loading and access speed of the website by 49% (verified using Pagespeed Insights).
                                </p>
                                <img src={portal} alt="" className="label-img"></img>
                            </div>
                            
                            <ul className="tool-list">
                                <li>JavaScript</li>
                                <li>CodeIgniter</li>
                                <li>SQL</li>
                                <li>PHP</li>
                                <li>jQuery</li>
                                <li>AJAX</li>
                                
                            </ul>
                        </div>

                        <div className="overlay">
                            <div className="github">
                                <p> See the Code on Github! </p>
                                <img src={gitimage} alt="Octocat" className="git-image"></img>
                            </div>
                            
                        </div>
                    </a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/spattk/zothacks"
                    data-aos-delay="500" data-aos-duration="750" data-aos="fade-up" className="example">

                        <div className="base">
                            <div className="image-container">
                                <h3>Zot Point Average (ZotHacks 2021 - First)</h3>
                                <p>A website that lets users post rides for others to join and reach a common
                                destination. Project created at SBHacks 2020 with a team of 4.
                                I was responsible for designing the Firebase database for storing ride information 
                                and creating interaction between the client website and the database.</p>
                                
                                    <img src={gride} alt="" className="label-img"></img>
                            </div>
                            
                            <ul className="tool-list">
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>jQuery</li>
                                <li>Chart.js</li>

                            </ul>
                        </div>

                        <div className="overlay">
                            <div className="github">
                                <p> See the Code on Github! </p>
                                <img src={gitimage} alt="Octocat" className="git-image"></img>
                            </div>
                            
                        </div>
                    </a>
                    
                    
                </div>
            </div>
            

        </div>

    };
}

export default Projects;