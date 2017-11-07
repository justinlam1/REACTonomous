import React, { Component } from 'react';
import '../Css/header.css';
import logo from '../Images/WhiteLogoNoSignal.png';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: '0',
      height: '0',
      home: this.props.home,
      collapsed: true,
      isOpen: false



    };
    this.toggle = this.toggle.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight,  });
  }

  chooseNav() {
    // console.log(this.state.width);
    if (this.state.width < 680) {
      return (
        // <ul className="navigation" >
        //   <li className="firstchild"><img src={logo}/></li>

        <div className="header" style = {{paddingTop:'0px', zIndex: '3'}}>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <img src={logo} />
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>

                <NavItem eventKey={1} href="#"><Link to = {'/'} activeStyle={{ color: '#FFF' }} activeClassName = "button" className = "button" > HOME </Link></NavItem>
                <NavItem eventKey={2} href="#"><Link to = {'/sponsors'} activeStyle={{ color: '#FFF' }} activeClassName = "button" className = "button" > SPONSORS </Link></NavItem>
                <NavItem eventKey={3} href="#"><Link to = {'/media'} activeStyle={{ color: '#FFF' }} activeClassName = "button" className = "button" > MEDIA </Link></NavItem>
                <NavItem eventKey={3} href="#"><Link to = {'/contact'} activeStyle={{ color: '#FFF' }} activeClassName = "button" className = "button" > Contact </Link></NavItem>


                {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown> */}
              </Nav>
              {/* <Nav pullRight>
                <NavItem eventKey={1} href="#">Link Right</NavItem>
                <NavItem eventKey={2} href="#">Link Right</NavItem>
              </Nav> */}
            </Navbar.Collapse>
          </Navbar>
        </div>


      )
    } else {
      return (

        <div className= {this.props.home ? 'header' : 'header2'}>

          <ul className="navigation">
            <li className="firstchild"><img src={logo}/></li>
            <li className="button" > <Link to = {'/'} activeStyle={{ color: '#FFF' }} activeClassName = "button" className = "button" > HOME </Link> </li>
            {/* <li class="button">ABOUT</li> */}
            <li className="button"><Link to = {'/sponsors'} className ="button" activeClassName = "button"  > SPONSORS</Link></li>
            <li className="button"><Link to = {'/media'} className ="button" activeClassName = "button"  > MEDIA</Link></li>
            {/* <li class="button">RESSOURCES</li> */}

            <li className="last-child"><Link to = {'/contact'} className ="button" activeClassName = "button"  > CONTACT</Link></li>
          </ul>
        </div>
      )
    }

  }



  render() {

    return(
      <div>
        {this.chooseNav()}

      </div>



    );
  }

}

export default Header
