import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'
import resume from '../pages/images/RESUME.pdf'


function Header(props) {
    return (
        <header style={{'background': props.colour, 'display': props.display}}>
            <Link className="title" to="/">Colin Lin's <span style={{'color': props.accent}}>Portfolio</span></Link>
            <div className="link-container">
                <Link className="link-style" to='/'>Home</Link>
                <a rel="noopener noreferrer" className="link-style" href={resume} download='Colin_Lin_Resume' target='_blank'>Resume</a>
                <Link className="link-style" to='/contact'>Contact</Link>
            </div>

        </header>
        
    )
} 

export default Header
