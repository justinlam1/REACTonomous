import React, {Component} from 'react';
import '../Css/styles.css';
import WatoLogo from '../Images/SAE.png';

import {Grid, Row, Col} from 'react-bootstrap';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../Css/Media.css';

import Wato1 from '../Images/WatoCarArrived.jpg';
import Wato2 from '../Images/WatoGroupSocial.jpg';


import WatoMedia1 from '../Images/WatoMedia1.jpg';
import WatoMedia2 from '../Images/WatoMedia2.jpg';
import WatoMedia3 from '../Images/WatoMedia3.jpg';
import WatoMedia4 from '../Images/WatoMedia4.jpg';
import WatoMedia5 from '../Images/WatoMedia5.jpg';
import WatoMedia6 from '../Images/WatoMedia6.jpg';
import WatoMedia7 from '../Images/WatoMedia7.jpg';
import WatoMedia8 from '../Images/WatoMedia8.jpg';

import Lightbox from 'react-image-lightbox';

import { SocialIcon } from 'react-social-icons';


const images = [
  WatoMedia1,
  WatoMedia2,
  WatoMedia3,
  WatoMedia4,
  WatoMedia5,
  WatoMedia6,
  WatoMedia7,
  WatoMedia8,


];

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{ display: 'block', paddingTop:"1px", }}
      onClick={onClick}
      >

      </div>
    );
  }

  function PrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{ display: 'block', paddingTop:"1px" }}
        onClick={onClick}
        >
        </div>
      );
    }



    function SliderScroll(props) {
      const imgStyle = {
        objectFit: "contain",
        height: "200px",
        width: "100%",
      }
      const divStyle = {
        backgroundSize: "cover",
        padding: "15px",
        textAlign:"center",
        // width: "90%",
        // backgroundColor: "#333"
      }
      // const




      return (
        <div style = {{maxHeight: '200px', width: '90vw'}}>
          {props.isOpen &&
            <Lightbox
              mainSrc={images[props.photoIndex]}
              // nextSrc={images[(props.photoIndex + 1) % images.length]}
              // prevSrc={images[(props.photoIndex + images.length - 1) % images.length]}

              onCloseRequest={() => props.onClick(-1)}
              // onMovePrevRequest={() => this.props.setState({
              //   photoIndex: (props.photoIndex + images.length - 1) % images.length,
              // })}
              // onMoveNextRequest={() => this.props.setState({
              //   photoIndex: (props.photoIndex + 1) % images.length,
              // })}
            />
          }

          <Slider {...props.state}>
            {/* <div  ><img src = {WatoLogo} > </img></div> */}
            {/* <slideImage
              onClick = {}
            /> */}


            <div onClick = {() => props.onClick(0)} style = {divStyle}><img src = {WatoMedia1} style = {imgStyle}></img></div>
            <div onClick = {() => props.onClick(1)} style = {divStyle}><img src = {WatoMedia2} style = {imgStyle}></img></div>
            <div onClick = {() => props.onClick(2)} style = {divStyle}><img src = {WatoMedia3} style = {imgStyle}></img></div>
            <div onClick = {() => props.onClick(3)} style = {divStyle}><img src = {WatoMedia4} style = {imgStyle}></img></div>
            <div onClick = {() => props.onClick(4)} style = {divStyle}><img src = {WatoMedia5} style = {imgStyle}></img></div>
            <div onClick = {() => props.onClick(5)} style = {divStyle}><img src = {WatoMedia6} style = {imgStyle}></img></div>
            <div onClick = {() => props.onClick(6)} style = {divStyle}><img src = {WatoMedia7} style = {imgStyle}></img></div>
            <div onClick = {() => props.onClick(7)} style = {divStyle}><img src = {WatoMedia8} style = {imgStyle}></img></div>
            {/* <div onClick = {() => props.onClick(5)} style = {divStyle}><img src = {WatoLogo} style = {imgStyle}></img></div> */}








          </Slider>
        </div>
      );


    }



    class MediaBody1 extends Component {

      constructor(props) {
        super(props);
        this.state =  {
          // className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '60px',
          slidesToShow: 3,
          speed: 500,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          useCss: true,
          photoIndex: 0,
            isOpen: false
          // fade: true,
          // adaptiveHeight: true,
          // variableWidth: true,
          // centerMode: true,
          // slidesToScroll: 1
        }

      }

      handleGalleryClick(i) {
        console.log(i, "kasjhgdasj\n");
        if (i == -1) {
          this.setState({
            isOpen: false,
          })
        } else {this.setState ({
          isOpen: !this.state.isOpen,
          photoIndex: i,
        })}
      }

      render() {




        return(
          <div>

            <Grid>

              <Row className="show-grid">
                <Col xs = {3} md = {4}>

                </Col>
                <Col xs={20} md={12}>


                  <div className = "OverviewSmall">
                    {/* <div className = "spacerMedium" /> */}
                    <div className = "spacerBig" />

                    <h1 className = "heading" >Follow us on social media</h1>
                    <div className = "spacerSmall" />

                    <p className = "descriptionText">See our latest developments and be the first to hear of our coming recruitment seasons

                    </p>






                  </div>
                </Col>
                <Col xs = {3} md = {4}>

                </Col>


              </Row>
              <div style = {{textAlign:"center", padding:"20px"}}>
                <SocialIcon style = {{margin:"10px"}} url = "https://twitter.com/watonomous?lang=en" ></SocialIcon>
                <SocialIcon style = {{margin:"10px"}} url = "https://www.facebook.com/WATonomous/"></SocialIcon>
                <SocialIcon style = {{margin:"10px"}} url = "https://www.instagram.com/watonomous/"></SocialIcon>
              </div>

              <div className = "spacerSmall"/>

              <SliderScroll
                isOpen = {this.state.isOpen}
                photoIndex = {this.state.photoIndex}
                state = {this.state}
                onClick = {i => this.handleGalleryClick(i)}
              />

              <div className = "spacerMedium" />
              {/* <div style = {{textAlign:"center"}}>
              <img style = {{height:"200px", marginTop: "-50px"}} src = {WatoLogo}/>

            </div> */}

            <div className = "spacerMedium"/>




          </Grid>
        </div>
      );
    }


  }

  export default MediaBody1;
