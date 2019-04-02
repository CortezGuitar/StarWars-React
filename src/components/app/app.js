import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <div className="d-flex">
          <ItemList />
          <PersonDetails />
        </div>
      </div>
    );
  }
}
