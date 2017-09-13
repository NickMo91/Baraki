import "./Home.scss";
import React from "react";
import  SearchDrinks  from "./SearchDrinks";

class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<div className="Home-discription" >
					<h1 className="Home-title">Baraki</h1>
					<p className="Home-p">Baraki is your to go to app,
					 for when you are looking for your favorite cocktail recipe,
					or for when you are not sure what you want to drink,
					 but you know for sure what ingredients you have available,
					Baraki will help you make the best out of what you have!</p>
				</div>
				<div className="Home-search">
					<SearchDrinks/>
				</div>
			</div>
		);
	}
}

export default Home;
