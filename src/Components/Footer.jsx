import React, { Component } from 'react';
import '../Css/footer.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import logo from '../Images/WhiteLogo.png'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: this.props.home,
    };

  }

  render() {

    // Don't touch the width and height of iconStyle and iconFill please, unless you want to spend a whole lot of time debugging :)
    const iconStyle = {
      height: '55px', width: '55px', position:"relative", zIndex:'3', margin: '-5px'
    }
    const iconFill = {
      height: '45px', width: '45px',  backgroundColor: '#FFF', borderRadius: "100%", zIndex: '2', margin:'15px', float:'left'
    }
    const wrapper = {
      marginLeft:'auto',
      marginRight:'auto',

      width: '300px',
      // height: '100px',
      textAlign:"center",
      backgroundColor: '#FFF'
    }
    const bigWrapper = {
      textAlign:'center',
      marginLeft: '-5px',
    }

    return(
      <div className='footer'>
        <div>
          <img src={logo} style = {{paddingTop: "60px", width: "120px"}}/>


          <ul className="page-navigation">
            <li className="link" > <Link to = {'/'} activeStyle={{ color: '#FFF' }} activeClassName = "button" className = "button" > HOME </Link> </li>
            <li className="link"><Link to = {'/sponsors'} className ="button" activeClassName = "button"  > SPONSORS </Link></li>
            <li className="link"><Link to = {'/media'} className ="button" activeClassName = "button"  > MEDIA </Link></li>
            <li className="link"><Link to = {'/contact'} className ="button" activeClassName = "button"  > CONTACT </Link></li>
          </ul>
          <ul className="page-navigation" >
            <div style = {bigWrapper}>
              {/* <p style = {{color:'#FFF'}}>|</p> */}


            <div style = {wrapper}>
              {/*  There was a TON of spaghetti code done to properly fill and resize the social media icons, so please DO NOT TOUCH ITS SIZE*/}
              <div style = {iconFill} >
                <SocialIcon style={iconStyle} url="https://www.facebook.com/WATonomous/" ></SocialIcon>
              </div>
              <div style = {iconFill} >
                <SocialIcon style={iconStyle} url="https://www.instagram.com/watonomous/" />
              </div>
              <div style = {iconFill} >
                <SocialIcon style={iconStyle} url="https://twitter.com/watonomous?lang=en" />
              </div>
              <div style = {iconFill} >
                <SocialIcon style = {iconStyle} url = "https://www.linkedin.com/company/11167023/" />
              </div>
              {/* <SocialIcon style={{ height: 25, width: 25, margin: 10 }} url="https://www.facebook.com/WATonomous/" />
              <SocialIcon style={{ height: 25, width: 25, margin: 10 }} url="https://www.instagram.com/watonomous/" />
              <SocialIcon style={{ height: 25, width: 25, margin: 10 }} url="https://twitter.com/watonomous?lang=en" />
              <SocialIcon style={{ height: 25, width: 25, margin: 10 }} url="https://www.linkedin.com/company/11167023/" /> */}
            </div>
            </div>
          </ul>
        </div>
      </div>

    );
  }

}

export default Footer
