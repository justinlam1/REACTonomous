import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
// import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxComponent from 'react-parallax-component';
import testVideo from '../Images/testVideo.mp4';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import { Link } from 'react-router-dom'


import ParallaxImg1 from '../Images/CityPoly.jpg';
import '../Css/styles.css';
import '../Css/carousel.css';
import DownArrow from '../Images/down-arrow.svg';
import ScrollableAnchor from 'react-scrollable-anchor'


class CarouselStyled extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      index : 0,
      direction: 'next',
    }

    this.handleSelect = this.handleSelect.bind(this)

  }

  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }



  render() {

    const buttonStyle = {
      background:'rgba(0,0,0,0.7)',
      textAlign:'center',
      color:'#EEE',
      margin: '20px',
      fontSize: '20px',
      // width: "200px",
      height: "50px",
      borderRadius:'0px',
      opacity: '1',
      border: '1px',
      zIndex: '2000',
    }
    const arrowStyle = {
      backgroundSize: 'contain',
      backgroundImage: `url(${DownArrow})`,
      opacity: '0.7',
    }

    const linkStyle = {

      backgroundColor:"#fff",
      // width: '20px',
      // float:'left',
      textAlign:'center',
      display: 'inline-block',


    }
    const linkStyle2 = {
      // width: '50vw',
      // float:'none',
      backgroundColor:"#fff",
      textAlign:'center',
      // float:'center',
      // display: 'block',

      // margin: '0 auto',



    }

    return(
      // <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} >
      //   <Carousel.Item >

      <div >

        <div className = "inShadow" style = {{zIndex:'1'}}  />
        {/*  Artifically adds a shadow on top of the video. The zIndex is important to show text above this dark shadow*/}


        <div style={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }} >


        <div >
          <video  autoPlay muted   loop style={{
            objectFit: 'cover',
            width: '100vw',
            height: '100vh',
            zIndex: '-1',
          }} src= "https://www.dl.dropboxusercontent.com/s/lh2i4rvcerwxq7h/Wato_Intro3.mov?dl=0"
        />
      </div>

      <Grid>

        <div className = "centerTop" style = {{paddingTop: "0px", zIndex: "2"}}>
          <h1 className = "carouselHeading" style = {{textAlign:
            "center"}}>ENGINEERING THE FUTURE OF TRANSPORTATION</h1>
            <p className = "carouselParagraph2">Waterloo's Autonomous Car Team</p>
            <div style = {{textAlign:'center', paddingTop: '50px'}}>
              <div style = {{width:"80%", paddingLeft:"20%" }}>
                <Row>
                <Col md={6} mdPush={6} style = {{textAlign:'center'}}>
                  {/* React columns were used to better center the buttons */}
                  <a href='#SAE'  style = {linkStyle} style = {{float:'center'}} ><div className = "buttonDark" >SAE Challenge</div> </a>

                </Col>
                <Col md={6} mdPull={6}>
                  <a href='#welcome'  style = {linkStyle} style = {{float:'center'}} ><div className = "buttonDark" >WATonomous</div> </a>
                </Col>
              </Row>



              </div>
            </div>

            <a href='#welcome'><div className = "downArrow" style = {arrowStyle}></div></a>
            {/* A down arrow that jumps to the start of Indexbody1 Component */}
          </div>


        </Grid>

      </div>
      {/* <div className = "downArrow2" >

    </div> */}


  </div>

  // </Carousel>

);
}

}
export default CarouselStyled;
