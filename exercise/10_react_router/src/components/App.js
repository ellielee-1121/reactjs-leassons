import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Banner from './Banner';
import Menu from './Menu';
import Videos from './Videos';
import About from './About';
import Footer from './Footer';
import Overlay from './Overlay';

const App = () => (
  <Router>
    <div className="app" id="top">
      <Banner />
      <Menu />

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/vid" component={Videos} />
        <Redirect to="vid" />
      </Switch>

      <Route path="/vid/:id" component={Overlay} />
      <Footer />
    </div>
  </Router>
);

export default App;
