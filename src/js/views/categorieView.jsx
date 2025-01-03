import React from "react";
import { Link, useParams } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { People } from "../component/people.jsx";
import { Planets } from "../component/planets.jsx";
import { Films } from "../component/films.jsx";
import { Species } from "../component/species.jsx";

import { Navbar } from "../component/navbar";


const Switcher = (categorie) => {
    switch(categorie) {
        case "characters":
            return <People/>
        case "planets":
            return <Planets/>
        case "films":
            return <Films/>
        case "species":
            return <Species/>

    }
}
export const Categorie = () => {
    const param = useParams().thecategorie;

    console.log("paramCategorieView:", param);
    <Navbar />
    return (
        <div className="mt-5">
            <h1 className="text-center text-uppercase" style={{ color: "white" }}>
                {param}
            </h1>
            {Switcher(param)}
        </div>
    )



};