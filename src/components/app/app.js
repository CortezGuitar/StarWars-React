import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import swapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from '../pages';

import { SwapiProvider } from '../swapi-context';
import { StarshipDetails } from '../containers';

export default class App extends Component {
  swapiService = new swapiService();

  state = {
    showRandomPlanet: true,
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  toggleRandomPlanet = () => {
    this.setState(({ showRandomPlanet }) => {
      return { showRandomPlanet: !showRandomPlanet };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? (
      <RandomPlanet updateInterval={8888} />
    ) : null;

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiProvider value={this.swapiService}>
          <Router>
            <div className="container mb-3">
              <Header />
              {planet}
              <button
                className="btn btn-lg btn-warning m-3"
                onClick={this.toggleRandomPlanet}
              >
                Toggle Random Planet View
              </button>
              <Switch>
                <Route
                  path="/"
                  render={() => (
                    <h2 className="text-center">Welcome to StarW DB</h2>
                  )}
                  exact
                />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} exact />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route
                  path="/secret"
                  render={() => <SecretPage isLoggedIn={isLoggedIn} />}
                />
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                  )}
                />
                <Redirect to="/" />
              </Switch>
            </div>
          </Router>
        </SwapiProvider>
      </ErrorBoundry>
    );
  }
}
