import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import TrainingPrograms from '../../components/TrainingPrograms/TrainingPrograms';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import BasicProgram from '../../components/BasicProgram/BasicProgram';
import Consultation from '../../components/Consultation/Consultation';
import GraduateProgram from '../../components/GraduateProgram/GraduateProgram';
import GroupClasses from '../../components/GroupClasses/GroupClasses';
import PuppySchool from '../../components/PuppySchool/PuppySchool';
import ResidentTraining from '../../components/ResidentTraining/ResidentTraining';
import Tracking from '../../components/Tracking/Tracking';
import ServiceTraining from '../../components/ServiceTraining/ServiceTraining'
import bannerLogo from '../../components/images/output-onlinepngtools.png'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: undefined,
      user: undefined,
      dogs: undefined
    }
  }

  handleLogin = (response) => {
      this.setState({
        token: response.data.jwt,
        user: response.data.user,
        dogs: response.data.user.dogs
      })
    }

  handleLogout = () => {
    this.setState({
      token: null,
      user: null,
      dog: null
    })
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="banner">
            <img src={bannerLogo} id="banner-logo" className="banner-image" alt="Logo" />
          </div>
          <Switch>
            <Route exact path="/" render={routerProps => <About {...routerProps} page={this.state.home} />} />
            <Route path="/about" render={routerProps => <About {...routerProps} dogs={this.state.dogs} page={this.state.about} />} />
            <Route path="/training-programs" render={routerProps => <TrainingPrograms {...routerProps} page={this.state.trainingPrograms} />} />
            <Route path="/contact" component={Contact} />
            <Route path="/service-training" component={ServiceTraining} />
            <Route path="/consultation" render={routerProps => <Consultation {...routerProps} page={this.state.consultation} />} />
            <Route path="/puppy-school" render={routerProps => <PuppySchool {...routerProps} page={this.state.puppySchool} />} />
            <Route path="/basic-program" render={routerProps => <BasicProgram {...routerProps} page={this.state.basicProgram} />} />
            <Route path="/group-classes" render={routerProps => <GroupClasses {...routerProps} page={this.state.groupClasses} />} />
            <Route path="/graduate-program" render={routerProps => <GraduateProgram {...routerProps} page={this.state.graduateProgram} />} />
            <Route path="/resident-training" render={routerProps => <ResidentTraining {...routerProps} page={this.state.residentTraining} />} />
            <Route path="/tracking" render={routerProps => <Tracking {...routerProps} page={this.state.tracking} />} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default (App);

// Routes to be used when site has user login capabilities
// <Route path="/profile" render={routerProps => this.state.user ? <Profile {...routerProps} dogs={this.state.dogs} user={this.state.user} /> : <Redirect to="/login" />} />
// <Route path="/login" render={routerProps => <Login {...routerProps} handleLogin={this.handleLogin} />} />
