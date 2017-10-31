import React, { Component } from 'react';
import '../Css/footer.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import logo from '../Images/WATOlogoblue.svg'
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

    return(
      <div className='footer'>
        <div>
        <img src={logo}/>


          <ul className="page-navigation">
            <li className="link" > <Link to = {'/'} activeStyle={{ color: '#FFF' }} activeClassName = "button" className = "button" > HOME </Link> </li>
            <li className="link"><Link to = {'/sponsors'} className ="button" activeClassName = "button"  > SPONSORS </Link></li>
            <li className="link"><Link to = {'/media'} className ="button" activeClassName = "button"  > MEDIA </Link></li>
            <li className="link"><Link to = {'/contact'} className ="button" activeClassName = "button"  > CONTACT </Link></li>
          </ul>
          <ul className="page-navigation">
            <SocialIcon style={{ height: 25, width: 25, margin: 10 }} url="https://www.facebook.com/WATonomous/" />
            <SocialIcon style={{ height: 25, width: 25, margin: 10 }} url="https://www.instagram.com/watonomous/" />
            <SocialIcon style={{ height: 25, width: 25, margin: 10 }} url="https://twitter.com/watonomous?lang=en" />
            <SocialIcon style={{ height: 25, width: 25, margin: 10 }} url="https://www.linkedin.com/company/11167023/" />
          </ul>
        </div>
      </div>

    );
  }

}

export default Footer
