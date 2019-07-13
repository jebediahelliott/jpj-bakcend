import React, { Component } from 'react';
import '../Layout.css';
import Navigation from '../Navigation/Navigation';
import ResponsiveMenu from 'react-responsive-navbar'

class GraduateProgram extends Component {



  render() {
    return(
      <div>
        <ResponsiveMenu
          menuOpenButton={<div className="navBar"><i className="fas fa-bars"></i></div>}
          menuCloseButton={<div className="navBar"><i className="fas fa-arrow-up"></i></div>}
          changeMenuOn="600px"
          menu={<Navigation />}
        />
        <div className='staticPage'>
        <h1>Graduaate Program</h1>
          <p>
            For those who would like to establish more control with their dogs, the Graduate Program takes the Basic Program a couple of steps further and teaches the finish, stand for exam, and sit, stand, and down in motion. The Graduate Program cositsts of 7 private lessons and 5 group lessons. For dogs 4 months and older of any breed.
          </p>
          <p>Price: $450</p>
        </div>
      </div>
    )
  }

}

export default GraduateProgram;
