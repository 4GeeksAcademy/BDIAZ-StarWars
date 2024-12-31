import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/welcome.css";

export const Welcome = () => {
	const { store, actions } = useContext(Context);
    const [sections, setSection] = useState(store.sections);


    const next = () => {
        setSection((prev) => {
            const [first, ...rest] = prev
            return [...rest, first]
        })
    }

    const prev = () => {
        setSection(()=>{
            let last =  sections[sections.length - 1];
            let ress = sections.slice(0,-1);
            return [last, ...ress]
        })
    }

	useEffect(() => {
		actions.loadPeople();
	}, []);

	return (
        <div className="box">
            <div className="slide">
                {
                    sections.map((item, index) => {
                        return (<div key={index} className="item" style={{backgroundImage: "url(" + item.url + ")"}}>
                            <div className="content">
                                <div className="name">{item.title}</div>
                                <div className="des">{item.description}</div>
                                <button>See More</button>
                            </div>
                        </div>)
                    })
                }

            </div>

            <div className="button">
                <button className="prev" onClick={prev}><i className="fa-solid fa-arrow-left"></i></button>
                <button className="next" onClick={next}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
	);
};