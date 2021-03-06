import React, { Component } from 'react';
import Row from '../row';
import { PlanetDetails, PlanetList } from '../containers/';

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <React.Fragment>
        <h2 className="text-center mb-3 text-success">Planets</h2>
        <Row
          left={<PlanetList onItemSelected={this.onItemSelected} />}
          right={<PlanetDetails itemId={selectedItem} />}
        />
      </React.Fragment>
    );
  }
}
