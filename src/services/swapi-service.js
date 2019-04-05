import axios from 'axios';

export default class swapiService {
  _apiBase = `https://swapi.co/api/`;
  _imageBase = `https://starwars-visualguide.com/assets/img/`;

  async getResource(url) {
    try {
      const resp = await axios(`${this._apiBase}${url}`);
      return resp.data;
    } catch (err) {
      return err;
    }
  }

  getAllPeople = async () => {
    const resp = await this.getResource(`people`);
    return resp.results.map(result => swapiService._transformPerson(result));
  };

  getPerson = async id => {
    const person = await this.getResource(`people/${id}/`);
    return swapiService._transformPerson(person);
  };

  getAllStarships = async () => {
    const resp = await this.getResource(`starships`);
    return resp.results.map(result => swapiService._transformStarship(result));
  };

  getStarship = async id => {
    const starship = await this.getResource(`starships/${id}`);
    return swapiService._transformStarship(starship);
  };

  getAllPlanets = async () => {
    const resp = await this.getResource(`planets`);
    return resp.results.map(result => swapiService._transformPlanet(result));
  };

  getPlanet = async id => {
    const planet = await this.getResource(`planets/${id}`);
    return swapiService._transformPlanet(planet);
  };

  getPersonImage = ({ id }) => `${this._imageBase}characters/${id}.jpg`;

  getStarshipImage = ({ id }) => `${this._imageBase}starships/${id}.jpg`;

  getPlanetImage = ({ id }) => `${this._imageBase}planets/${id}.jpg`;

  static _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  static _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      terrain: planet.terrain,
      diameter: planet.diameter
    };
  }

  static _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    };
  }

  static _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  }
}
