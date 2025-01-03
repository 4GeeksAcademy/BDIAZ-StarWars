import React from "react";
import { Link } from "react-router-dom";

export const CardSpecie = (props) => {

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
                                <p className="card-text">Classification:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.classification}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Designation:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.designation}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Average Height:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.average_height}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Average Lifespan:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.average_lifespan}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Hair Colors:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.hair_colors}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Skin Colors:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.skin_colors}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Eye Colors:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.eye_colors}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Language:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.language}</p>
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
