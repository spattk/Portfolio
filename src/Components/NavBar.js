import React from 'react'
import './NavBar.css';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollPos: window.pageYOffset,
        }
    };

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    handleScroll = (event) => {
        this.setState({
          scrollPos: window.pageYOffset,
        });
    };

    render() {


        var fixed = this.state.scrollPos > 615;

        return <div className={fixed ? 'navbar-fixed' : ''}>
            <ul>
                <li><a className="link" href="#home">Home</a></li>
                <li><a className="link" href="#about">About</a></li>
                <li><a className="link" href="#projects">Projects</a></li>
                <li><a className="link" href="#contact">Contact</a></li>
            </ul>
        </div>
    }
}

export default NavBar;