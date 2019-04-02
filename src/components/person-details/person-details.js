import React, { Component } from 'react';

import './person-details.css';

export default class PersonDetails extends Component {
  render() {
    return (
      <div className="card d-flex flex-row rounded w-75 ml-2">
        <img
          className="card-image m-3 image-fluid"
          src="http://images4.fanpop.com/image/photos/18700000/Darth-Vader-darth-vader-18734822-606-300.jpg"
          alt="planet"
        />
        <div className="card-body lead">
          <h4 className="card-title">Darth Vader</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Gender: Male</li>
            <li className="list-group-item">Birth Year: 88</li>
            <li className="list-group-item">Eye Color: Green</li>
          </ul>
        </div>
      </div>
    );
  }
}
