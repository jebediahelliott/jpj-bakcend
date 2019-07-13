import React, { Component } from 'react';
import '../Layout.css'
import Navigation from '../Navigation/Navigation';
import ResponsiveMenu from 'react-responsive-navbar'


class ResidentTraining extends Component {



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
        <h1>Resident Training</h1>
        <p>
          Let us do the training for you! In our Resident TRaining Program, your dog will come and stay with us while we teach or refine his/her obedience. We will address any behavioral problems you may be incurring and work on any specific requests from you.
        </p>
        <p>
          We offer different programs including Basic through Advanced Obedience as well as social exposure and outings per your request. We can also customize a pachage just for you and your dog. No matter which program you slelect, we will train you dog to work for you in an environment conducive to learning. As in all of our training, we train for the spirit of your dog.
        </p>
        <p>
          Once your dog is trained, we will focus on training you. You will learn what and how your dog has learned in four private follow-up lessons and group classes, as required.
        </p>
        <p>Price $2000</p>

        <p>Please contact us for more information regarding Resident Training Programs.</p>
        </div>
      </div>
    )
  }

}

export default ResidentTraining;
