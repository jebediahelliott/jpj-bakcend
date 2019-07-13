import React, { Component } from 'react';
import '../Layout.css'
import Navigation from '../Navigation/Navigation';
import ResponsiveMenu from 'react-responsive-navbar'
import HamburgerDiv from '../HamburgerDiv/HamburgerDiv'
import ArrowDiv from '../ArrowDiv/ArrowDiv'

class BasicProgram extends Component {



  render() {
    return(
      <div>
        <ResponsiveMenu
          menuOpenButton={<HamburgerDiv />}
          menuCloseButton={<HamburgerDiv />}
          changeMenuOn="600px"
          menu={<Navigation />}
        />
        <div className='staticPage'>
          <h1>Basic Obedience Program</h1>
          <p>
            This course is designed to make your dog a better family member and to help gain control in real life situations. the Basic Obedience Program consists of four private lessons and four group lessons covering heel, wait, sit, stay, down, and recall. It also includes problem areas such as jumping, chewing, digging, etc.
          </p>
          <p>
            The Basic Obedience Program is for dogs four months and older of any breed.
          </p>
          <p>
            Price: $325
          </p>
        </div>
      </div>
    )
  }

}

export default BasicProgram;
