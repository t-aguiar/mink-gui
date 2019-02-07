import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Jobs from '../Jobs';
import JobBoard from '../JobBoard';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <a className="navbar-item" href="#">
                  <img src="https://www.momentumink.com/uploads/momentum-ink-logo.svg" width="112" height="28"/>
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div id="navbar" className="navbar-menu">
                <div className="navbar-start">
                  <Link to={'/'} className="navbar-item">Home</Link>
                  <Link to={'/jobs'} className="navbar-item">Jobs</Link>
                  <Link to={'/job-board'} className="navbar-item">Job Board</Link>
                </div>
              </div>
            </nav>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/jobs' component={Jobs}/>
              <Route path='/job-board' component={JobBoard}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
