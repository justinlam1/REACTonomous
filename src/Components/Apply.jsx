import React from 'react';
import {Component } from 'react';
import {Grid, Row, Col, Button, FormGroup, PageHeader, Form, FormControl,
        ControlLabel, Checkbox, Radio } from 'react-bootstrap';

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import '../Css/styles.css';


class Apply extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            programTerm: "",
            program: "",
            returningMember: 0,
            validationState: {
                name: "",
                email: "",
                programTerm: "",
                program: ""
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.sendMyMail = this.sendMyMail.bind(this);


    }

    sendMyMail(event) {


    }

    handleInputChange(event) {

    }
    handleCheck(event) {


    }

    handleSubmit(event) {

    }

    getValidationState(name) {

    }

    validateEmail(email) {

    }



    render() {
        return(
            <div>
                <Header />
                <br/><br/><br /><br/>
                <Grid>
                    <Col xsOffset={1} xs={10}>
                        <Row>
                            <PageHeader>Winter 2018 Signup</PageHeader>
                        </Row>
                        <row>
                            <p>
                                <strong>IMPORTANT: </strong>
                                All applicants must read the&nbsp;
                                <a href="http://watonomous.ca/role-descriptions/">Role Descriptions</a>
                                &nbsp;page for detailed descriptions of the Winter 2018 roles before applying.
                            </p>
                            <p>WATonomous is the only student design team to be developing a fully autonomous vehicle, an engineering objective that is challenging for Tesla, GM, and Ford. There is no defined solution for an autonomous vehicle. This will be an experience that you will not be able to achieve on any other team or co-op job. Over $100,000 USD in funding, sensors, computing and most importantly, the Chevrolet Bolt Electric Vehicle are waiting for you to transform it into an autonomous vehicle. We require serious candidates that can prove their responsibility.</p>
                            <p>Do you like a challenge? What excites you about autonomous vehicles and WATonomous? What are your goals and something you want to get better at in 4 months? We can help you achieve these goals for your future co-op work placements, or even for side projects. Whatever it is you fancy, WATonomous is set on helping you achieve these goals. While we do prefer applicants with relevant technical experience, we put emphasis on people who can prove they are passionate self-learners, researchers, and a team player. Please tell us about your areas of interest and if your application is successful we will place you in a role best suited to you!</p>
                        </row>
                        <br /><br />
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
                                        <ControlLabel>University of Waterloo Email</ControlLabel>
                                        <FormControl type="email" onChange={this.handleInputChange} className="contact-form-input" name="email"/>
                                        <FormControl.Feedback className="formcontrol-feedback"/>
                                    </Col>
                                </FormGroup>


                                <br/>
                                <FormGroup name="programTerm" validationState={this.getValidationState("programTerm")}>
                                    <Col xs={12}>
                                        <ControlLabel>Program Term (ex: 4A)</ControlLabel>
                                        <FormControl type="text" onChange={this.handleInputChange} className="contact-form-input" name="programTerm"/>
                                        <FormControl.Feedback className="formcontrol-feedback"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup name="program" validationState={this.getValidationState("program")}>
                                    <Col xs={12}>
                                        <ControlLabel>Program</ControlLabel>
                                        <FormControl type="text" onChange={this.handleInputChange} className="contact-form-input" name="program"/>
                                        <FormControl.Feedback className="formcontrol-feedback"/>
                                    </Col>
                                </FormGroup>
                                
<br />

                                <FormGroup name="field-1-1" >
                                    <Col xs={12} sm={8}>
                                        <label>Will you be in Waterloo for the Winter 2018 term?</label>
                                        <Radio>
                                            Yes
                                        </Radio>
                                        <Radio>
                                            No
                                        </Radio>
                                    </Col>
                                </FormGroup>

                                <FormGroup name="field-1-2" >
                                    <Col xs={12} sm={8}>
                                        <label>Will you be on a school term in Winter 2018?</label>
                                        <Radio>Yes</Radio>
                                        <Radio>No</Radio>
                                    </Col>
                                </FormGroup>
                                
                                <FormGroup name="field-1-3" >
                                    <Col xs={12} sm={8}>
                                        <label>Are you interested in a subteam lead position?</label>
                                        <Radio>Yes</Radio>
                                        <Radio>No</Radio>
                                    </Col>
                                </FormGroup>
                                
                                <FormGroup name="field-1-4" >
                                    <Col xs={12} sm={8}>
                                        <ControlLabel>Have you previously been a part of WATonomous?</ControlLabel>
                                        <p>If you were not previously a member of WATonomous, please select 'None'.</p>
                                        <select class="form-control">
                                            <option value="None">None</option>
                                            <option value="Software Interface Management">Software Interface Management</option>
                                            <option value="Sensor Fusion">Sensor Fusion</option>
                                            <option value="Perception">Perception</option>
                                            <option value="Prediction">Prediction</option>
                                            <option value="Local Mapping">Local Mapping</option>
                                            <option value="Global Mapping">Global Mapping</option>
                                            <option value="Path Planning">Path Planning</option>
                                            <option value="Simulation">Simulation</option>
                                            <option value="User Interface">User Interface</option>
                                            <option value="Embedded Implementation and Controls">Embedded Implementation and Controls</option>
                                            <option value="Signals Processing and Amplifier Design">Signals Processing and Amplifier Design</option>
                                            <option value="Vehicle Dynamics">Vehicle Dynamics</option>
                                            <option value="Sensor Mounting and Cooling">Sensor Mounting and Cooling</option>
                                            <option value="Internal Affairs">Internal Affairs</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Sponsorship">Sponsorship</option>
                                            <option value="Website">Website</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                        </select>
                                        <br />
                                        
                                    </Col>
                                </FormGroup>

                                <br />
                                <div>
                                    <h3>As a core member, select and rank your subteam preferences</h3>
                                    <p>Rank your subteam preferences from 1 - 5, where 5 is your top preference. You can rank subteams the same if you don't prefer one over the other.</p>
                                </div>
                                <br />
                                <FormGroup name="field-2-1" >
                                    <Col xs={12} sm={8}>
                                        <ControlLabel>Subteam 1</ControlLabel>
                                        <select class="form-control">
                                            <option value="Software Interface Management">Software Interface Management</option>
                                            <option value="Sensor Fusion">Sensor Fusion</option>
                                            <option value="Perception">Perception</option>
                                            <option value="Prediction">Prediction</option>
                                            <option value="Local Mapping">Local Mapping</option>
                                            <option value="Global Mapping">Global Mapping</option>
                                            <option value="Path Planning">Path Planning</option>
                                            <option value="Simulation">Simulation</option>
                                            <option value="User Interface">User Interface</option>
                                            <option value="Embedded Implementation and Controls">Embedded Implementation and Controls</option>
                                            <option value="Signals Processing and Amplifier Design">Signals Processing and Amplifier Design</option>
                                            <option value="Vehicle Dynamics">Vehicle Dynamics</option>
                                            <option value="Sensor Mounting and Cooling">Sensor Mounting and Cooling</option>
                                            <option value="Internal Affairs">Internal Affairs</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Sponsorship">Sponsorship</option>
                                            <option value="Website">Website</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                        </select>
                                        <br />
                                        <select class="form-control">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </Col>
                                </FormGroup>

                                <FormGroup name="field-2-2" >
                                    <Col xs={12} sm={8}>
                                        <ControlLabel>Subteam 2</ControlLabel>
                                        <select class="form-control">
                                            <option value="Software Interface Management">Software Interface Management</option>
                                            <option value="Sensor Fusion">Sensor Fusion</option>
                                            <option value="Perception">Perception</option>
                                            <option value="Prediction">Prediction</option>
                                            <option value="Local Mapping">Local Mapping</option>
                                            <option value="Global Mapping">Global Mapping</option>
                                            <option value="Path Planning">Path Planning</option>
                                            <option value="Simulation">Simulation</option>
                                            <option value="User Interface">User Interface</option>
                                            <option value="Embedded Implementation and Controls">Embedded Implementation and Controls</option>
                                            <option value="Signals Processing and Amplifier Design">Signals Processing and Amplifier Design</option>
                                            <option value="Vehicle Dynamics">Vehicle Dynamics</option>
                                            <option value="Sensor Mounting and Cooling">Sensor Mounting and Cooling</option>
                                            <option value="Internal Affairs">Internal Affairs</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Sponsorship">Sponsorship</option>
                                            <option value="Website">Website</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                        </select>
                                        <br />
                                        <select class="form-control">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </Col>
                                </FormGroup>

                                <FormGroup name="field-2-3" >
                                    <Col xs={12} sm={8}>
                                        <ControlLabel>Subteam 3</ControlLabel>
                                        <select class="form-control">
                                            <option value="Software Interface Management">Software Interface Management</option>
                                            <option value="Sensor Fusion">Sensor Fusion</option>
                                            <option value="Perception">Perception</option>
                                            <option value="Prediction">Prediction</option>
                                            <option value="Local Mapping">Local Mapping</option>
                                            <option value="Global Mapping">Global Mapping</option>
                                            <option value="Path Planning">Path Planning</option>
                                            <option value="Simulation">Simulation</option>
                                            <option value="User Interface">User Interface</option>
                                            <option value="Embedded Implementation and Controls">Embedded Implementation and Controls</option>
                                            <option value="Signals Processing and Amplifier Design">Signals Processing and Amplifier Design</option>
                                            <option value="Vehicle Dynamics">Vehicle Dynamics</option>
                                            <option value="Sensor Mounting and Cooling">Sensor Mounting and Cooling</option>
                                            <option value="Internal Affairs">Internal Affairs</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Sponsorship">Sponsorship</option>
                                            <option value="Website">Website</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                        </select>
                                        <br />
                                        <select class="form-control">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </Col>
                                </FormGroup>
                                <br />
                                <div>
                                    <h3>Application questions and resume</h3>
                                    <br />
                                    <FormGroup name="field-3-1">
                                        <Col xs={12}>
                                            <ControlLabel>Why are you interested in joining WATonomous?</ControlLabel>
                                            <FormControl componentClass="textarea" className="contact-form-input" name="message"/>
                                            <FormControl.Feedback className="formcontrol-feedback"/>
                                        </Col>
                                    </FormGroup>
                                    <br />
                                    <FormGroup name="field-3-1">
                                        <Col xs={12}>
                                            <ControlLabel>Tell us about any qualities that would make you an asset to the WATonomous team.</ControlLabel>
                                            <FormControl componentClass="textarea" className="contact-form-input" name="message"/>
                                            <FormControl.Feedback className="formcontrol-feedback"/>
                                        </Col>
                                    </FormGroup>
                                </div>
                                <br />
                                <FormGroup>
                                    <Col xs={12}>
                                    <ControlLabel>Please upload your resume here</ControlLabel>
                                        <p>Accepted file types: .pdf</p>
                                    <input type="file" id="formControlsFile"></input>
                                    </Col>
                                </FormGroup>
                                
                                <FormGroup>
                                    <Col xs={12}>
                                    <ControlLabel>Please add any additional comments here</ControlLabel>
                                        <FormControl type="text" className="contact-form-input"/>
                                    </Col>
                                </FormGroup>
                                

                                <br />
                                <Button className="contact-form-button" onClick={this.handleSubmit}>
                                    Send
                                </Button>
                                {this.state.validationState.status}
                            </Form>
                        </Row>
                        <br />
                        <br />
                    </Col>

                </Grid>
                <Footer/>
            </div>
        );
    }
}


export default Apply