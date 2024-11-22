import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { People } from "../component/people.jsx";
export const Home = () => (
	<div className="text-center mt-5">
		<h1>Characters</h1>
		<People/>
	</div>
);
