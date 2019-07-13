import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import ResponsiveMenu from 'react-responsive-navbar'
import '../Layout.css'


class Consultation extends Component {



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
          <h1>Consultation</h1>
          <p>
            This in home visit allows the trainer to evaluate your dog, discuss any obedience problems, and help determine wich obedience program suit you and your dog. The visit is 30 minutes and free of charge.
          </p>
        </div>
      </div>
    )
  }

}

export default Consultation;
