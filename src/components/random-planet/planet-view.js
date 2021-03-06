import React from 'react';

const PlanetView = (props) => {
	const {id, name, population, rotationPeriod, diameter} = props.planet

	return (
		<>
			<img className="planet-image"
			     onError={(e)=>{
				     e.target.src="https://starwars-visualguide.com/assets/img/planets/21.jpg"}}
			     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
			     alt=''/>
			<div>
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Population</span>
						<span>{population}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Rotation Period</span>
						<span>{rotationPeriod}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Diameter</span>
						<span>{diameter}</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default PlanetView;