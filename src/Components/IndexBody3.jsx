import React, {Component} from 'react';
import '../Css/styles.css';
import WatoLogo from '../Images/WATOlogoblue.svg';

import {Grid, Row, Col} from 'react-bootstrap';
import Intel from '../Images/Intellogo.png';
import MathWorks from '../Images/Mathworkslogo.svg';
import Velodyne from '../Images/Velodynelogo.png';
import WaterlooEng from '../Images/WaterlooGooseLogo.jpeg';
import GeneralM from '../Images/GMlogo.jpg'

import DynamicImage from '../Images/dynamicCar.jpg';
import LaneChange from '../Images/laneChange.jpg';
import Detection from '../Images/detectionLidar.png';
import LaneSwap from '../Images/laneswapper.png';


class IndexBody3 extends Component {


  render() {

    return(
      <div className = "greyBackgroundColor">
        <Grid>
          <Row className="show-grid">
            <Col xs = {3} md = {4}>

            </Col>
            <Col xs={20} md={12}>

              <div className = "OverviewSmall">
                {/* <div className = "spacerMedium" /> */}
                <div className = "spacerBig" />
                <h1 className = "heading" >Bolting design</h1>
                <div className = "spacerSmall" />
                <p className = "descriptionText">Using cutting edge cameras, lidar sensors, and industry leading image processing, WATonomous is configuring the Bolt in a reliable autonomous car. Integration of our packages into a cohesive project will let us excel at the core principals of autonomous vehicles
                </p>

              </div>
            </Col>
            <Col xs = {3} md = {4}>

            </Col>


          </Row>
          <div className = "spacerMedium" />
          {/* <img style = {{height:"200px", marginTop: "-50px"}} src = {WatoLogo}/> */}

          <Row className="show-grid" style = {{width:"90%", paddingLeft: "10%", textAlign:"center"}}>
            <Col sm={6} md={4}>
              <img style = {{height:"200px", marginTop: "-50px"}} src = {Detection}/>

              <h2 style = {{textAlign:"center"}}>Object Detection</h2>
              <div className = "spacerSmall" />

            </Col>

            <Col sm={6} md={4}>
              <img style = {{height:"200px", marginTop: "-50px"}} src = {LaneSwap}/>

              <h2 style = {{textAlign:"center"}}>Multi-Lane Changing</h2>
              <div className = "spacerSmall" />

            </Col>
            <Col sm={6} md={4}>
              <img style = {{height:"200px", marginTop: "-50px"}} src = {DynamicImage}/>
              <h2 style = {{textAlign:"center"}} >Dynamic Collision Avoidance</h2>
              <div className = "spacerSmall" />
            </Col>
            </Row>

          </Grid>
        </div>

      );
    }


  }

  export default IndexBody3;
