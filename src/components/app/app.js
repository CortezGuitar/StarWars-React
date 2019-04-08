import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetails, { Record } from '../item-details';
import swapiService from '../../services/swapi-service';
import Row from '../row';
import ItemList from '../item-list';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../containers';

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
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const {
      getPerson,
      getStarship,
      getStarshipImage,
      getPersonImage
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId="11" getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starhipDetails = (
      <ItemDetails
        itemId="9"
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="manufacturer" label="Manufacturer" />
      </ItemDetails>
    );

    return (
      <div className="container mb-3">
        <Header />
        {planet}
        <button
          className="btn btn-lg btn-warning m-3"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet View
        </button>

        <PersonDetails itemId="11" />
        <StarshipDetails itemId="9" />
        <PlanetDetails itemId="5" />

        <PersonList />
        <StarshipList />
        <PlanetList />
      </div>
    );
  }
}
