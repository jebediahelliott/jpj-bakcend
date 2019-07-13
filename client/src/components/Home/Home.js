import React, { Component } from 'react';
import '../Layout.css';
import Navigation from '../Navigation/Navigation';
import ResponsiveMenu from 'react-responsive-navbar'

class Home extends Component {



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

        </div>
      </div>
    )
  }

}

export default Home;
