import React, { useState } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import StarshipPage from '../pages/starship-page';
import PlanetPage from '../pages/planet-page';
import PeoplePage from '../pages/people-page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';
import SecretPage from '../pages/secret-page';
import LoginPage from '../pages/login-page';

export const SwapiServiceContext = React.createContext();

const App = () => {
  const swapiService = new SwapiService();

  const [isLoggedIn, setLoggedIn] = useState(false);

  const onLogin = () => {
    setLoggedIn(true);
  };

  return (
    <ErrorBoundry>
      <SwapiServiceContext.Provider value={swapiService}>
        <Router>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <h2 style={{ textAlign: 'center' }}>Welcome to StarDB</h2>
                )}
              />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" exact component={StarshipPage} />
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
                  <LoginPage isLoggedIn={isLoggedIn} onLogin={onLogin} />
                )}
              />
              <Route
                render={() => (
                  <h2 style={{ textAlign: 'center' }}>Page not found</h2>
                )}
              />
            </Switch>
          </div>
        </Router>
      </SwapiServiceContext.Provider>
    </ErrorBoundry>
  );
};

export default App;
