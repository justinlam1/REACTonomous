import React, {Component}  from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import logo from '../Images/logo.svg';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom'


import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import CarouselStyled from './CarouselStyled.jsx';
// import { Parallax } from 'react-scroll-parallax';

import '../Css/styles.css';
import '../Css/index.css';
import '../Css/carousel.css';


import IndexBody1 from './IndexBody1.jsx';
import IndexBody2 from './IndexBody2.jsx';
import IndexBody3 from './IndexBody3.jsx';


import ParallaxImg1 from '../Images/CityPoly.jpg';
import BoltFront from '../Images/BoltFront4.png';
import Watleader from '../Images/WatLeaders.jpg';
import BoltChasis from '../Images/BoltChasis.jpeg';
import WatoSocialMedia from '../Images/WatoGroupSocial.jpg';
import WatoSocialCar from '../Images/WatoGroupWithCar.jpg';

import BoltHD1 from '../Images/BoltHD1.jpg';
import BoltHD2 from '../Images/BoltHD2.jpg';
import BoltHD3 from '../Images/BoltHD3.jpg';
import { bounce } from 'react-animations'
import { StyleSheet, css } from 'aphrodite';
import FadeIn from 'react-fade-in';



import {ShareButtons,ShareCounts,generateShareIcon} from 'react-share';
import ScrollableAnchor from 'react-scrollable-anchor'






class Index extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const styles = StyleSheet.create({
      bounce: {
        animationName: bounce,
        animationDuration: '1s'
      }
    })

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
      <div className = "indexclass" style = {{maxWidth: '100vw',   overflowX:'hidden',}}>
        <ParallaxProvider  >


          <Header
            home = {1}
          />
          <CarouselStyled style = {{width: '100%'}} />

          <section id="welcome">
            <div></div>
          </section>
          <FadeIn>
            <IndexBody1 style = {{width: '100%'}} />
          </FadeIn>

          <div className = "spacerBig">
          </div>
          <div style = {{maxHeight: "300px"}}>
            <Parallax bgImage={BoltHD1} strength={50} bgStyle = {{backgroundSize:'cover'}} >
              <div className = "shadowBox2"></div>

              <div style = {{height: "20px"}}> </div>
              <div className = "textWrap">
                <h1 className = "heading" style = {{color:"#FFF"}}>YEAR 1
                </h1>
                <h2 className = "parallaxSubTitle">Focuses on concept selection by having us become familiar with sensing and computation software. These simple missions can include straight roadway driving and object avoidance/detection. The Year 1 final competition will be hosted at GM’s Desert Proving Ground in Yuma, Arizona
              </h2>

              <div style = {{height: "160px"}}> </div>
            </div>
          </Parallax>
        </div>
        <div style = {{maxHeight: "300px"}}>
          <Parallax bgImage={BoltHD3} strength={50} bgStyle = {{backgroundSize:'cover', paddingTop: '0'}} >
            <div className = "shadowBox2"></div>

            <div style = {{height: "20px"}}> </div>
            <div className = "textWrap">
              <h1 className = "heading" style = {{color:"#FFF"}}>YEAR 2
              </h1>
              <h2 className = "parallaxSubTitle">We will refine our concept selections into solid system developments and will have more challenging dynamic events for testing on-site, including dynamic object detection and multiple lane changing
              </h2>

              <div style = {{height: "160px"}}> </div>
            </div>
          </Parallax>
        </div>
        <div style = {{maxHeight: "300px"}}>
          <Parallax bgImage={BoltHD2} strength={50} bgStyle = {{backgroundSize:'cover'}}>
            <div className = "shadowBox2"></div>

            <div style = {{height: "20px"}}> </div>
            <div className = "textWrap">
              <h1 className = "heading" style = {{color:"#FFF"}}>YEAR 3
              </h1>
              <h2 className = "parallaxSubTitle">Will culminate with final validation of our design and concept refinement. Our autonomous car will navigate complex objectives of on-site testing, including higher speeds, roundabouts and moving object detection
              </h2>

              <div style = {{height: "160px"}}> </div>
            </div>
          </Parallax>
        </div>


        <section id="SAE" style = {{paddingTop:"20px"}}>
          <div></div>
        </section>
        <IndexBody2 className = "textWrap" style = {{zIndex:"3"}}/>


        <div style = {{height: "500px"}}>
          <Parallax bgImage={BoltChasis} strength={100} >
            <div className = "shadowBox2" s></div>

            <div style = {{height: "50px"}}> </div>
            <div className = "textWrap">
              <h1 className = "heading" style = {{color:"#FFF", zIndex: '2'}}>Electric Self Driving Vehicle
              </h1>
              <h2 className = "parallaxSubTitle">Sponsor one of the leading autonomous vehicle teams in Canada
              </h2>
              <Link to = {'/sponsors'}  ><div className = "buttonDark" >SPONSOR</div></Link>
              <div style = {{height: "300px"}}> </div>
            </div>
          </Parallax>
        </div>

        {/* <IndexBody2 /> */}
        <IndexBody3 />

        <div style = {{height: "530px"}}>

          <Parallax bgImage={WatoSocialMedia} strength={100} bgStyle = {{marginTop:'-100px'}} >
            <div className = "shadowBox"></div>

            <div style = {{height: "50px"}}> </div>
            <div className = "textWrap2" style = {{height: '480px'}}>
              <h1 className = "heading" style = {{color:"#FFF"}}>Follow Us On Social Media
              </h1>
              <h2 className = "parallaxSubTitle">Keep up to date on our development progress, incoming recruitment rounds, and our latest sponsorships.
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
