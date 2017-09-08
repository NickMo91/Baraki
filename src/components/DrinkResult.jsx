import React from "react";
import "./DrinkResult.scss";
import { Link } from "react-router-dom";

class DrinkResult extends React.Component {
	render() {
		const { drink } = this.props;
		console.log("drinkresult", drink, "drinkresult");
		return (
			<div>
				{drink.map((drink) => {
					return (
						<div>
							<h1>{drink.strDrink}</h1>
							<h1>{drink.strInstructions}</h1>
							<img
								src={drink.strDrinkThumb}
								className="DrinkResult-img"
							/>
						</div>
					);
				})}
			</div>
		);
	}
}

export default DrinkResult;
