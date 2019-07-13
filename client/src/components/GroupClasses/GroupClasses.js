import React, { Component } from 'react';
import '../Layout.css';
import Navigation from '../Navigation/Navigation';
import ResponsiveMenu from 'react-responsive-navbar'
import HamburgerDiv from '../HamburgerDiv/HamburgerDiv'
import ArrowDiv from '../ArrowDiv/ArrowDiv'

class GroupClasses extends Component {



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
        <h1>Group Classes</h1>
        <h3>Beginner Group Class</h3>
        <p>
          The beginer's group class is an important part of our training program. In this class you get to practice and improve all of the skills you and your dog have learned, but in a more challenging environment. Everyone and their dog in this class is at approximately the same level of training.
        </p>
        <h3>Advanced Group Class</h3>
        <p>
          Advanced group class is for the dog/handler teams that are ready for a mor demanding challenge to promote better skills in both the handler and dog. The class offers more difficult excercises in the a closer proximity tot he other dog/handler teams requiring tmore teamwork from you and your dog.
        </p>
        <h4>Pricing:</h4>
        <p>
          Five classes: $85
        </p>
        <p>
          Ten classes: $130
        </p>
        </div>
      </div>
    )
  }

}

export default GroupClasses;
