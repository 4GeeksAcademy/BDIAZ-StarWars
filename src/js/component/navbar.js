import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	console.log("store.favorites: ", store.favorites)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>

			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
				</button>
				<ul className="dropdown-menu">
					{store.favorites.map((item, index) => {
						return (
							<li key={index}>
								<a className="dropdown-item" href="#">{item}</a>
								<span onClick={(e)=>{actions.addFavorites(item)}}><i className="fa fa-trash"></i></span>
							</li>
						)
						
					})}
				</ul>
			</div>
			{/*<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
		</nav>
	);
};
