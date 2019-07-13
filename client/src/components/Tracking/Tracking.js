import React, { Component } from 'react';
import '../Layout.css'
import Navigation from '../Navigation/Navigation';
import ResponsiveMenu from 'react-responsive-navbar'
import HamburgerDiv from '../HamburgerDiv/HamburgerDiv'
import ArrowDiv from '../ArrowDiv/ArrowDiv'


class TrainingPrograms extends Component {



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
          <h1>Tracking</h1>
          <p>
            Tracking is an amazing discipline that helps teach you the ability to read your dog. It requires a lot of patience and teamwork. In tracking, not only do you enter your dog's world, but you also ask them to take you along with them. Dogs have no biological reason to track man; we must provide them with a positive reason to do so. We teach the Schutzhund style of tracking. We use imprintig to teach the dog to track footstep to footstep, using a deep nose(close to the ground). We do this by teaching the dog to use its nose, its number one sense, right from the begining. This type of training provides a wide variety of possibiilities for your tracking goals, whether its a fun new activity for you and your dog, Search and Rescue, or anything in between.
          </p>
          <p>
            > ...in track work, dog and man must unite to form one indivisible whole - Max V. Stephanitz
          </p>
        </div>
      </div>
    )
  }

}

export default TrainingPrograms;
