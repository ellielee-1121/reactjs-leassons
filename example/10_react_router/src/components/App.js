import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

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

      <Redirect exact from="/" to="/vid" />
      <Route path="/vid" component={Videos} />
      <Route path="/vid/:id" component={Overlay} />

      <Route path="/about" component={About} />

      <Footer />

    </div>
  </Router>
);

export default App;
