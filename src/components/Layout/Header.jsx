import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

function Header(props) {
    return (
        <header style={{'background': props.colour, 'display': props.display}}>
            <Link className="title" to="/">Portfolio <span style={{'color': props.accent}}>Page</span></Link>
            <div className="link-container">
                <Link className="link-style" to='/'>Home</Link>
                <Link className="link-style" to='/about'>About</Link>
                <Link className="link-style" to='/contact'>Contact</Link>
            </div>

        </header>
        
    )
} 

export default Header
