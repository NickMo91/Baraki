import React from "react";
import ReactDOM from "react-dom";





class RandomDrinks extends React.Component {
	_getRandomDrinks = () => {
		this.props.drinks.map((drink) => {
			return Math.random(drink * 10);
		});
	}

	render() {
		return (
			<div className="RandomDrinks">

				<h1>{drink.strDrink}</h1>
				img
					src={drink.strDrinkThumb}
					className="DrinkResult-render-img"
				/>
			</div>
		);
	}
}

export default RandomDrinks;
