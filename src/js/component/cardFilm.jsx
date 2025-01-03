import React from "react";
import { Link } from "react-router-dom";

export const CardFilm = (props) => {

    const properties = props.properties || {};
    
    console.log("propertiesCard:", properties)

	return (
		<div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{properties.title}</h5>
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
                                <p className="card-text">Director:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.director}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Producer:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.producer}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Release date:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.release_date}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Opening Crawl:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.opening_crawl}</p>
                            </div>
                        </div>
                        <div className="row">
                            {properties.species}
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
