import React, { Component } from 'react';
import logo from '../Images/logo.svg';
import '../Css/styles.css';
import {Carousel} from 'react-bootstrap';
import { ParallaxProvider } from 'react-scroll-parallax';



import Header from './Header.jsx';
import Footer from './Footer.jsx'
import CarouselStyled from './CarouselStyled.jsx';
import Index from './Index.jsx';
import Ressources from './Ressources.jsx'

import Car1 from '../Images/carExample.jpg';
import {Link} from 'react-router';
import { Switch, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">


        <ParallaxProvider>
          <Header />
          <CarouselStyled />

          <Index />

          <Footer />

        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
