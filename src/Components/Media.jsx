import React from 'react';
import {Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import Header from './Header.jsx'
import '../Css/styles.css';
import CarouselImage from './CarouselImage.jsx';

import MediaBody1 from './MediaBody1.jsx';
import MediaBody2 from './MediaBody2.jsx';

import WatoCarArrived from '../Images/WatoCarArrived.jpg';



class Media extends Component {



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
        <MediaBody1 />
        <MediaBody2 />
      </div>

    );

  };


}


export default Media
