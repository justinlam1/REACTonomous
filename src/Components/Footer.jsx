import React, { Component } from 'react';
import '../Css/footer.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import logo from '../Images/WATOlogoblue.svg'
import { Link } from 'react-router-dom'

class Footer extends Component {


  render() {

    return(
      <div className= 'header'>
        <div>


          <ul className="navigation">
            <li className="firstchild"><img src={logo}/></li>
            <li className="button" > <Link to = {'/'} activeStyle={{ color: '#FFF' }} activeClassName = "button" className = "button" > HOME </Link> </li>
            <li className="button"><Link to = {'/sponsors'} className ="button" activeClassName = "button"  > SPONSORS</Link></li>
            <li className="button"><Link to = {'/media'} className ="button" activeClassName = "button"  > MEDIA</Link></li>

            <li className="last-child"><Link to = {'/contact'} className ="button" activeClassName = "button"  > CONTACT</Link></li>
          </ul>
        </div>
      </div>

    );
  }

}

export default Footer
