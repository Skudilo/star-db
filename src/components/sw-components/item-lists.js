import SwapiService from "../../services/swapi-service";
import withData from "../hoc/with-data";
import ItemList from "../item-list";
import React from "react";

const swapiService = new SwapiService()

const {
	getAllPeople,
	getAllStarships,
	getAllPlanets
} = swapiService

const withChildren = (Wrap, fn) => {
	return (props) => {
		return (
			<Wrap {...props}>
				{fn}
			</Wrap>
		)
	}
}

const renderName = ({name}) => <span>{name}</span>
const renderStarshipName = ({name, model}) => <span>{name} ({model})</span>

const PersonList = withData(
	withChildren(ItemList, renderName),
	getAllPeople)

const PlanetList = withData(
	withChildren(ItemList, renderName),
	getAllPlanets)

const StarshipList = withData(
	withChildren(ItemList, renderStarshipName),
	getAllStarships)

export {
	PersonList,
	PlanetList,
	StarshipList
}