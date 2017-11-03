import React, {Component}  from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import logo from '../Images/logo.svg';
import { SocialIcon } from 'react-social-icons';


import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import CarouselStyled from './CarouselStyled.jsx';
// import { Parallax } from 'react-scroll-parallax';

import '../Css/styles.css';
import '../Css/index.css';

import IndexBody1 from './IndexBody1.jsx';
import IndexBody2 from './IndexBody2.jsx';
import IndexBody3 from './IndexBody3.jsx';


import ParallaxImg1 from '../Images/CityPoly.jpg';
import BoltFront from '../Images/BoltFront4.png';
import Watleader from '../Images/WatLeaders.jpg';
import BoltChasis from '../Images/BoltChasis.jpeg';
import WatoSocialMedia from '../Images/WatoGroupSocial.jpg';
import WatoSocialCar from '../Images/WatoGroupWithCar.jpg';

import {ShareButtons,ShareCounts,generateShareIcon} from 'react-share';





class Index extends Component {

  render() {
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');

    const {
      FacebookShareButton,
      GooglePlusShareButton,
      LinkedinShareButton,
      TwitterShareButton,
      TelegramShareButton,
      WhatsappShareButton,
      PinterestShareButton,
      VKShareButton,
      OKShareButton,
      RedditShareButton,
      EmailShareButton,
    } = ShareButtons;

    const iconStyle = {
  height: '55px', width: '55px', margin: '10px', backgroundColor: '#FFF', borderRadius: "76px",

    }

    return (
      <div>
        <ParallaxProvider>


          <Header
            home = {1}
          />
          <CarouselStyled />

          <IndexBody1/>
          <div className = "spacerBig">

          </div>

          <div style = {{height: "700px"}}>
            <Parallax bgImage={BoltChasis} strength={400} >
              <div className = "shadowBox2"></div>

              <div style = {{height: "50px"}}> </div>
              <div style = {{ width: "100%", textAlign: "center"}}>
                <h1 className = "heading" style = {{color:"#FFF"}}>Electric Self Driving Vehicle
                </h1>
                <h2 style = {{color:"#FFF", textAlign:"center", fontSize: "18px"}}>Sponsor one of the leading autonomous vehicle teams in Canada
                </h2>
                <Button bsStyle="primary" >Sponsors</Button>
                <div style = {{height: "400px"}}> </div>
              </div>
            </Parallax>
          </div>
          <IndexBody2 />
          <IndexBody3 />

          <div style = {{height: "630px"}}>

            <Parallax bgImage={WatoSocialMedia} strength={400} >
              <div className = "shadowBox"></div>

              <div style = {{height: "50px"}}> </div>
              <div style = {{ width: "100%", textAlign: "center", height: "480px"}}>
                <h1 className = "heading" style = {{color:"#FFF"}}>Follow Us On Social Media
                </h1>
                <h2 style = {{color:"#FFF", textAlign:"center", fontSize: "18px"}}>Keep up to date on our development progress, incoming recruitment rounds, and our latest sponsorships.
                </h2>


                <SocialIcon style={iconStyle} url="https://www.facebook.com/WATonomous/" />
                <SocialIcon style={iconStyle} url="https://www.instagram.com/watonomous/" />
                <SocialIcon style={iconStyle} url="https://twitter.com/watonomous?lang=en" />
                <SocialIcon style = {iconStyle} url = "https://www.linkedin.com/company/11167023/" />


                {/* <div style = {{height: "300px"}}> </div> */}
              </div>
            </Parallax>
          </div>
          <Footer />

        </ParallaxProvider>
      </div>

    );

  }

}

export default Index;
