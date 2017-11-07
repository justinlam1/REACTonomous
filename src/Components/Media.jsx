import React from 'react';
import {Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import '../Css/styles.css';
import CarouselImage from './CarouselImage.jsx';

import MediaBody1 from './MediaBody1.jsx';
import MediaBody2 from './MediaBody2.jsx';

import WatoCarArrived from '../Images/WatoCarArrived.jpg';
import ScrollableAnchor from 'react-scrollable-anchor'



class Media extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {

    return(
      //I was thinking having quotes in a large font from news releases and linking the newspaper logo next to it, all in a column form.
      <div style = {{maxWidth: "100%"}}>


        <Header
          home = {0}
         />
        <CarouselImage
          image = {WatoCarArrived}
          title = "MEDIA"
          subtitle = "Gallery and widespread coverage of WATonomous in the news"
         />
         <section id="welcome" style = {{paddingTop:"20px"}}>
           <div></div>
         </section>
        <MediaBody1 />
        <MediaBody2 style = {{maxWidth: "100vw"}}/>
       <Footer/>
      </div>

    );

  };


}


export default Media
