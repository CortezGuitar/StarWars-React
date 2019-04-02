import React, { Component } from 'react';

import './person-details.css';

import swapiService from '../../services/swapi-service';

export default class PersonDetails extends Component {
  swapiService = new swapiService();

  state = { person: {} };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then(person => this.setState({ person }));
  }

  render() {
    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <div className="card d-flex flex-row rounded w-75 ml-2 align-self-start border-secondary">
        <img
          className="card-image m-3 image-fluid"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="planet"
        />
        <div className="card-body lead">
          <h4 className="card-title">{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Gender: {gender}</li>
            <li className="list-group-item">Birth Year: {birthYear}</li>
            <li className="list-group-item">Eye Color: {eyeColor}</li>
          </ul>
        </div>
      </div>
    );
  }
}
