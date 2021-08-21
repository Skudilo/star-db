import React, {useEffect, useState} from 'react';
import './random-planet.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import PlanetView from "./planet-view";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";

const RandomPlanet = () => {

  const swapiService = new SwapiService()

  const [planet, setPlanet] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    updatePlanet()
    const interval = setInterval(updatePlanet, 10000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const onPlanetLoaded = (planet) => {
    setPlanet(planet)
    setLoading(false)
  }

  const onError = (err) => {
    setError(true)
    setLoading(false)
  }

  const updatePlanet = () => {
    const id = Math.floor(Math.random()*25 + 2)
    let cancelled = false;
    swapiService.getPlanet(id)
      .then((planet) => {
        !cancelled && onPlanetLoaded(planet)
      })
      .catch(onError)
    return () => cancelled = true
  }

  const hasContent = error ? <ErrorIndicator /> : <PlanetView planet={planet}/>

  return (
    <ErrorBoundry>
      <div className="random-planet jumbotron rounded">
        {
          loading
            ? <Spinner />
            : hasContent
        }
      </div>
    </ErrorBoundry>
  );
}

export default RandomPlanet

