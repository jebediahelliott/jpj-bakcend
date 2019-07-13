import React, { Component } from 'react';
import '../Layout.css'
import Navigation from '../Navigation/Navigation';
import ResponsiveMenu from 'react-responsive-navbar'


class ServiceTraining extends Component {



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
          <h1>Service Training</h1>
          <p>
            Training your companion to recognize health risks and assist you in the day to day functions of life is a very rewarding experience that will create a very deep bond between you and your dog. Service training is highly individualized and based on the needs of the owner. As such, a training regimen and cost will be determined based on a case by case basis.
          </p>
        </div>
      </div>
    )
  }

}

export default ServiceTraining;
