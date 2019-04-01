import React, { Component } from 'react';

import './random-planet.css';

import swapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component {
  swapiService = new swapiService();

  state = {
    planet: {}
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  componentDidMount() {
    this.swapiService.getAllPlanets().then(resp => console.log(resp));
  }

  onPlanetLoaded = planet => this.setState({ planet });

  updatePlanet() {
    const id = Math.floor(Math.random() * 18) + 1;
    this.swapiService
      .getPlanet(id)
      .then(planet => this.setState(this.onPlanetLoaded(planet)));
  }

  render() {
    const {
      planet: { id, name, population, terrain, diameter }
    } = this.state;

    return (
      <div className="card d-flex flex-row rounded mb-3">
        <img
          className="card-image m-3 image-fluid"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet"
        />
        <div className="card-body lead">
          <h4 className="card-title">{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Population: <span>{population}</span>
            </li>
            <li className="list-group-item">
              Terrain: <span>{terrain}</span>
            </li>
            <li className="list-group-item">
              Diameter: <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
