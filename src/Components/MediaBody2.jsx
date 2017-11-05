import React, {Component} from 'react';

import '../Css/styles.css';
import WatoLogo from '../Images/SAE.png';




import newsLogo1 from '../Images/newsLogo1.png';
import newsLogo2 from '../Images/newsLogo2.png';
import newsLogo3 from '../Images/newsLogo3.png';
import newsLogo4 from '../Images/newsLogo4.png';
import newsLogo5 from '../Images/newsLogo5.jpg';
import newsLogo6 from '../Images/newsLogo6.svg';



import {Grid, Row, Col} from 'react-bootstrap';

class MediaBody2 extends Component {


  render() {

    const headline = {
      fontSize: "20px",
      marginTop: "-10px",
      textAlign: "center",
    }
    const logoStyle = {
      height: "150px",
    }

    return(

      <Grid>

        <hr />

        <h1 className = "heading" >Follow us on the news</h1>
        <div className = "spacerSmall">

        </div>


        <p className = "descriptionText">"They will work with real-world applications of advanced computation methods such as computer vision, pattern recognition, and autonomous vehicle controls." <br /> - GM Newsroom
        <br /><br /> The main prize is being accepted to compete. We get the vehicle and the funding to do this project. That's the main benefit for the students.<br /> - Dr. Derek Rayside, UWaterloo professor and project mentor
      </p>
      <div className = "spacerBig">

      </div>



      <Row className="show-grid" style = {{width:"90%", paddingLeft: "20%"}}>
        <Col sm={6} md={4}>
          <a href = "http://media.gm.ca/media/ca/en/gm/home.detail.html/content/Pages/news/ca/en/2017/Apr/0405_Autonomous.html">
          <div style = {{textAlign:"center"}}>
            <img style = {logoStyle} src = {newsLogo1}/>
          </div>
          <div className = "spacerSmall" />
          <h2 style = {headline}>  Two Canadian Universities Selected for New Autonomous Vehicle Competition</h2>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <a href = "http://www.cbc.ca/listen/shows/the-morning-edition-k-w/episode/12268334">
          <div style = {{textAlign:"center"}}>
            <img style = {logoStyle} src = {newsLogo6}/>
          </div>
          <div className = "spacerSmall" />
          <h2 style = {headline}>  University of Waterloo students take on autonomous vehicle challenge</h2>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <a href = "http://www.theglobeandmail.com/news/national/two-canadian-universities-selected-for-north-american-self-driving-car-competition/article34699641/">
          <div style = {{textAlign:"center"}}>
            <img style = {logoStyle} src = {newsLogo2}/>
          </div>
          <div className = "spacerSmall" />
          <h2 style = {headline}>  Two Canadian universities picked for North American self-driving car competition</h2>
          </a>
        </Col>

      </Row>
      <div className = "spacerBig"/>

      <Row className="show-grid" style = {{width:"90%", paddingLeft: "20%"}}>
        <Col sm={6} md={4}>
          <a href = "http://www.therecord.com/news-story/7243676-uw-will-strut-its-stuff-in-north-american-self-driving-car-competition/">
          <div style = {{textAlign:"center"}}>
            <img style = {logoStyle} src = {newsLogo3}/>
          </div>
          <div className = "spacerSmall" />
          <h2 style = {headline}>  UW will strut its stuff in North American self-driving car competition</h2>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <a href = "http://www.cbc.ca/news/canada/kitchener-waterloo/autonomous-vehicle-uw-gm-1.4063898">
          <div style = {{textAlign:"center"}}>
            <img style = {logoStyle} src = {newsLogo6}/>
          </div>
          <div className = "spacerSmall" />
          <h2 style = {headline}>  Look mom, no hands! UW students part of driverless car competition</h2>
          </a>
        </Col>
        <Col sm={6} md={4} >
          <a href = "https://uwaterloo.ca/engineering/news/waterloo-selected-autonomous-vehicle-competition" >
          <div style = {{textAlign:"center"}}>
            <img style = {logoStyle} src = {newsLogo5}/>
          </div>
          <div className = "spacerSmall" />
          <h2 style = {headline}>  Waterloo selected for autonomous vehicle competition</h2>
        </a>
        </Col>
      </Row>

      <div className = "spacerBig"/>


      <Row className="show-grid" style = {{width:"90%", paddingLeft: "20%"}}>
        <Col sm={6} md={4}>
          <a href = "https://uwaterloo.ca/daily-bulletin/2017-04-06" >
          <div style = {{textAlign:"center"}}>
            <img style = {logoStyle} src = {newsLogo5}/>
          </div>
          <div className = "spacerSmall" />
          <h2 style = {headline}>  Waterloo kicks AutoDrive competition into high gear</h2>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <a href = "http://www.570news.com/2017/04/15/university-waterloo-team-enters-auto-drive-challenge-develop-self-driving-car/">
          <div style = {{textAlign:"center"}}>
            <img style = {logoStyle} src = {newsLogo4}/>
          </div>
          <div className = "spacerSmall" />
          <h2 style = {headline}>   University of Waterloo team enters “Auto Drive Challenge” to develop self-driving car</h2>
          </a>
        </Col>

        {/* <Col xs={4}>
        <div style = {{textAlign:"center"}}>
        <img style = {{height:"200px",}} src = {newsLogo4}/>
      </div>
      <div className = "spacerSmall" />
      <h2 style = {headline}>University of Waterloo team enters “Auto Drive Challenge” to develop self-driving car</h2>
    </Col> */}
  </Row>
  <div className = "spacerBig"/>


</Grid>


);
}

}

export default MediaBody2
