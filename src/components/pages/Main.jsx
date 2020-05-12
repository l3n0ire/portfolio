import React, { Component } from 'react';
import {Fragment} from 'react';

import './styles/Main.css'
import cookingU from './images/cookingU.png'
import physicsPlaygroundU from './images/physicsPlaygroundU.png'
import guide from './images/guide.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import{faCoffee,faDesktop,faServer, faMobileAlt, faPhone, faMapMarkerAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {Button} from 'reactstrap'


class Index extends Component{

    render(){
    return (
        <Fragment>
        <div className="welcome-container">
          <h1>Portfolio Page</h1>
        </div>
        

        <div className="myContainer">
            <h1>Who am I?</h1>
        <div class="profileContainer">
            <div class="profileCard">
                <img src="https://www.w3schools.com/w3images/team2.jpg" alt="oops"></img>
                <div class="profileCardBody">
                <h1>Colin Lin</h1>
                <p>Web Developer</p>
                <p>University of Toronto</p>
                <div class="profileIcons">
                    <a rel="noopener noreferrer" target='_blank' href="https://google.ca"> <FontAwesomeIcon icon={faFacebook} size='2x'/></a>
                    <a rel="noopener noreferrer" target='_blank' href="https://google.ca"><FontAwesomeIcon icon={faLinkedin} size='2x'/></a> 
                    <a rel="noopener noreferrer" target='_blank' href="https://google.ca"><FontAwesomeIcon icon={faGithub} size='2x' /></a>
                </div>
                <div class='contactInfo'>
                    <div class='line'>
                        <FontAwesomeIcon icon={faPhone} flip="horizontal" size='2x' />
                        <p>416-666-6666</p>
                    </div>
                    <div class='line'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} flip="horizontal" size='2x' />
                        <p>Toronto, On</p>
                    </div>
                    <div class='line'>
                        <FontAwesomeIcon icon={faEnvelope} flip="horizontal" size='2x' />
                        <p style={{fontSize:'1em'}}>colin.lin@mail.utoronto.ca</p>
                    </div>
                </div>
                <Button>View Resume</Button>
                </div>
            </div>
            <div class="profileAboutCard">
                <div class="aboutHeader">
                <h1>About Me</h1>
                <div class='aboutUnderline'></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat alias fugit velit possimus sequi totam maiores ut dolorem itaque inventore sed ea consequatur corrupti minima libero, beatae doloribus quae.</p>
                </div>
                
                <div class="aboutBody">
                    <h1>What I'm doing</h1>
                    <div class="aboutBodyGrid">

                        <div class="aboutBodyBox">
                            <div class='aboutBodyBoxHead'>
                                <FontAwesomeIcon icon={faDesktop} size='3x' />
                                <div class='aboutBodyBoxText'>
                                    <h4>Web App Development</h4>
                                    <p>Able to create modern and responsive web apps using HTML CSS and JS </p>
                                </div>
                            </div>
                        </div>

                        <div class="aboutBodyBox">
                            <div class='aboutBodyBoxHead'>
                                <FontAwesomeIcon icon={faCoffee} size='3x' />
                                <div class='aboutBodyBoxText'>
                                    <h4>API Integration</h4>
                                    <p>Able to create modern and responsive web apps using HTML CSS and JS </p>
                                </div>
                            </div>
                        </div>

                        <div class="aboutBodyBox">
                            <div class='aboutBodyBoxHead'>
                                <FontAwesomeIcon icon={faServer} size='3x' />
                                <div class='aboutBodyBoxText'>
                                    <h4>Backend API</h4>
                                    <p>Able to create modern and responsive web apps using HTML CSS and JS </p>
                                </div>
                            </div>
                        </div>

                        <div class="aboutBodyBox">
                            <div class='aboutBodyBoxHead'>
                                <FontAwesomeIcon icon={faMobileAlt} size='3x' />
                                <div class='aboutBodyBoxText'>
                                    <h4>Mobile App Development</h4>
                                    <p>Able to create modern and responsive web apps using HTML CSS and JS </p>
                                </div>
                            </div>
                        </div>
                        

                    </div>

                </div>


            </div>

        </div>


            
         

       
        <h1>My Projects</h1>


            <div className="box-row">
                <a className="linky"  rel="noopener noreferrer" target='_blank' href='https://cookingu.netlify.app/'>
                    <div className="box">
                        <img src={cookingU} alt="oops"/>
                        <div className="box-text">
                            <p>
                                Platform to help students to learn how to cook.<br/>
                                Large selection of quick and<br/> easy-to-learn recipes
                            </p>
                        </div>
                    </div>
                </a>
                <a className="linky" rel="noopener noreferrer" target ="_blank" href='https://physicsplaygroundu.netlify.app/'>
                    <div className="box">
                        <img src={physicsPlaygroundU} alt="oops"/>
                        <div className="box-text">
                            <p>
                                Physics simulator to help highschool students visualize physics labs.<br/>
                                Variety of interactive labs and learning tools to experiment with.
                            </p>
                        </div>
                    </div>
                </a>
                <a className="linky" href="/">
                    <div className="box">
                        <img src={guide} alt="oops"/>
                        <div className="box-text">
                            <p>
                                We don't know what this game will be yet.<br/>
                                So far, its just a bunch of spheres and cubes flying around

                            </p>
                        </div>
                    </div>
                </a>
            </div>

        </div>

        


      </Fragment>
    )
          }
}
export default Index;
