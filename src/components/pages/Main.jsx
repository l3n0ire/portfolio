import React, { Component } from 'react';
import {Fragment} from 'react';

import './styles/Main.css'
import courierU from './images/courierU.png'
import successStories from './images/successStories.png'
import tftutsc from './images/tftutsc.png'
import timetableBuilder from './images/ttb.png'
import 'bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import{faCoffee,faDesktop,faServer, faMobileAlt, faPhone, faMapMarkerAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import resume from './images/RESUME.pdf'
import profilePic from'./images/profilePic.jpg'

class Index extends Component{

    render(){
    return (
        <Fragment>
        <div className="welcome-container">
          <h1>My Portfolio</h1>
        </div>
        

        <div className="myContainer">
            <h1>Who am I?</h1>
        <div class="profileContainer">
            <div class="profileCard">
                <img src={profilePic} alt="oops"></img>
                <div class="profileCardBody">
                <h1>Colin Lin</h1>
                <p>Web Developer</p>
                <p>Co-op Computer Science University of Toronto</p>
                <div class="profileIcons">
                    <a rel="noopener noreferrer" target='_blank' href="https://www.facebook.com/colincool100"> <FontAwesomeIcon color= '#3b5998' icon={faFacebook} size='2x'/></a>
                    <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/colin-lin-2001/"><FontAwesomeIcon color='#2867B2' icon={faLinkedin} size='2x'/></a> 
                    <a rel="noopener noreferrer" target='_blank' href="https://github.com/l3n0ire"><FontAwesomeIcon icon={faGithub} size='2x' /></a>
                </div>
                <div class='contactInfo'>
                    <div class='line'>
                        <FontAwesomeIcon  icon={faPhone} flip="horizontal" size='2x' />
                        <p>647-470-9183</p>
                    </div>
                    <div class='line'>
                        <FontAwesomeIcon  icon={faMapMarkerAlt} flip="horizontal" size='2x' />
                        <p>Toronto, On</p>
                    </div>
                    <div class='line'>
                        <FontAwesomeIcon  icon={faEnvelope} flip="horizontal" size='2x' />
                        <p style={{fontSize:'1em'}}>colin.lin@mail.utoronto.ca</p>
                    </div>
                </div>
                <a href={resume} rel="noopener noreferrer" target='_blank'class="btn btn-primary">View Resume</a>
                </div>
            </div>
            <div class="profileAboutCard">
                <div class="aboutHeader">
                <h1>About Me</h1>
                <div class='aboutUnderline'></div>
                <p>Hi, my name is Colin. I'm an aspiring web developer with experience in both frontend UX design and backend API development. 
                   I descibe myself as someone who is ambitious, a quick learner, and has a passion for developing software with a positive social impact.
                </p>
                </div>
                
                <div class="aboutBody">
                    <h1>My Skillset</h1>
                    <div class="aboutBodyGrid">

                        <div class="aboutBodyBox">
                            <div class='aboutBodyBoxHead'>
                                <FontAwesomeIcon color='#7b82de'  icon={faDesktop} size='3x' />
                                <div class='aboutBodyBoxText'>
                                    <h4>Web App Development</h4>
                                    <p>Able to create modern and responsive web apps using HTML, CSS , Javascript, and ReactJS </p>
                                </div>
                            </div>
                        </div>

                        <div class="aboutBodyBox">
                            <div class='aboutBodyBoxHead'>
                                <FontAwesomeIcon color='#7b82de' icon={faCoffee} size='3x' />
                                <div class='aboutBodyBoxText'>
                                    <h4>API Integration</h4>
                                    <p>Familiar with integrating REStful web services and APIs such as MapBox API and Google Cloud
                                        with frontend applications 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="aboutBodyBox">
                            <div class='aboutBodyBoxHead'>
                                <FontAwesomeIcon color='#7b82de'  icon={faServer} size='3x' />
                                <div class='aboutBodyBoxText'>
                                    <h4>Backend API</h4>
                                    <p>Experience setting up Databases and developing backend APIs for fullstack applications </p>
                                </div>
                            </div>
                        </div>

                        <div class="aboutBodyBox">
                            <div class='aboutBodyBoxHead'>
                                <FontAwesomeIcon color='#7b82de'  icon={faMobileAlt} size='3x' />
                                <div class='aboutBodyBoxText'>
                                    <h4>Mobile App Development</h4>
                                    <p>Developed mobile applications with backend integration using React Native and Android Studio </p>
                                </div>
                            </div>
                        </div>
                        

                    </div>

                </div>


            </div>

        </div>


            
         

       
        <h1>My Projects</h1>


            <div className="box-row">
                    <div className="box">
                        <img src={courierU} alt="oops"/>
                        <div className="box-text">
                            <h1>CourierU</h1>
                            <div class='tags'>
                                <a href='/' class='btn btn-light'>HTML CSS JS</a>
                                <a href='/' class='btn btn-light'>NodeJS</a>
                                <a href='/' class='btn btn-light'>MongoDB</a>
                                <a href='/' class='btn btn-light'>Mapbox API</a>
                                <a href='/' class='btn btn-light'>Bootstrap</a>

                                <a href='/' class='btn btn-light'>ExpressJS</a>
                            </div>
                            <p>
                                Service for foodbanks to coordinate deliveries during the
                                COVID-19 pandemic while maintaing social distancing
                            </p>
                            <div class ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://courieru.herokuapp.com/' class ='btn btn-primary'>View Demo</a>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/l3n0ire/courieru' class ='btn btn-secondary'>View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={successStories} alt="oops"/>
                        <div className="box-text">
                        <h1>Success Stories of New Canadians</h1>
                        <div class='tags'>
                                <a href='/' class='btn btn-light'>HTML CSS JS</a>
                                <a href='/' class='btn btn-light'>ReactJS</a>
                                <a href='/' class='btn btn-light'>GraphQL</a>
                                <a href='/' class='btn btn-light'>Netlify CMS</a>
                        </div>
                            <p>
                                Platform for new immigrants to read about and share their experiences of coming to Canada
                            </p>
                            <div class ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://success-stories-of-new-canadians.netlify.app/' class ='btn btn-primary'>View Demo</a>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/l3n0ire/PEAR-Impact-Project' class ='btn btn-secondary'>View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={tftutsc} alt="oops"/>
                        <div className="box-text">
                            <h1>Teamfight UTSC</h1>
                            <div class='tags'>
                                <a href='/' class='btn btn-light'>HTML CSS JS</a>
                                <a href='/' class='btn btn-light'>ReactJS</a>
                            </div>
                            <p>
                                Website promoting the tournaments and socials for the Teamfight UTSC club
                                as well as tutorials for beginners
                            </p>
                            <div class ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://tftutsc.netlify.app/' class ='btn btn-primary'>View Demo</a>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/l3n0ire/TFT_UTSC' class ='btn btn-secondary'>View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={timetableBuilder} alt="oops"/>
                        <div className="box-text">
                            <h1>Timetable Builder</h1>
                            <div class='tags'>
                                <a href='/' class='btn btn-light'>HTML CSS JS</a>
                                <a href='/' class='btn btn-light'>jQuery</a>
                                <a href='/' class='btn btn-light'>Bootstrap</a>
                            </div>
                            <p>
                                Platform to help students plan out and visualize their courseload for upcoming semesters
                            </p>
                            <div class ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://l3n0ire.github.io/TimetableBuilder/index.html' class ='btn btn-primary'>View Demo</a>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/l3n0ire/TimetableBuilder' class ='btn btn-secondary'>View Code</a>
                            </div>
                        </div>
                    </div>
            </div>

        </div>

        


      </Fragment>
    )
          }
}
export default Index;
