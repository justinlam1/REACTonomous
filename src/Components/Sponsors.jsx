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
import Check from '../Images/checkmark.png';

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
       <div class="parallax">
           <table class="tablecity">
              <tr>
                <th class="benefits">Sponsorship Benefits</th>
                <th>Bronze $1000</th>
                <th>Silver $3000</th>
                <th>Gold $5000</th>
                <th>Platinum $10000</th>
              </tr>
              <tr>
                <td class="benefits">Company Logo: Promotional print on material and yearly banner</td>
                <td><img src={Check}></img></td>
                <td><img src={Check}></img></td>
                <td><img src={Check}></img></td>
                <td><img src={Check}></img></td>
              </tr>
              <tr>
                <td class="benefits">Signed Team Picture</td>
                <td><img src={Check}></img></td>
                <td><img src={Check}></img></td>
                <td></td>
                <td></td> 
              </tr>
              <tr>
                <td class="benefits">Tour of WATonomous</td>
                <td><img src={Check}></img></td>
                <td><img src={Check}></img></td>
                <td><img src={Check}></img></td>
                <td><img src={Check}></img></td> 
              </tr>
              <tr>
                <td class="benefits">Vehicle Company Visit</td>
                <td></td>
                <td><img src={Check}></img></td>
                <td><img src={Check}></img></td>
                <td><img src={Check}></img></td> 
              </tr>
              <tr>
                <td class="benefits">Signed Team Photo on Plaque</td>
                <td></td>
                <td></td>
                <td><img src={Check}></img></td>
                <td><img src={Check}></img></td>
              </tr>
              <tr>
                <td class="benefits">Vehicle at Annual Company Event</td>
                <td></td>
                <td></td>
                <td><img src={Check}></img></td>
                <td><img src={Check}></img></td> 
              </tr>
              <tr>
                <td class="benefits">Cross Promotional Video to be posted on Social Media and Website</td>
                <td></td>
                <td></td>
                <td></td>
                <td><img src={Check}></img></td>
              </tr>
              <tr>
                <td class="benefits">Company logo on vehicle</td>
                <td>Standard</td>
                <td>Standard</td>
                <td>Medium</td>  
                <td>Large</td> 
              </tr>
            </table>
       </div>
       <div class="footer"></div>
      </div>


    );

  };


}


export default Sponsors
