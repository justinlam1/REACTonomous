import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
// import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxComponent from 'react-parallax-component';
import testVideo from '../Images/testVideo.mp4';
import {Grid, Row, Col, Button} from 'react-bootstrap';



import ParallaxImg1 from '../Images/CityPoly.jpg';
import '../Css/styles.css';
import '../Css/carousel.css';


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
    return(
      // <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} >
      //   <Carousel.Item >
          <div >

            {/* <ParallaxComponent
              speed="0.003"
              width="300"
              top="40%"
              left="100"
              >
              <div>
              <div className = "Carousel" alt="900x500" />
            </div>
          </ParallaxComponent> */}

          <div className = "centerTop" style = {{paddingTop: "0px"}}>
            <h1 className = "carouselHeading" style = {{textAlign:
            "center"}}>ENGINEERING THE FUTURE OF TRANSPORTATION</h1>
            {/* <h1 className = "carou">OF TRANSPORTATION</h1> */}
            <p className = "carouselParagraph2">Waterloo's Autonomous Car Team</p>
            <div style = {{textAlign:'center'}}>
              <Button bsStyle="primary" style = {{margin: '20px', fontSize: '20px'}}>Sponsors</Button>
              <Button bsStyle="primary"  style = {{margin: '20px', fontSize: '20px'}} >Our Team</Button>
            </div>



          </div>
          <div style={{
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
          }} >


          <div className = "inShadow" style = {{zIndex: '1000'}}>
            <video autoPlay muted   loop style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }} src= "https://www.dl.dropboxusercontent.com/s/lh2i4rvcerwxq7h/Wato_Intro3.mov?dl=0"
          />
          </div>

      </div>

    </div>

// </Carousel>

);
}

}
export default CarouselStyled;
