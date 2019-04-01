import React, { Component } from 'react';

import './header.css';

export default class header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md d-flex justify-content-around">
        <h3>
          <a className="display-4 text-white" href="http://localhost:3000/">
            StarW DB
          </a>
        </h3>
        <ul className="navbar-nav navbar-list">
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:3000/">
              People
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:3000/">
              Planets
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:3000/">
              Starships
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
