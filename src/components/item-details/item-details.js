import React, { Component } from 'react';

import './item-details.css';

import swapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemDetails extends Component {
  swapiService = new swapiService();

  state = { item: null, loading: false };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }
    this.setState({ loading: true });
    this.swapiService
      .getItem(itemId)
      .then(item => this.setState({ item, loading: false }));
  }

  render() {
    if (!this.state.item && !this.state.loading) {
      return <span className="h3 mx-auto">Select an item from a list</span>;
    } else if (this.state.loading) {
      return <Spinner />;
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.item;

    return (
      <div className="card rounded border-secondary d-flex flex-row">
        <img
          className="card-image m-3 image-fluid item-img"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="planet"
        />
        <div className="card-body lead align-self-center">
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
