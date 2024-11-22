import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardPerson } from "../component/CardPerson.jsx";

export const PersonDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    useEffect(() => {
        console.log("params:", params)
		actions.loadCharacter(params.theid);

	}, []);

	console.log("store.character:", store.character)
	console.log("store.character.properties:", store.character.properties)
	return (
		<div className="jumbotron">
			<CardPerson 
				description={store.character.description}
				properties={store.character.properties}
			/>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

