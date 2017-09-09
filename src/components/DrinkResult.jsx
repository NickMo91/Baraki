import React from "react";
import "./DrinkResult.scss";
import { Link } from "react-router-dom";

class DrinkResult extends React.Component {
	render() {
		const { drink } = this.props;
		console.log("drinkresult", drink, "drinkresult");
		return (

			<div className="DrinkResult">
				{drink.map((drink) => {
					return (
						<div className="DrinkResult-render">
							<h1 className="DrinkResult-render-h1" >{drink.strDrink}</h1>
							<img
								src={drink.strDrinkThumb}
								className="DrinkResult-render-img"
							/>
						</div>
					);
				})}
			</div>

		);
	}
}

export default DrinkResult;
