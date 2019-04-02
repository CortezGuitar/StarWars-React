import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: 2
  };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    return (
      <div className="container mb-3">
        <Header />
        <RandomPlanet />
        <div className="d-flex">
          <ItemList onPersonSelected={this.onPersonSelected} />
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
