import React from 'react';
import {Fragment} from 'react';
import './styles/MoreInfo.css'
import MoreInfoData from './data/MoreInfo.json'
import courierU from './images/courierU.png'
import successStories from './images/successStories.png'
import manageU from './images/manageU.png'
const images = {}
images['courierU'] =courierU
images['successStories'] =successStories
images['manageU'] =manageU

function MoreInfo(props) {
    const project = MoreInfoData[props.location.state.title]
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
                    <p>
                        {project.descriptionLong}
                    </p>
                    <div className ='btnPair'>
                        <a rel="noopener noreferrer" target='_blank' href={project.projectLink} className="btn btn-dark">View Demo</a>
                        <a rel="noopener noreferrer" target='_blank' href={project.githubLink} className ='btn btn-secondary'>View Code</a>
                    </div>
                </div>
                        
                    
                
                

        
            </div>
        </Fragment>
    )
}
export default MoreInfo;
