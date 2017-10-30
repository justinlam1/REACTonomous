import React, {Component} from 'react';
import '../Css/styles.css';
import WatoLogo from '../Images/WATOlogoblue.svg';

import {Grid, Row, Col} from 'react-bootstrap';


class IndexBody1 extends Component {


  render() {

    return(
      <Grid>
        <Row className="show-grid">
          <Col xs = {3} md = {4}>

          </Col>
          <Col xs={20} md={12}>


            <div className = "OverviewSmall">
              {/* <div className = "spacerMedium" /> */}
              <div className = "spacerBig" />

              <h1 className = "heading" >Canada's leading autonomous vehicle team</h1>
              <div className = "spacerSmall" />

              <p className = "descriptionText">WATonomous is a student design at The University of Waterloo at the forefront in the design, creation, and neural training of autonomous, self-driving vehicles. We are proudly representing Canada in GM's SAE Autodrive Challenge to create a fully autonomous vehicle in a three year timeframe.

              </p>






            </div>
          </Col>
          <Col xs = {3} md = {4}>

          </Col>


        </Row>
        <div className = "spacerMedium" />
        <div style = {{textAlign:"center"}}>
          <img style = {{height:"200px", marginTop: "-50px"}} src = {WatoLogo}/>

        </div>

        <Row className="show-grid" style = {{width:"90%", paddingLeft: "10%"}}>
          <Col sm={6} md={4}>

            <h2 >Year 1</h2>
            <div className = "spacerSmall" />
            <p2 >Focuses on concept selection by having us become familiar with sensing and computation software. These simple missions can include straight roadway driving and object avoidance/detection. The Year 1 final competition will be hosted at GM’s Desert Proving Ground in Yuma, Arizona.</p2>
          </Col>

          <Col sm={6} md={4}>
            <h2 >Year 2</h2>
            <div className = "spacerSmall" />
            <p2>We will refine our concept selections into solid system developments and will have more challenging dynamic events for testing on-site, including dynamic object detection and multiple lane changing.
            </p2>
          </Col>
          <Col sm={6} md={4} >
            <h2  >Year 3</h2>
            <div className = "spacerSmall" />
            <p2 >Will culminate with final validation of our design and concept refinement. Our autonomous car will navigate complex objectives of on-site testing, including higher speeds, roundabouts and moving object detection.</p2></Col>
          </Row>

        </Grid>

      );
    }


  }

  export default IndexBody1;
