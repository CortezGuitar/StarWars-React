import React, { Component } from 'react';

import './item-list.css';

import swapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemList extends Component {
  state = {
    peopleList: null
  };

  swapiService = new swapiService();

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(peopleList => this.setState({ peopleList }));
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <a
          key={id}
          href="#"
          className="list-group-item list-group-item-action"
          onClick={() => this.props.onPersonSelected(id)}
        >
          {name}
        </a>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return (
      <div className="card rounded lead w-25 align-self-start mr-3 border-secondary">
        <ul className="list-group list-group-flush">{items}</ul>
      </div>
    );
  }
}
