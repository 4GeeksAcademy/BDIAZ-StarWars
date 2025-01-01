import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import People from "../component/people.jsx"

const Item = () =>{
	const param = useParams().theid;
	console.log("param: ", param);
	switch (param) {
		case "characters":
			return (<People/>)
		case "planets":
			
			break;
		case "films":
			
			break;
		case "species":
			
			break;
		default:
			break;
	} 
}
  

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		

	}, []);

	console.log(params.theid);
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: </h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
