import "./Navigation.scss";
import React from "react";
import { NavLink } from "react-router-dom";


class Navigation extends React.Component {
	render() {
		const links = [{
			to: "/",
			text: "Home",
		}, {
			to: "/SearchDrinks",
			text: "Search Recipes",
		}];
		return (
			<nav className="Nav">
				{links.map((link) => {
					return (
						<NavLink
							key={link.to}
							to={link.to}
							className="Nav-link"
							activeClassName="is-active"
							exact
						>
							{link.text}
						</NavLink>
					);
				})}
			</nav>

		);
	}
}

export default Navigation;
