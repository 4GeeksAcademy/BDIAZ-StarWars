import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { CardPerson } from "../component/CardPerson.jsx";
import { CardPlanet } from "../component/cardPlanet.jsx";
import { CardFilm } from "../component/cardFilm.jsx";
import { CardSpecie } from "../component/cardSpecie.jsx";

import { Navbar } from "../component/navbar";

const switcher = (store, categorie) => {
    console.log("switcher");
    console.log("categorie", categorie);

    switch (categorie) {
        case "people":
            return (
                <div className="container">
                    <CardPerson 
                        description={store.character.description}
                        properties={store.character.properties}
                        img={store.characterPicture}
                        categorie={categorie}
                        uid={store.character.uid}
                    />
                    {console.log("Entre al return")}
                    <Link to="/">
                        <span className="btn btn-primary btn-lg" href="#" role="button">
                            Back home
                        </span>
                    </Link>
                </div>
            );
        case "planets":
            return (
                <div className="container">
                    <CardPlanet
                        description={store.planet.description}
                        properties={store.planet.properties}
                        img={store.planetPicture}
                        categorie={categorie}
                        uid={store.planet.uid}
                    />
                    {console.log("Entre al de planets")}
                    <Link to="/">
                        <span className="btn btn-primary btn-lg" href="#" role="button">
                            Back home
                        </span>
                    </Link>
                </div>
            );
        //trabajando aca
        case "films":
            return (
                <div className="container">
                    <CardFilm
                        description={store.film.description}
                        properties={store.film.properties}
                        img={store.filmPicture}
                        categorie={categorie}
                        uid={store.film.uid}
                    />
                    {console.log("Entre al de planets")}
                    <Link to="/">
                        <span className="btn btn-primary btn-lg" href="#" role="button">
                            Back home
                        </span>
                    </Link>
                </div>
            );
        //pendiente
        case "species":
            return (
                <div className="container">
                    <CardSpecie
                        description={store.specie.description}
                        properties={store.specie.properties}
                        img={store.speciePicture}
                        categorie={categorie}
                        uid={store.specie.uid}
                    />
                    {console.log("Entre al de planets")}
                    <Link to="/">
                        <span className="btn btn-primary btn-lg" href="#" role="button">
                            Back home
                        </span>
                    </Link>
                </div>
            );
        default:
            break;
    }
}

export const Detail = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
   
    useEffect(() => {
        console.log("params_useEffect:", params)
        switch (params.thecategorie) {
            case "people":
                console.log("params_People:", params)
                actions.loadCharacter(params.theid);
                break;
            case "planets":
                actions.loadPlanet(params.theid);
                break;
            case "films":
                actions.loadFilm(params.theid);
                break;
            case "species":
                actions.loadSpecie(params.theid);
                break;
            default:
                break;
        }
    }, [params.theid]);  
    
    console.log("param.thecategorie:", params.thecategorie);
    <Navbar />
    return (
        <div className="mt-5">
            {switcher(store, params.thecategorie)}
        </div>
    );
};
