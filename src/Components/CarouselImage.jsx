import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
// import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxComponent from 'react-parallax-component';
import testVideo from '../Images/testVideo.mp4';

import WatoSocialCar from '../Images/WatoGroupWithCar.jpg';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'


import DownArrow from '../Images/down-arrow.svg';
import ParallaxImg1 from '../Images/CityPoly.jpg';
import '../Css/styles.css';
import '../Css/carousel.css';



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

    const arrowStyle = {
      backgroundSize: 'contain',
      backgroundImage: `url(${DownArrow})`,
      opacity: '0.7',
    }

    return(
      // <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} >
      //   <Carousel.Item >
      <div>

        <div style={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}>
        <div style = {{
          backgroundImage: `url(${this.props.image})`,
          backgroundPosition: '50%',
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          backgroundSize: "cover"
        }} >
      </div>

      <div className = "centerTop2" style = {{paddingTop: "0px"}}>
        <h1 className = "carouselHeading" style = {{textAlign:
          "left"}}>Sponsors</h1>

          <p className = "carouselParagraph2" style = {{textAlign:'left'}}></p>
          <div style = {{textAlign:'center', paddingTop: '50px'}}>

          </div>
        </div>



        <a href='#welcome'><div className = "downArrow" style = {arrowStyle}>
        </div></a>



      </div>
    </div>


    //
    //   </Carousel.Item>
    //
    // </Carousel>

  );
}

}
export default CarouselImage;
