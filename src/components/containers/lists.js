import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc';
import swapiService from '../../services/swapi-service';

const swapi = new swapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapi;

const withPropFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props} renderItem={fn} />;
  };
};

const ListWithChildren = withPropFunction(ItemList, ({ name }) => `${name}`);

const PersonList = withData(ListWithChildren, getAllPeople);

const PlanetList = withData(ListWithChildren, getAllPlanets);

const StarshipList = withData(ListWithChildren, getAllStarships);

export { PersonList, PlanetList, StarshipList };
