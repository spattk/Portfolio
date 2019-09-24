import React, { Component } from 'react'
import './HoverButton.css';

class HoverButton extends React.Component {

    render () {
        
        
        return <a href ={this.props.page} className="button" download={this.props.download} target={this.props.target}>
            <span>{this.props.text}</span>
        </a>
           
    }

}

export default HoverButton;