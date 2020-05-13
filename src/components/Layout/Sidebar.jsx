import React from 'react'
import './Sidebar.css';
import {Link} from 'react-router-dom';
import resume from '../pages/images/RESUME.pdf'



export default function Sidebar(props) {
    return (     
      <div style={{'display': props.display}}>
        <header style={{'background': props.colour}}>
          <Link className="title" to="/" style={{'display': props.textdisplay}}>Colin Lin's <span style={{'color': props.accent}}>Profile</span></Link>
        </header>  
        <div className="menu-wrap" >
          <input type="checkbox" className="toggler"/>
            <div className="hamburger"><div></div></div>
              <div className="menu">
                <div>
                  <div>
                    <ul>
                    <li><Link className="link-style" to='/'>Home</Link></li>
                    <li><a rel="noopener noreferrer" className="link-style" href={resume} target='_blank'>Resume</a></li>
                    <li><Link className="link-style" to='/contact'>Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
