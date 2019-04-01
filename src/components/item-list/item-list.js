import React, { Component } from 'react';

import './item-list.css';

export default class ItemList extends Component {
  render() {
    return (
      <div className="card rounded lead mb-3">
        <ul className="list-group list-group-flush m-2">
          <a href="#" className="list-group-item list-group-item-action">
            Luke Skywalker
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Darth Vader
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            R2-D2
          </a>
        </ul>
      </div>
    );
  }
}
