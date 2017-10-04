import React, {Component}  from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import ParallaxImg1 from '../Images/CityPoly.jpg';
import '../Css/styles.css';

import BodyIndex from './BodyIndex.jsx';




class Body extends Component {

  render() {

    return (
      <div>
        <BodyIndex/>

        <div style = {{height: "500px"}}>
          <Parallax bgImage={ParallaxImg1} strength={400} style = {{zIndex: "3"}} >
            <div className = "spacerBig"/>
            <div className = "spacerBig"/>

            <div style = {{backgroundColor: "#222", width: "400px", marginLeft: "80px", textAlign: "left", paddingLeft: "10px"}}>
              <h1 className = "ParallaxTitle">   Waterloo. Autonomous </h1>

            </div>
            <div className = "spacerBig"/>
            <div className = "spacerBig"/>



          </Parallax>
        </div>

        <BodyIndex />


      </div>
    );

  }

}

export default Body;