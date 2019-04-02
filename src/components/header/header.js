import React, { Component } from 'react';

import './header.css';
import icon from './star.png';

export default class header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md d-flex justify-content-between mb-3">
        <h3>
          <a className="display-4 nav-link p-0" href="http://localhost:3000/">
            <span>
              <img src={icon} alt="death star" className="brand" />
            </span>{' '}
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
