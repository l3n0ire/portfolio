import React from 'react';
import {Fragment} from 'react';
import './Footer.css'
import {Link} from 'react-router-dom';
import resume from '../pages/images/RESUME.pdf'


function Footer() {
    return (
        <Fragment>
            <footer>
                <div className="footer-container">
                <div className="box-left">
                    <h1>Colin Lin</h1>
                    <p>
                    125 Highhill Drive <br/>
                    Toronto, ON <br/>
                    M1T 1N8
                    </p>
                    <br/>
                    <p>&copy; Colin Lin {(new Date().getFullYear())}</p>
                </div>
                <div className="box-right">
                    <h1>Links</h1>
                    <ul>
                        <li><Link className="link-style" to='/'>Home</Link></li>
                        <li><a rel="noopener noreferrer" className="link-style" href={resume} target='_blank'>Resume</a></li>
                        <li><Link className="link-style" to='/contact'>Contact</Link></li>


                    </ul>
                </div>
                </div>
            </footer>
        </Fragment>
    )
}
export default Footer;
