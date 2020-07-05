import React from 'react';

// router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// main-components
import Home from './components/Home';
import Technology from './components/main/technology/Technology';
import Team from './components/main/team/Team';
import Contact from './components/main/contact/Contact';
import Download from './components/main/download/Download';

// common-components
import Navbar from './components/common/navbar/Navbar';
import Footer from './components/common/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/technology">
          <Technology />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/download">
          <Download />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
