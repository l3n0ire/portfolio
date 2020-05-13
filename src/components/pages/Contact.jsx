import React from 'react';
import {Fragment} from 'react';
import './styles/Contact.css'

function Contact() {
    return (
        <Fragment>
            <div className="welcome-container">
                <h1> Contact </h1>
            </div>
            <div className="myContainer">
                <div class="contactBox">
                    <h1>My Contact Info</h1>
                    <h4><b>Full Name:</b>Colin Lin</h4>
                    <h4><b>Phone Number:</b> 647-470-9183</h4>
                    <h4><b>Address:</b>125 Highhill Drive Toronto ON Canada M1T 1N8</h4>
                    <h4><b>Email:</b>colin.lin@mail.utoronto.ca</h4>
                    <h4><b>LinkedIn:</b><a href='https://www.linkedin.com/in/colin-lin-2001/'>https://www.linkedin.com/in/colin-lin-2001/</a> </h4>
                    <h4><b>Github:</b><a href='https://github.com/l3n0ire'>https://github.com/l3n0ire</a> </h4>


        
                </div>
            </div>
        </Fragment>
    )
}
export default Contact;
