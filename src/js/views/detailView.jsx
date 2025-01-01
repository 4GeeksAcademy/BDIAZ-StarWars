import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { CardPerson } from "../component/CardPerson.jsx";

const switcher = (categorie, character) => {
    console.log("switcher");
    console.log("categorie", categorie);
    console.log("character", character);

    switch (categorie) {
        case "people":
            console.log("Entre al swithcer");
            return (
                <div className="container">
                    <CardPerson 
                        description={character.description}
                        properties={character.properties}
                        img={character.Picture}
                        categorie={categorie}
                        uid={character.uid}
                    />
                    {console.log("Entre al return")}
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
            default:
                break;
        }
    }, [params.theid]);  
    
    console.log("paramDetailView:", params);
    console.log("param.thecategorie:", params.thecategorie);

    return (
        <div className="mt-5">
            {switcher(params.thecategorie, store.character)}
        </div>
    );
};
