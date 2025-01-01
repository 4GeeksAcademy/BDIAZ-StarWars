import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const cutString = (string) => {
    // Verifica si 'string' es válido y contiene un valor
    if (typeof string === 'string' && string.trim() !== '') {
        // Divide la cadena por '/' y toma las últimas dos partes
        const parts = string.split('/');
        const result = parts.slice(-2).join('/'); // Tomamos los dos últimos segmentos y los unimos con '/'
        return result;
    }
    return '';
}

export const CardPerson = (props) => {

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
                                <p className="card-text">Skin Color:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.skin_color}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Mass:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.mass}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Homeworld:</p>
                            </div>
                            <div className="col-auto">
                                <Link to={"/categorie/" + cutString(properties.homeworld)} className="card-text">click here to know</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Height:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.height}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Hair color:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.hair_color}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Gender:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.gender}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Eye color:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.eye_color}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p className="card-text">Birth year:</p>
                            </div>
                            <div className="col-auto">
                                <p className="card-text">{properties.birth_year}</p>
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
