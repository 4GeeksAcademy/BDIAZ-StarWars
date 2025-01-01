import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPeople();
	}, []);

	return (
		<div className="container d-flex overflow-auto">
				{store.people.map((item) => {
					return (
                        <div key={item.uid} className="card col-4" style={{width: "18rem"}}>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <div className="d-grid gap-2 justify-content-between d-flex" >
                                    <Link to={"/categorie/people/" + item.uid} className="btn btn-primary" type="button">Learn more!</Link >
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