import React from 'react';
import {Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import Header from './Header.jsx'
import '../Css/sponsors.css';
import CarouselImage from './CarouselImage.jsx';
import SponsorBody1 from './SponsorBody1.jsx';
import WATOimage from '../Images/WatoGroupWithCar.jpg';

import GM from '../Images/GM.png';
import SAE from '../Images/SAE.png';
import UWEng from '../Images/logo_Waterloo_600.jpeg';
import MathWorks from '../Images/MathWorkslogo.jpg';
import TASS from '../Images/Tasslogo.png';
import CON from '../Images/Continental.png'; 
import Intel from '../Images/Intellogo.png'; 
import Velo from '../Images/Velodyne.png'; 

class Sponsors extends Component {

  render() {

    return(
      //I was thinking having quotes in a large font from news releases and linking the newspaper logo next to it, all in a column form.
      <div>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Raleway');
        </style>
        <Header
          home = {0}
         />
            <CarouselImage 
            image = {WATOimage}
        />
        <div class="spacer"></div>
        <h1 class="title">Our Sponsors</h1>
        <div class="containBlurb">
          <p id="blurb">As WATonomous grows, it requires a significant investment into software and
                      hardware. These investments are possible through the gracious support of our
                      sponsors.</p>          
        </div>
       <div class="separation"></div>
       <div class="sponsors">
         <img src={GM} alt="General Motors"></img>
         <img src={SAE} alt="SAE International"></img>
         <img id="UWEng" src={UWEng} alt="Waterloo Engineering"></img>
         <img id="Math" src={MathWorks} alt="MathWorks"></img>
         <img id="tass" src={TASS} alt="Tass International"></img>
         <img id="con" src={CON} alt="Continental"></img>
         <img id="intel" src={Intel} alt="Intel"></img>
         <img id="velo" src={Velo} alt="Velodyne liDAR"></img>
       </div>
       <div class="spacer2"></div>
       <div class="parallax"></div>
       <div class="spacer"></div>
      </div>


    );

  };


}


export default Sponsors
