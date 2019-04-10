import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export default class header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg d-flex justify-content-between mb-3">
        <h1 className="align-items-center brand">
          <Link to="/" className="nav-link">
            <span className="display-4">StarW DB</span>
          </Link>
        </h1>
        <ul className="navbar-nav navbar-list">
          <li className="nav-item">
            <Link to="/people/" className="nav-link">
              People
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/planets/" className="nav-link">
              Planets
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/starships/" className="nav-link">
              Starships
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/secret" className="nav-link">
              Secret
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
