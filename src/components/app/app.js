import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page/';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import swapiService from '../../services/swapi-service';

export default class App extends Component {
  swapiService = new swapiService();

  state = {
    showRandomPlanet: true
  };

  render() {
    return (
      <div className="container mb-3">
        <Header />
        <RandomPlanet />
        <PeoplePage />

        <div className="d-flex mb-3">
          <ItemList
            onPersonSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPlanets}
            renderItem={item => item.name}
          />
          <ItemDetails personId={this.state.selectedPerson} />
        </div>

        <div className="d-flex mb-3">
          <ItemList
            onPersonSelected={this.onPersonSelected}
            getData={this.swapiService.getAllStarShips}
            renderItem={item => item.name}
          />
          <ItemDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
