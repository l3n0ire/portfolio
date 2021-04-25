import React, { Component } from 'react';
import {Fragment} from 'react';

import './styles/Main.css'
import courierU from './images/courierU.png'
import successStories from './images/successStories.png'
import tftutsc from './images/tftutsc.png'
import timetableBuilder from './images/ttb.png'
import physicsPlaygroundU from './images/physicsPlaygroundU.png'
import manageU from './images/manageU.png'
import recycleRush from './images/recycleRush.png'
import passwordManager from './images/passwordManager.png'
import animeUpdateTracker from './images/animeUpdateTracker.png'
import cdm from './images/cdm.png'
import 'bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import{faCoffee,faDesktop,faServer, faMobileAlt, faPhone, faMapMarkerAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import resume from './images/RESUME.pdf'
import profilePic from'./images/profilePic.jpg'

import {Link} from 'react-router-dom';
import LazyLoad from 'react-lazyload';

class Index extends Component{

    render(){
    return (
        <Fragment>
        <div className="welcome-container">
          <h1>My Portfolio</h1>
        </div>
        

        <div className="myContainer">
            <h1>Who am I?</h1>
        <div className="profileContainer">
            <div className="profileCard">
                <img src={profilePic} alt="oops"></img>
                <div className="profileCardBody">
                <h1>Colin Lin</h1>
                <p>Software Developer</p>
                <p>Computer Science Co-op University of Toronto</p>
                <div className="profileIcons">
    <a rel="noopener noreferrer" target='_blank' href="https://www.facebook.com/colincool100"> <FontAwesomeIcon color= '#3b5998' icon={faFacebook} size='2x'/></a>
    <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/colin-lin-2001/"><FontAwesomeIcon color='#2867B2' icon={faLinkedin} size='2x'/></a> 
    <a rel="noopener noreferrer" target='_blank' href="https://github.com/l3n0ire"><FontAwesomeIcon icon={faGithub} size='2x' /></a>
                </div>
                <div className='contactInfo'>
                    <div className='line'>
                        <FontAwesomeIcon  icon={faPhone} flip="horizontal" size='2x' />
                        <p>647-470-9183</p>
                    </div>
                    <div className='line'>
                        <FontAwesomeIcon  icon={faMapMarkerAlt}  size='2x' />
                        <p>Toronto, On</p>
                    </div>
                    <div className='line'>
                        <FontAwesomeIcon  icon={faEnvelope}  size='2x' />
                        <p style={{fontSize:'1em'}}>colin.lin@mail.utoronto.ca</p>
                    </div>
                </div>
                <a href={resume} rel="noopener noreferrer" target='_blank' className="btn btn-dark" >View Resume</a>
                </div>
            </div>
            <div className="profileAboutCard">
                <div className="aboutHeader">
                    <h1>About Me</h1>
                    <div className='aboutUnderline'></div>
                <p>Hi, my name is Colin. I'm an aspiring software developer with experience in both frontend UX design and backend API development. 
                   I describe myself as someone who is ambitious, a quick learner, and has a passion for developing software with a positive social impact.
                </p>
                <h4 style={{display:"inline"}}>Languages: </h4>
                <p style={{display:"inline"}}>Java, Python, C, C#, Bash, HTML, CSS, JavaScript</p>
                <br></br>
                <h4 style={{display:"inline"}}>Tools and technologies: </h4>
                <p style={{display:"inline"}}>NodeJS, React, Git, MongoDB, jQuery, Jira, Bootstrap</p>


                </div>
                
                <div className="aboutBody">
                    <h1>My Skillset</h1>
                    <div className="aboutBodyGrid">

                        <div className="aboutBodyBox">
                            <div className='aboutBodyBoxHead'>
                                <FontAwesomeIcon color='#7b82de'  icon={faDesktop} size='3x' />
                                <div className='aboutBodyBoxText'>
                                    <h4>Web App Development</h4>
                                    <p>Able to create modern and responsive web apps using HTML, CSS , Javascript, and ReactJS </p>
                                </div>
                            </div>
                        </div>

                        <div className="aboutBodyBox">
                            <div className='aboutBodyBoxHead'>
                                <FontAwesomeIcon color='#7b82de' icon={faCoffee} size='3x' />
                                <div className='aboutBodyBoxText'>
                                    <h4>Object Oriented Programming</h4>
                                    <p>
                                        Strong knowledge OOP concepts such as Polymorphism as well as design patterns
                                        such as Factory Methods and Singleton.
                
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="aboutBodyBox">
                            <div className='aboutBodyBoxHead'>
                                <FontAwesomeIcon color='#7b82de'  icon={faServer} size='3x' />
                                <div className='aboutBodyBoxText'>
                                    <h4>Backend API</h4>
                                    <p>Experience setting up Databases and developing backend APIs using NodeJS and MongoDB </p>
                                </div>
                            </div>
                        </div>

                        <div className="aboutBodyBox">
                            <div className='aboutBodyBoxHead'>
                                <FontAwesomeIcon color='#7b82de'  icon={faMobileAlt} size='3x' />
                                <div className='aboutBodyBoxText'>
                                    <h4>Mobile App Development</h4>
                                    <p>Developed mobile applications with backend integration using React Native and Android Studio </p>
                                </div>
                            </div>
                        </div>
                        

                    </div>

                </div>


            </div>

        </div>


            
        <h1>Work Experience</h1>
        <div className="box-row">
                    <div className="box">
                        <img src={cdm} alt="oops"/>
                        <div className="box-text">
                            <h1>Software Developer at<br/> Cineplex Digital Media</h1>
                            <div className='tags'>
                                <a href='/' className='btn btn-light'>HTML CSS JS</a>
                                <a href='/' className='btn btn-light'>NodeJS</a>
                                <a href='/' className='btn btn-light'>Electron</a>
                                <a href='/' className='btn btn-light'>React</a>
                                <a href='/' className='btn btn-light'>TypeScript</a>
                                <a href='/' className='btn btn-light'>JIRA Confluence</a>
                            </div>
                            <p>
                            Led the development of custom web applications and digital signage for high-profile clients such as RBC, Citizens, and Scotiabank
                            </p>
                            <div className ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://www.cdmexperiences.com/' className="btn btn-dark">View Company</a>
                                <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/company/cineplexdigitalmedia/mycompany/' className ='btn btn-secondary'>Company Linkedin</a>
                                <Link className="btn btn-dark" to={{ pathname: '/moreinfo', state: { title: 'cdm'} }}>More Info</Link>
                            </div>
                        </div>
                    </div>
                </div>

       
        <h1>My Projects</h1>


            <div className="box-row">
                    <div className="box">
                    <LazyLoad>
                        <img src={courierU} alt="oops"/>
                    </LazyLoad>
                        <div className="box-text">
                            <h1>CourierU</h1>
                            <div className='tags'>
                                <a href='/' className='btn btn-light'>HTML CSS JS</a>
                                <a href='/' className='btn btn-light'>NodeJS</a>
                                <a href='/' className='btn btn-light'>MongoDB</a>
                                <a href='/' className='btn btn-light'>Mapbox API</a>
                                <a href='/' className='btn btn-light'>Bootstrap</a>
                                <a href='/' className='btn btn-light'>ExpressJS</a>
                            </div>
                            <p>
                                Service for foodbanks to coordinate deliveries during the
                                COVID-19 pandemic while maintaing social distancing
                            </p>
                            <div className ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://courieru.herokuapp.com/' className="btn btn-dark">View Demo</a>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/l3n0ire/courieru' className ='btn btn-secondary'>View Code</a>
                                <Link className="btn btn-dark" to={{ pathname: '/moreinfo', state: { title: 'CourierU'} }}>More Info</Link>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                    <LazyLoad>
                        <img src={successStories} alt="oops"/>
                    </LazyLoad>
                        <div className="box-text">
                        <h1>Success Stories of New Canadians</h1>
                        <div className='tags'>
                                <a href='/' className='btn btn-light'>HTML CSS JS</a>
                                <a href='/' className='btn btn-light'>ReactJS</a>
                                <a href='/' className='btn btn-light'>GraphQL</a>
                                <a href='/' className='btn btn-light'>Netlify CMS</a>
                        </div>
                            <p>
                                Platform for new immigrants to read about and share their experiences of coming to Canada
                            </p>
                            <div className ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://success-stories-of-new-canadians.netlify.app/'className="btn btn-dark">View Demo</a>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/l3n0ire/PEAR-Impact-Project' className ='btn btn-secondary'>View Code</a>
                                <Link className="btn btn-dark" to={{ pathname: '/moreinfo', state: { title: 'Success Stories of New Canadians'} }}>More Info</Link>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                    <LazyLoad>
                        <img src={manageU} alt="oops"/>
                    </LazyLoad>
                        <div className="box-text">
                            <h1>ManageU</h1>
                            <div className='tags'>
                                <a href='/' className='btn btn-light'>Python</a>
                                <a href='/' className='btn btn-light'>Heroku</a>
                                <a href='/' className='btn btn-light'>MongoDB</a>
                                <a href='/' className='btn btn-light'>discord.py</a>
                            </div>
                            <p>
                            A discord bot that helps university students keep track of important dates for their courses
                            </p>
                            <div className ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/l3n0ire/pythonDiscordBot' className ='btn btn-secondary'>View Code</a>
                                <Link className="btn btn-dark" to={{ pathname: '/moreinfo', state: { title: 'ManageU'} }}>More Info</Link>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                    <LazyLoad>
                        <img src={animeUpdateTracker} alt="oops"/>
                    </LazyLoad>
                        <div className="box-text">
                            <h1>Anime Update Tracker</h1>
                            <div className='tags'>
                                <a href='/' className='btn btn-light'>Javascript</a>
                                <a href='/' className='btn btn-light'>HTML CSS</a>
                                <a href='/' className='btn btn-light'>Chrome Extension</a>
                                <a href='/' className='btn btn-light'>Jikan API</a>
                            </div>
                            <p>
                                Chrome Extension that helps users keep track of their favourite anime and pick up where they last left off
                            </p>
                            <div className ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://chrome.google.com/webstore/detail/anime-update-tracker/dfcboajkdkgolnlambnobofpdmejbkmb' className="btn btn-dark">Download</a>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/l3n0ire/AnimeUpdateTracker' className ='btn btn-secondary'>View Code</a>
                                <Link className="btn btn-dark" to={{ pathname: '/moreinfo', state: { title: 'AnimeUpdateTracker'} }}>More Info</Link>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                    <LazyLoad>
                        <img src={physicsPlaygroundU} alt="oops"/>
                    </LazyLoad>
                        <div className="box-text">
                            <h1>Physics Playground</h1>
                            <div className='tags'>
                                <a href='/' className='btn btn-light'>C#</a>
                                <a href='/' className='btn btn-light'>Unity</a>
                                <a href='/' className='btn btn-light'>OOP</a>
                                <a href='/' className='btn btn-light'>ReactJS</a>
                            </div>
                            <p>
                                Virtual physics lab simulator designed to help students learn remotely
                            </p>
                            <div className ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://physicsplaygroundu.netlify.app/' className="btn btn-dark">View Demo</a>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/l3n0ire/PhysicsPlaygroundUnity' className ='btn btn-secondary'>View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <LazyLoad>
                        <img src={recycleRush} alt="oops"/>
                        </LazyLoad>
                        <div className="box-text">
                            <h1>Recycle Rush</h1>
                            <div className='tags'>
                                <a href='/' className='btn btn-light'>C#</a>
                                <a href='/' className='btn btn-light'>Unity</a>
                                <a href='/' className='btn btn-light'>Android Studio</a>
                                <a href='/' className='btn btn-light'>Java</a>
                            </div>
                            <p>
                            Non-Profit mobile game aimed to encourage recycling among youth
                            </p>
                            <div className ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://play.google.com/store/apps/details?id=com.ColinLin.RecycleRush&hl=en' className="btn btn-dark">Download</a>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/l3n0ire/RecycleRushAndroid' className ='btn btn-secondary'>View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <LazyLoad>
                        <img src={passwordManager} alt="oops"/>
                        </LazyLoad>
                        <div className="box-text">
                            <h1>Password Manager</h1>
                            <div className='tags'>
                                <a href='/' className='btn btn-light'>Java</a>
                                <a href='/' className='btn btn-light'>Swing</a>
                                <a href='/' className='btn btn-light'>OOP</a>
                            </div>
                            <p>
                                Lightweight, cross-platform password manager made in java
                            </p>
                            <div className ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/l3n0ire/PasswordManager' className ='btn btn-secondary'>View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={tftutsc} alt="oops"/>
                        <div className="box-text">
                            <LazyLoad>
                            <h1>Teamfight UTSC</h1>
                            </LazyLoad>
                            <div className='tags'>
                                <a href='/' className='btn btn-light'>HTML CSS JS</a>
                                <a href='/' className='btn btn-light'>ReactJS</a>
                            </div>
                            <p>
                                Website promoting the tournaments and socials for the Teamfight UTSC club
                                as well as tutorials for beginners
                            </p>
                            <div className ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://tftutsc.netlify.app/' className="btn btn-dark">View Demo</a>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/l3n0ire/TFT_UTSC' className ='btn btn-secondary'>View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <LazyLoad>
                        <img src={timetableBuilder} alt="oops"/>
                        </LazyLoad>
                        <div className="box-text">
                            <h1>Timetable Builder</h1>
                            <div className='tags'>
                                <a href='/' className='btn btn-light'>HTML CSS JS</a>
                                <a href='/' className='btn btn-light'>jQuery</a>
                                <a href='/' className='btn btn-light'>Bootstrap</a>
                            </div>
                            <p>
                                Platform to help students plan out and visualize their course load for upcoming semesters
                            </p>
                            <div className ='btnPair'>
                                <a rel="noopener noreferrer" target='_blank' href='https://l3n0ire.github.io/TimetableBuilder/index.html' className="btn btn-dark">View Demo</a>
                                <a rel="noopener noreferrer" target='_blank' href='https://github.com/l3n0ire/TimetableBuilder' className ='btn btn-secondary'>View Code</a>
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
