import React from 'react'
import "./Projects.css"
import 'aos/dist/aos.css';
import gitimage from "../images/github.svg"
import neuralnet from "../images/neuralnet.png"
import convnet from "../images/convnet.png"
import reco from "../images/reco.png"
import twit from "../images/twitter.jpg"
import reclaim from "../images/website.png"
import card from "../images/cARd.jpg"

class Projects extends React.Component {

    render() {
        return <div id = "projects" className = "projects">
            <h1 data-aos="slide-left" data-aos-duration="1250">PROJECTS</h1>
            <hr data-aos="slide-left" data-aos-duration="900" />
            
            <div className = "portfolio">
                <h2 className="title" data-aos="fade-right">Machine Learning</h2>
                <div className="categories ml-projects">
                    <a target="_blank" href="https://github.com/ramanxg/Sentiment-Analysis-Model" 
                    rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="500" data-aos-duration="750" className="example">

                            <div className="base">
                                <div className="image-container">
                                    
                                    <h3>Sentiment Analysis</h3>
                                    <p>A Sentiment Analysis model trained on Kaggle's Rotten Tomatoes
                                    Moview Review Dataset. I used NLTK to preprocess the movie review data,
                                    and created a Recurrent Neural Network to be trained on the data. I also
                                    deployed the model onto an API that will analyze the latest 100 tweets of
                                    a topic. </p>
                                    
                                    <img src={neuralnet} alt="" className="label-img"></img>
                                </div>
                                <ul className="tool-list">
                                    <li>Python</li>
                                    <li>Tensorflow</li>
                                    <li>Keras</li>
                                    <li>NLTK</li>
                                    <li>Flask</li>
                                    <li>Tweepy</li>
                                </ul>
                            </div>
                            
                            <div className="overlay">
                                <div className="github">
                                    <p> See the Code on Github! </p>
                                    <img src={gitimage} alt="Octocat" className="git-image"></img>
                                </div>
                                
                            </div>
                    </a>
                    

                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ramanxg/Sentiment-Analysis-Model"
                    data-aos-delay="500" data-aos-duration="750" data-aos="fade-up" className="example">
                        
                            <div className="base">
                                <div className="image-container">
                                    <h3>Fruits Image Classifier</h3>
                                    <p>An Image Classification model trained on Kaggle's Fruits-360 Dataset
                                    to classify different types of fruits. I used OpenCV and NumPy to preprocess 
                                    the images and created a Convolutional Neural Network to be trained on the data
                                    that reached 97% accuracy on the test set. The model was deployed onto an API. </p>
                                    
                                        <img src={convnet} alt="" className="label-img"></img>
                                </div>
                                
                                <ul className="tool-list">
                                    <li>Python</li>
                                    <li>Tensorflow</li>
                                    <li>Keras</li>
                                    <li>Flask</li>
                                    <li>OpenCV</li>
                                    <li>NumPy</li>
                                    
                                </ul>
                            </div>
                            
                            <div className="overlay">
                                <div className="github">
                                    <p> See the Code on Github! </p>
                                    <img src={gitimage} alt="Octocat" className="git-image"></img>
                                </div>
                                
                            </div>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ramanxg/Movie-Recommender"
                    data-aos-delay="500" data-aos-duration="750" data-aos="fade-up" className="example">
                        
                            <div className="base">
                                
                                <div className="image-container">
                                    <h3>Movie Recommendation</h3>
                                    <p>A Movie Recommendation System based from Kaggle's MovieLens dataset. The system uses
                                    Demographic Filtering, Content Based Filtering, and Item-based Collaborative Filtering, 
                                    to create recommendations. Pandas and NumPy was used for data manipulation, and Scikit-Learn
                                    for kernels.
                                    </p>
                                    <img src={reco} alt="" className="label-img"></img>
                                </div>
                                
                                <ul className="tool-list">
                                    <li>Python</li>
                                    <li>Pandas</li>
                                    <li>NumPy</li>
                                    <li>Scikit-Learn</li>
                                    
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
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ramanxg/TwitterSentiment"
                    data-aos-delay="500" data-aos-duration="750" data-aos="fade-up" className="example">

                        <div className="base">
                            <div className="image-container">
                                
                                <h3>Tweet Sentiments</h3>
                                <p>An Android App that can take an input of any topic or word, and return
                                the average sentiment of the latest 100 tweets. I used the API created with
                                my Sentiment Analysis model. </p>
                                
                                <img src={twit} alt="" className="label-img app-img"></img>
                            </div>
                            <ul className="tool-list">
                                <li>JavaScript</li>
                                <li>React Native</li>
                            </ul>
                        </div>

                        <div className="overlay">
                            <div className="github">
                                <p> See the Code on Github! </p>
                                <img src={gitimage} alt="Octocat" className="git-image"></img>
                            </div>
                            
                        </div>
                    </a>


                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/chenaaron3/CitrusHacks2019"
                    data-aos-delay="500" data-aos-duration="750" data-aos="fade-up" className="example">

                        <div className="base">
                            <div className="image-container">
                                <h3>reclaimEarth</h3>
                                <p>A crowdsourcing website that lets users ping locations with a lot
                                of litter on Google Maps. Project created at CitrusHack 2019 with a team of 3.
                                I was responsible for implementing the Google Maps API and incorporating Firebase
                                databases with users. We deployed the website through Heroku.</p>
                                
                                    <img src={reclaim} alt="" className="label-img"></img>
                            </div>
                            
                            <ul className="tool-list">
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Flask</li>
                                <li>Firebase</li>
                                <li>Google Maps API</li>

                            </ul>
                        </div>

                        <div className="overlay">
                            <div className="github">
                                <p> See the Code on Github! </p>
                                <img src={gitimage} alt="Octocat" className="git-image"></img>
                            </div>
                            
                        </div>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ramanxg/cARd" 
                    data-aos-delay="500" data-aos-duration="750" data-aos="fade-up" className="example">

                        <div className="base">
                            
                            <div className="image-container">
                                <h3>cARd</h3>
                                <p>An Android app that lets users manipulate a deck of cards in an Augmented
                                Reality Environment. Through AppDev Club, we assembled a team of 4 to take on
                                this project, and I was responsible for creating card renders, and separting
                                the playing field and hand. We used ARCore anchors to generate cards in the
                                environment. 
                                </p>
                                <img src={card} alt="" className="label-img"></img>
                            </div>
                            
                            <ul className="tool-list">
                                <li>C#</li>
                                <li>Unity</li>
                                <li>Google ARCore</li>
                                
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