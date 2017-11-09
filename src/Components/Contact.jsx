import React from 'react';
import {Component } from 'react';
import {Grid, Row, Col, Button, FormGroup, PageHeader, Form, FormControl,
  ControlLabel, Checkbox } from 'react-bootstrap';

  import Header from './Header.jsx'
  import Footer from './Footer.jsx'
  import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
  import '../Css/styles.css';



  class Contact extends Component {
    componentDidMount() {
      window.scrollTo(0,0);
    }

    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        sponsor: 0,
        email: "",
        subject: "",
        message: "",
        validationState: {
          name: "",
          email: "",
          subject: "",
          message: ""
        }
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getValidationState = this.getValidationState.bind(this);
      this.handleCheck = this.handleCheck.bind(this);

    }

    handleInputChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
      console.log(this.state);
    }
    handleCheck(event) {
      // console.log(this.state.sponsor);

      if (this.state.sponsor == 0) {
        console.log("sponsor was 0");

        this.setState({
          sponsor: 1
        }, () => {
          // console.log(this.state.sponsor);
        });
      } else {
        console.log("sponsor was 1");

        this.setState({
          sponsor: 0
        }, () => {
          // console.log(this.state.sponsor);
        });
      }

      // console.log(this.state);

    }

    handleSubmit(event) {
      console.log(this.state);
      // True if verified to be non-empty
      let vfn = this.state.firstName.trim() !== "";
      let vln = this.state.lastName.trim() !== "";
      let vs = this.state.subject.trim() !== "";
      let vm = this.state.message.trim() !== "";

      // True if empty email
      let ee = this.state.email.trim() === "";

      let ve = !ee && this.validateEmail(this.state.email);

      if (vfn && vln && ve && vs && vm) {
        alert("Form good to go!");
      } else {
        this.setState({
          validationState: {
            name: (vfn && vln) ? "success" : "error",
            subject: vs ? "success" : "error",
            message: vm ? "success" : "error",
            email: ee ? "error" : (ve ? "success" : "warning"),
            status: `          Please ${!vfn || !vln || !vm || !vs || ee ?
              `fill out all fields${!ve && !ee ?
                " and " : ""}` : ""}${!ee && !ve ? "enter a valid email address" : ""}`
              }
            })
          }
        }

        getValidationState(name) {
          console.log(this.state.validationState[name]);
          return this.state.validationState[name];
        }

        validateEmail(email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        }

        render() {

          const MyMapComponent = withScriptjs(withGoogleMap((props) =>
          <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 43.472979, lng: -80.540103}}
            >
              {props.isMarkerShown && <Marker position={{ lat: 43.472979, lng: -80.540103 }} />}
            </GoogleMap>
          ))

          return(
            // Pretty sure there exists React Contact form npm packages we can use
            <div>
              <Header />
              <br/><br/><br /><br/>
              <Grid>
                <Col xsOffset={1} xs={10}>
                  <Row>
                    <PageHeader>Contact Us</PageHeader>
                  </Row>
                  <Row>
                    <Form horizontal>
                      <FormGroup name="name" validationState={this.getValidationState("name")}>
                        <Col xs={6} sm={4}>
                          <ControlLabel>First Name</ControlLabel>
                          <FormControl type="text" onChange={this.handleInputChange} className="contact-form-input" name="firstName"/>
                          <FormControl.Feedback className="formcontrol-feedback"/>
                        </Col>
                        <Col xs={6} sm={4}>
                          <ControlLabel>Last Name</ControlLabel>
                          <FormControl type="text" onChange={this.handleInputChange} className="contact-form-input" name="lastName"/>
                          <FormControl.Feedback className="formcontrol-feedback"/>
                        </Col>
                      </FormGroup>
                      <FormGroup name="email" validationState={this.getValidationState("email")}>
                        <Col xs={12} sm={8}>
                          <ControlLabel>Email</ControlLabel>
                          <FormControl type="email" onChange={this.handleInputChange} className="contact-form-input" name="email"/>
                          <FormControl.Feedback className="formcontrol-feedback"/>
                        </Col>
                      </FormGroup>


                      <br/>
                      <FormGroup name="subject" validationState={this.getValidationState("subject")}>
                        <Col xs={12}>
                          <ControlLabel>Subject</ControlLabel>
                          <FormControl type="text" onChange={this.handleInputChange} className="contact-form-input" name="subject"/>
                          <FormControl.Feedback className="formcontrol-feedback"/>
                        </Col>
                      </FormGroup>
                      <FormGroup name="message" validationState={this.getValidationState("message")}>
                        <Col xs={12}>
                          <ControlLabel>Message</ControlLabel>
                          <FormControl componentClass="textarea" onChange={this.handleInputChange} className="contact-form-input" name="message"/>
                          <FormControl.Feedback className="formcontrol-feedback"/>
                        </Col>
                      </FormGroup>
                      <FormGroup name="sponsor" >
                        <Col xs={12} sm={8}>
                          <Checkbox onChange = {this.handleCheck} name = "sponsor">
                            Are you a inquiring about a sponsorship?
                          </Checkbox>
                          {/* <FormControl type="sponsor" onChange={this.handleInputChange} className="contact-form-input" name="checkbox"/> */}
                          <FormControl.Feedback className="formcontrol-feedback"/>
                        </Col>
                      </FormGroup>
                      <br />
                      <Button className="contact-form-button" onClick={this.handleSubmit}>
                        Send
                      </Button>
                      {this.state.validationState.status}
                    </Form>
                  </Row>
                  <Row>
                    <PageHeader>Our Office</PageHeader>
                  </Row>
                  <Row className="contact-form-bottom">
                    <Col xs={12} sm={4} smPush={8} md={3} mdPush={9}>
                      University of Waterloo
                      <br/>
                      Engineering 5
                      <br/>
                      200 University Ave W
                      <br/>
                      Waterloo, ON
                      <br/>
                      N2L 3E9
                      <br/>
                      <br/>
                    </Col>
                    <Col xs={12} sm={8} smPull={4} md={9} mdPull={3}
                      style={{height: 400 + "px", border: "1px solid black"}} className = "map-column">
                      <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
                        containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                        mapElement={<div style={{ height: `100%`, width: `100%` }} />}
                      />
                    </Col>
                  </Row>
                </Col>

              </Grid>
              <Footer/>
            </div>
          );

        };


      }


      export default Contact
