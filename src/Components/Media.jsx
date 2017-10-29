import React from 'react';
import {Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import Header from './Header.jsx'
import '../Css/styles.css';
import CarouselImage from './CarouselImage.jsx';

import MediaBody1 from './MediaBody1.jsx';
import WatoCarArrived from '../Images/WatoCarArrived.jpg';



class Media extends Component {

  handleGalleryClick(i) {
    console.log(i, "kasjhgdasj\n");
  }


  render() {

    return(
      //I was thinking having quotes in a large font from news releases and linking the newspaper logo next to it, all in a column form.
      <div>


        <Header
          home = {0}
         />
        <CarouselImage
          image = {WatoCarArrived}
         />
        <MediaBody1
          onClick = {i => this.handleGalleryClick(i)}
        />
      </div>

    );

  };


}


export default Media
