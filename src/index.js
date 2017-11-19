import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.js';
import Index from './Components/Index.jsx';
import Media from './Components/Media.jsx';
import Sponsors from './Components/Sponsors.jsx';
import Contact from './Components/Contact.jsx';
import Apply from './Components/Apply.jsx';

import registerServiceWorker from './registerServiceWorker';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';


function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}


ReactDOM.render(


  <Router onUpdate={() => window.scrollTo(0, 0)}>


    <Switch onUpdate={() => window.scrollTo(0, 0)}>
      {/*  Animations for page change*/}
      <AnimatedSwitch
        atEnter={{
          opacity: 0,
          scale: 1.2,
        }}
        atLeave={{
          opacity: bounce(0),
          scale: bounce(0.8),

        }}
        atActive={{
          opacity: bounce(1),
          scale: bounce(1),
        }}
        className="switch-wrapper"
        >

          <Route exact path = "/" component = {Index} />
          <Route exact path = "/media" component = {Media} />
          <Route exact path = "/sponsors" component = {Sponsors} />
          <Route exact path = "/contact" component = {Contact} />
<Route exact path = "/apply" component = {Apply} />
        </AnimatedSwitch>

      </Switch>

    </Router>,


    document.getElementById('root')
  );
  registerServiceWorker();
