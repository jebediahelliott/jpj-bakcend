import React, { Component } from 'react';
import '../Layout.css';
import Navigation from '../Navigation/Navigation';
import ResponsiveMenu from 'react-responsive-navbar'
import HamburgerDiv from '../HamburgerDiv/HamburgerDiv'
import ArrowDiv from '../ArrowDiv/ArrowDiv'

class GraduateProgram extends Component {



  render() {
    return(
      <div>
        <ResponsiveMenu
          menuOpenButton={<HamburgerDiv />}
          menuCloseButton={<ArrowDiv />}
          changeMenuOn="600px"
          menu={<Navigation />}
        />
        <div className='staticPage'>
        <h1>Graduate Program</h1>
          <p>
            For those who would like to establish more control with their dogs, the Graduate Program takes the Basic Program a couple of steps further and teaches the finish, stand for exam, and sit, stand, and down in motion. The Graduate Program cositsts of 10 private lessons and 7 group classes. For dogs 4 months and older of any breed.
          </p>
          <p>Price: $650</p>
        </div>
      </div>
    )
  }

}

export default GraduateProgram;
