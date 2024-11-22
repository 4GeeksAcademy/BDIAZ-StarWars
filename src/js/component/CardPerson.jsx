import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPerson = (props) => {

    const properties = props.properties;
    console.log("propertiesCard:", properties)

	return (
		<div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{properties.name}</h5>
                        <p className="card-text">Description:{props.description}</p>
                        <p className="card-text">Skin Color: {properties.skin_color}</p>
                        <p className="card-text">Mass: {properties.mass}</p>
                        <p className="card-text">Homeworld: {properties.homeworld}</p>
                        <p className="card-text">Height: {properties.Height}</p>
                        <p className="card-text">Hair color: {properties.hair_color}</p>
                        <p className="card-text">Gender: {properties.gender}</p>
                        <p className="card-text">Eye color: {properties.eye_color}</p>
                        <p className="card-text">Birth year: {properties.birth_year}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."/>
                </div>
            </div>
        </div>
	);
};
