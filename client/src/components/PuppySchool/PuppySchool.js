import React, { Component } from 'react';
import '../Layout.css'
import Navigation from '../Navigation/Navigation';
import ResponsiveMenu from 'react-responsive-navbar'


class PuppySchool extends Component {



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
        <h1>Puppy School</h1>
        <p>
          Start your puppy off right! This program prepares your puppy ofr future training, builds confidence, and teaches you how to properly communicate with and motivate your puppy. This program also consisits of teaching housebreaking techniques, crate training, guidance with destructive chewing, jumping, bitig, and many other normal puppy problems. A strong emphasis is placed on training the human members of the family.
        </p>
        <p>
          Puppy School consists of four one-hour lessons, offered in both private and group settings.
          For puppies 8 to 16 weeks of any breed.
        </p>
        <p>Price: $150</p>
        </div>
      </div>
    )
  }

}

export default PuppySchool;
