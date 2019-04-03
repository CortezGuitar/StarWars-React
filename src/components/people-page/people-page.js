import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import swapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class PeoplePage extends Component {
  swapiService = new swapiService();

  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    console.log(id);
    this.setState({ selectedPerson: id });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onPersonSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, birthYear }) => `${name} (${birthYear})`}
      />
    );

    const itemDetails = <ItemDetails personId={this.state.selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}
