import React from 'react'
import './HoverButton.css';

class HoverButton extends React.Component {

    render () {
        
        
        return <a href={this.props.page} className={`button ${this.props.class}`} download={this.props.download} rel="noopener noreferrer" target={this.props.target}>
            <span>{this.props.text}</span>
        </a>
           
    }

}

export default HoverButton;