import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
// import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxComponent from 'react-parallax-component';
import testVideo from '../Images/testVideo.mp4';

import WatoSocialCar from '../Images/WatoGroupWithCar.jpg';



import ParallaxImg1 from '../Images/CityPoly.jpg';
import '../Css/styles.css';


class CarouselImage extends Component {

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
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} >
        <Carousel.Item >
          <div>
            <div className = "center" style = {{paddingTop: "0px"}}>
              <h1 className = "carouselHeading" style = {{textAlign:
              "center"}}>ENGINEERING THE FUTURE OF TRANSPORTATION</h1>
              {/* <h1 className = "carou">OF TRANSPORTATION</h1> */}
              <p className = "carouselParagraph2">Waterloo's Autonomous Car Team</p>
            </div>
            <div style={{
              width: '100%',
              height: '100vh',
              overflow: 'hidden',
            }}>
            <div style = {{
              backgroundImage: `url(${this.props.image})`,
              objectFit: 'cover',
              width: '100vw',
              height: '100vh',
              backgroundSize: "100%"
            }} >
          </div>
        </div>
      </div>



    </Carousel.Item>

  </Carousel>

);
}

}
export default CarouselImage;
