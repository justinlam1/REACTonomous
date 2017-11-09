import React, {Component} from 'react';
import '../Css/styles.css';
import WatoLogo from '../Images/WATOlogoblue.svg';

import {Grid, Row, Col} from 'react-bootstrap';


class IndexBody2 extends Component {


  render() {

    return(
      <Grid style = {{backgroundColor: "#FFF"}}>
        <Row className="show-grid">
          <Col xs = {3} md = {4}>

          </Col>
          <Col xs={20} md={12}>


            <div className = "OverviewSmall" style = {{backgroundColor: "#FFF"}}>
              {/* <div className = "spacerMedium" /> */}
              <div className = "spacerBig" />

              <h1 className = "heading" >SAE Autodrive Challenge</h1>
              <div className = "spacerSmall" />

              <p className = "descriptionText">This newly established, three-year autonomous vehicle competition will task students to develop and demonstrate a full autonomous driving passenger vehicle. The technical goal of the competition is to navigate an urban driving course in an automated driving mode as described by the SAE Standard. Visit the <a href = "https://media.gm.com/media/us/en/gm/news.detail.html/content/Pages/news/us/en/2017/apr/0405-autodrive.html"> official post by GM </a> and the <a href = "https://uwaterloo.ca/engineering/news/waterloo-selected-autonomous-vehicle-competition" > University of Waterloo</a> for more information​.

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


    </Grid>

  );
}


}

export default IndexBody2;
