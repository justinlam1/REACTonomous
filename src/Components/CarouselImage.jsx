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
import Scrollchor from 'react-scrollchor';



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
        <div className = "inShadowDark" style = {{zIndex:'1'}}  />

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
          backgroundSize: "cover",
          zIndex: '-1',
        }} >
      </div>

      <Grid>

        <div className = "centerTop" style = {{paddingTop: "0px", zIndex: "2", textAlign:'left'}}>
          <h1 className = "carouselHeading" >{this.props.title}</h1>
            <p className = "carouselSubtitle" style = {{textAlign:'left'}}>{this.props.subtitle}</p>
            <div style = {{textAlign:'center', paddingTop: '50px'}}>
              <div style = {{width:"80%", paddingLeft:"20%" }}>



              </div>
            </div>
            <Scrollchor to='#welcome'><div className = "downArrow" style = {arrowStyle}></div></Scrollchor>
            {/* A down arrow that jumps to the start of Indexbody1 Component */}
          </div>


        </Grid>







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
