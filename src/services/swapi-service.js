import axios from 'axios';

export default class swapiService {
  _apiBase = `https://swapi.co/api/`;

  async getResource(url) {
    try {
      const resp = await axios(`${this._apiBase}${url}`);
      return resp.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async getAllPeople() {
    const resp = await this.getResource(`people`);
    return resp.results.map(result => this._transformPerson(result));
  }

  async getPerson(id) {
    const person = await this.getResource(`people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllStarShips() {
    const resp = await this.getResource(`starships`);
    return resp.results.map(result => this._transformStarship(result));
  }

  async getStarShip(id) {
    const starship = await this.getResource(`starships/${id}`);
    return this._transformStarship(starship);
  }

  async getAllPlanets() {
    const resp = await this.getResource(`planets`);
    return resp.results.map(result => this._transformPlanet(result));
  }

  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}`);
    return this._transformPlanet(planet);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      terrain: planet.terrain,
      diameter: planet.diameter
    };
  }

  _transformStarship(starship) {
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

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    };
  }
}
