import React from 'react';
import {Component } from 'react';
import {Grid, Row, Col, Button, FormGroup, PageHeader, Form, FormControl,
        ControlLabel, Checkbox } from 'react-bootstrap';

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
            subject: "",
            message: "",

        }


    }
    render() {
        return(<h1>Fall 2017 Signup</h1>)
               }
               }


               export default Apply
