import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import '../Layout.css'
import axios from 'axios'
import Navigation from '../Navigation/Navigation';
import ResponsiveMenu from 'react-responsive-navbar'
import HamburgerDiv from '../HamburgerDiv/HamburgerDiv'
import ArrowDiv from '../ArrowDiv/ArrowDiv'


class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      message: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/users', {"user": this.state})
    .then(res => {
      this.setState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        message: ''
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

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
          <h1>Contact Us</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="contactName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" onChange={this.handleChange} value={this.state.first_name} name="first_name" placeholder="John" />
            </Form.Group>
            <Form.Group controlId="contactName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" onChange={this.handleChange} value={this.state.last_name} name="last_name" placeholder="Doe" />
            </Form.Group>
            <Form.Group controlId="contactPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" onChange={this.handleChange} value={this.state.phone_number} name="phone_number" placeholder="555-555-5555" />
            </Form.Group>
            <Form.Group controlId="contactEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" onChange={this.handleChange} value={this.state.email} name='email' placeholder="name@example.com" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="contactDescription">
              <Form.Label>Tell Us About Your Furry Friend</Form.Label>
              <Form.Control as="textarea" rows="5" onChange={this.handleChange} name="message" value={this.state.message} />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }

}

export default Contact;
