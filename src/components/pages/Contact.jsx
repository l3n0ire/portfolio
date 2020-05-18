import React from 'react';
import {Fragment} from 'react';
import './styles/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import{faIdCard, faPhone, faMapMarkerAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'


function Contact() {
    return (
        <Fragment>
            <div className="welcome-container">
                <h1> Contact </h1>
            </div>
            <div className="myContainer">
                <div className="profileAboutCard">
                    <div className="aboutHeader">
                        <h1>My Contact Info</h1>
                        <div className='aboutUnderline'></div>
                    </div>
                    <div className="aboutBody">
                        <div className='contactRow'>
                            <FontAwesomeIcon color='#7b82de' className="contactIcon"  icon={faIdCard} size='3x' />
                            <h4 className="contactText" >Colin Lin</h4>
                        </div>
                        <div className='contactRow'>
                            <FontAwesomeIcon color='#7b82de' className="contactIcon" icon={faPhone} flip="horizontal" size='3x' />
                            <h4 className="contactText" >647-470-9183</h4>
                        </div>
                        <div className='contactRow'>
                            <FontAwesomeIcon color='#7b82de' className="contactIcon" icon={faMapMarkerAlt} size='3x' />
                            <h4 className="contactText" >125 Highhill Drive, Toronto, Ontario M1T 1N8 Canada</h4>
                        </div>
                        <div className='contactRow'>
                            <FontAwesomeIcon color='#7b82de' className="contactIcon" icon={faEnvelope} size='3x' />
                            <h4 className="contactText" >colin.lin@mail.utoronto.ca</h4>
                        </div>
                            <div className="profileIcons" >
                                <a rel="noopener noreferrer" target='_blank' href="https://www.facebook.com/colincool100"> <FontAwesomeIcon color= '#3b5998' icon={faFacebook} size='3x'/></a>
                                <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/colin-lin-2001/"><FontAwesomeIcon color='#2867B2' icon={faLinkedin} size='3x'/></a> 
                                <a rel="noopener noreferrer" target='_blank' href="https://github.com/l3n0ire"><FontAwesomeIcon icon={faGithub} size='3x' /></a>
                            </div>
                </div>


        
                </div>
            </div>
        </Fragment>
    )
}
export default Contact;
