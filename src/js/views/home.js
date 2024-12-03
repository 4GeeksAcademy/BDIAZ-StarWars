import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { People } from "../component/people.jsx";
import { Planets } from "../component/planets.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Characters</h1>
		<People/>
		<h1 className="mt-3">Planets</h1>
		<Planets/>
	</div>
);
