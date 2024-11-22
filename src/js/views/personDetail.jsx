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

	return (
		<div className="container">
			<CardPerson 
				description={store.character.description}
				properties={store.character.properties}
				img={store.characterPicture}
			/>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

