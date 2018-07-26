import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Today, Recent, Soon } from './pages/index';
import { NavBar } from './components';

class Routers extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Today} />
            <Route exact path="/recent" component={Recent} />
            <Route exact path="/soon" component={Soon} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }

}

export default Routers;
