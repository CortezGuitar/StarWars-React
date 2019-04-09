import React from 'react';

import ItemDetails, { Record } from '../item-details';

import { SwapiConsumer } from '../swapi-context';

const PersonDetails = ({ itemId }) => {
  return (
    <SwapiConsumer>
      {({ getPerson, getPersonImage }) => {
        return (
          <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}
          >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
          </ItemDetails>
        );
      }}
    </SwapiConsumer>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiConsumer>
      {({ getPlanet, getPlanetImage }) => {
        return (
          <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}
          >
            <Record field="population" label="Population" />
            <Record field="terrain" label="Terrain" />
          </ItemDetails>
        );
      }}
    </SwapiConsumer>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiConsumer>
      {({ getStarship, getStarshipImage }) => {
        return (
          <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}
          >
            <Record field="model" label="Model" />
            <Record field="manufacturer" label="Manufacturer" />
          </ItemDetails>
        );
      }}
    </SwapiConsumer>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
