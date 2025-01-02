import React from "react";
import { Link } from "react-router-dom";

export const CardPlanet = (props) => {

    const properties = props.properties || {};
    
    console.log("propertiesCard:", properties)

	return (
		<div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{properties.name}</h5>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Description:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{props.description}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Diameter:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.diameter}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Rotation Period:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.rotation_period}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Orbital Period:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.orbital_period}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Gravity:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.gravity}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Population:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.population}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Climate:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.climate}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Terrain:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.terrain}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Surface Water:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.surface_water}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={props.img} className="img-fluid rounded-start" alt="..."/>
                </div>
            </div>
        </div>
	);
};
