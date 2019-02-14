import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <img src="https://www.momentumink.com/uploads/momentum-ink-logo.svg" width="112" height="28"/>
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item" href="#">
                Jobs
              </a>
              <a class="navbar-item" href="#">
                Job Board
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
