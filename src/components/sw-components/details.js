import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";
import React, {useContext} from "react";
import {SwapiServiceContext} from '../app/app'

const PersonDetails = ({itemId}) => {
	const {getPerson, getPersonImage} = useContext(SwapiServiceContext)

	return (
			<ItemDetails
				itemId={itemId}
				getData={getPerson}
				getImgUrl={getPersonImage}
			>
				<Record field='gender' label='Gender'/>
				<Record field='eyeColor' label='Eye Color'/>
			</ItemDetails>
	)
}

const PlanetDetails = ({itemId}) => {
	const {getPlanet, getPlanetImage} = useContext(SwapiServiceContext)
	return (
		<ItemDetails
			itemId={itemId}
			getData={getPlanet}
			getImgUrl={getPlanetImage}
		>
			<Record field='population' label='Population'/>
			<Record field='rotationPeriod' label='Rotation Period'/>
			<Record field='diameter' label='Diameter'/>
		</ItemDetails>
	)
}

const StarshipDetails = ({itemId}) => {
	const {getStarship, getStarshipImage} = useContext(SwapiServiceContext)
	return (
		<ItemDetails
			itemId={itemId}
			getData={getStarship}
			getImgUrl={getStarshipImage}
		>
			<Record field='model' label='Model'/>
			<Record field='length' label='Length'/>
			<Record field='costInCredits' label='Cost'/>
		</ItemDetails>
	)
}

export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
}