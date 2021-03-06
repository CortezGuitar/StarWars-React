import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './random-planet.css';

import swapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 8000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  swapiService = new swapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.intervalId = setInterval(this.updatePlanet, updateInterval);
  }

  componentDidUpdate() {
    const { updateInterval } = this.props;
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  onPlanetLoaded = planet => this.setState({ planet, loading: false });

  onError = err => this.setState({ error: true, loading: false });

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 18) + 2;
    this.swapiService
      .getPlanet(id)
      .then(planet => this.setState(this.onPlanetLoaded(planet)))
      .catch(err => this.onError(err));
  };

  render() {
    const {
      planet: { id, name, population, terrain, diameter },
      loading,
      error
    } = this.state;

    let planetView = null;

    if (loading) {
      planetView = <Spinner />;
    } else if (!loading && !error) {
      planetView = (
        <React.Fragment>
          <img
            className="card-image m-3 image-fluid planet-img"
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
        </React.Fragment>
      );
    } else {
      planetView = <ErrorIndicator />;
    }

    return (
      <div className="card d-flex flex-row rounded mb-3 border-secondary">
        {planetView}
      </div>
    );
  }
}
