import React from 'react'
import './Contact.css'
import HoverButton from "./HoverButton.js"
import 'aos/dist/aos.css';

class About extends React.Component {

    render() {
        return <div id='contact' >
            <div >
                <h1 data-aos="slide-left" data-aos-duration="1250">Contact</h1>
                <hr data-aos="slide-left" data-aos-duration="900" />
            </div>

            <div className="information">
                <p>I am currently looking for a Software Engineering Internship, but
                feel free to contact me for anything. If you have any questions about my projects, or are
                looking for a new team member, please do let me know! My e-mail is ramanxg@gmail.com,
                or you can click below.</p>

                <HoverButton target="_blank" page="mailto:ramanxg@gmail.com" text="Email Me!"></HoverButton>

            </div>

            <div className="icons">

            </div>

        </div>
    }
}

export default About;
