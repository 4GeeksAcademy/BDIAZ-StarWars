import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/welcome.css";

export const Welcome = () => {
	const { store, actions } = useContext(Context);
    /*
    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')

    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').appendChild(items[0])
    })


    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
    }) */

	useEffect(() => {
		actions.loadPeople();
	}, []);

	return (
        <div className="container">
            <div className="slide">
                <div className="item" style={{backgroundImage: "url(" + "https://i.ibb.co/qCkd9jS/img1.jpg" + ")"}}>
                    <div className="content">
                        <div className="name">Switzerland</div>
                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{backgroundImage: "url(" + "https://i.ibb.co/qCkd9jS/img1.jpg" + ")"}}>
                    <div className="content">
                        <div className="name">Finland</div>
                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{backgroundImage: "url(" + "https://i.ibb.co/qCkd9jS/img1.jpg" + ")"}}>
                    <div className="content">
                        <div className="name">Iceland</div>
                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{backgroundImage: "url(" + "https://i.ibb.co/qCkd9jS/img1.jpg" + ")"}}>
                    <div className="content">
                        <div className="name">Australia</div>
                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{backgroundImage: "url(" + "https://i.ibb.co/qCkd9jS/img1.jpg" + ")"}}>
                    <div className="content">
                        <div className="name">Netherland</div>
                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{backgroundImage: "url(" + "https://i.ibb.co/qCkd9jS/img1.jpg" + ")"}}>
                    <div className="content">
                        <div className="name">Ireland</div>
                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button>See More</button>
                    </div>
                </div>

            </div>

            <div className="button">
                <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
                <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
            </div>

        </div>
	);
};