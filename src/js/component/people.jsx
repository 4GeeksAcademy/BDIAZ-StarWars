import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPeople();
	}, []);

	return (
		<div className="container justify-content-center">
				{store.people.map((item) => {
					return (
                        <div key={item.uid} className="card" style={{width: "18rem"}}>
                            <img src="..." className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.url}</p>
                                <div className="d-grid gap-2 justify-content-between d-flex" >
                                    <button href={item.url} className="btn btn-primary" type="button">Learn more!</button >
                                    <button href={item.url} className="btn btn-warning" type="button">Fav</button >
                                </div>
                                <Link to={"/PersonDetail/" + item.uid}>
								    <span>Link to: {item.url}</span>
							    </Link>
                                
                            </div>
                        </div>
					);
				})}
			<br />
		</div>
	);
};