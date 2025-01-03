import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Films = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadFilms();
	}, []);

	return (
		<div className="container d-flex overflow-auto">
				{store.films.map((item) => {
					return (
                        <div key={item.uid} className="card col-4" style={{width: "18rem"}}>
                            <img src={`https://starwars-visualguide.com/assets/img/films/${item.uid}.jpg`} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{item.properties.title}</h5>
                                <div className="d-grid gap-2 justify-content-between d-flex" >
                                    <Link to={"/categorie/films/" + item.uid} className="btn btn-primary" type="button">Learn more!</Link >
                                    <button href={item.url} className="btn btn-warning" type="button" onClick={() => actions.addFavorites(item.name)}>Fav</button >
                                </div>
                                
                            </div>
                        </div>
					);
				})}
			<br />
		</div>
	);
};