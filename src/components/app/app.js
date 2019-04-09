import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import swapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import { SwapiProvider } from '../swapi-context';

export default class App extends Component {
  swapiService = new swapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState(({ showRandomPlanet }) => {
      return { showRandomPlanet: !showRandomPlanet };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? (
      <RandomPlanet updateInterval={8888} />
    ) : null;

    return (
      <ErrorBoundry>
        <SwapiProvider value={this.swapiService}>
          <div className="container mb-3">
            <Header />
            {planet}
            <button
              className="btn btn-lg btn-warning m-3"
              onClick={this.toggleRandomPlanet}
            >
              Toggle Random Planet View
            </button>
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiProvider>
      </ErrorBoundry>
    );
  }
}
