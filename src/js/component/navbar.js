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
					{store.favorites.length === 0 ? (
						<li className="dropdown-item">No data</li>
					) : (
						store.favorites.map((item, index) => (
							<li key={index} className="dropdown-item">
								<Link to={"/PersonDetail/" + (index + 1)} type="button">
									{item}
								</Link>
								<span onClick={() => actions.addFavorites(item)}>
									<i className="fa fa-trash"></i>
								</span>
							</li>
						))
					)}
				</ul>
			</div>
		</nav>
	);
};
