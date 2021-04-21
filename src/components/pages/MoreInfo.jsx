import React from 'react';
import {Fragment} from 'react';
import './styles/MoreInfo.css'
import MoreInfoData from './data/MoreInfo.json'
import courierU from './images/courierU.png'
import successStories from './images/successStories.png'
import manageU from './images/manageU.png'
import animeUpdateTracker from './images/animeUpdateTracker.png'
import cdm from './images/cdm.png'
const images = {}
images['courierU'] =courierU
images['successStories'] =successStories
images['manageU'] =manageU
images['animeUpdateTracker'] = animeUpdateTracker
images['cdm'] = cdm

function MoreInfo(props) {
    const project = MoreInfoData[props.location.state.title]
    let longdesc = <p>{project.descriptionLong}</p>
    if(props.location.state.title == 'cdm')
        longdesc = <div>
            <p>As a Software developer at CDM, I led the development of custom web applications and digital signage for high-profile clients such as RBC, Citizens, and Scotiabank.</p>
            <p>My Primary responsibilities include:</p>
            <ol style={{marginLeft:"1em"}}>
                <li>Developing interative web applications using React, Typscript, and Electron</li>
                <li>Adapting HTML, CSS, and JavaScript projects to serve different countries, currencies, and languages.</li>
                <li>Working closely with creative teams to convert designs and requirements to interactive applications</li>
                <li>Researching and Developing methods to automate tasks and improve project workflow</li>
            </ol>
            <p>Acheivements:</p>
            <ol style={{marginLeft:"1em"}}>
                <li>Reduced maintenance costs by 90% by rebuilding a legacy application using React</li>
                <li>Accelerated development by creating a Node.js CLI app to automate testing and file validation</li>
                <li>Introduced CI/CD processes to the team by creating an automated testing pipeline using Bitbucket and Heroku</li>
            </ol>
            </div>
                

    return (
        <Fragment>
            <div className="welcome-container">
                <h1> {project.title} </h1>
            </div>
            <div className="MoreInfoContainer">
                
                    
                <div className="MoreInfo">
                    <img src={images[project.imageName]} alt="oops"/>
                    <h1>{project.title}</h1>
                    <p>{project.forWhat}</p>
                    <p>{project.date}</p>
                        {longdesc}
                    <div className ='btnPair'>
                        {!project.projectLink? null :<a rel="noopener noreferrer" target='_blank' href={project.projectLink} className="btn btn-dark">View Demo</a>}
                        {!project.githubLink? null :<a rel="noopener noreferrer" target='_blank' href={project.githubLink} className ='btn btn-secondary'>View Code</a>}
                    </div>
                </div>
                        
                    
                
                

        
            </div>
        </Fragment>
    )
}
export default MoreInfo;
