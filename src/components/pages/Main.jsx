import React, { Component } from 'react';
import {Fragment} from 'react';

import './styles/Main.css'
import cookingU from './images/cookingU.png'
import physicsPlaygroundU from './images/physicsPlaygroundU.png'
import guide from './images/guide.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'


class Index extends Component{

    render(){
    return (
        <Fragment>
        <div className="welcome-container">
          <h1>Portfolio Page</h1>
        </div>
        

        <div className="myContainer">
            <h1>Who am I?</h1>
            <p>
                We’re a group with a strong passion for making projects that end with the letter U. Winning team works on a series of random
                projects which will hopefully let us win some hackatons. Our goal is to explore new tools and technologies with
                the hope of creating something that will statisfy our boredom and something to put on our resumes. Winning team's mission
                is to win a hackaton, but more importantly we strive to build software that benifits the lives of other and that aligns with
                the interest of all team members

            </p>

            
         

       
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
