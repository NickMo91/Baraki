import "./Drink.scss";
import React from "react";
import { connect } from "react-redux";
import { loadDrink } from "actions/drinks";
import Loader from "components/Loader";


class Drink extends React.Component {
	componentDidMount() {
		this.props.loadDrink(this.props.drinkId);
	}

	render() {
		const { drink, isLoading, error } = this.props;
		let content;

		if (isLoading) {
			content = <Loader/>;
		}
		else if (!drink) {
			content = <div className="Drink-error">{error}</div>;
		}
		else {
			console.log(drink);
			content = (
				<div className="Drink">
					<div className="Drink-box">
						<div className="Drink-img">
							<img className="Drink-image" src={drink.strDrinkThumb}/>
						</div>
					</div>
					<div className="Drink-info">
						<div className="Drink-name">
							<h1 className="Drink-name-h1">{drink.strDrink}</h1>
						</div>
						<div className="Drink-info-a">
							<h1 className="Drink-info-a-category">{drink.strCategory}</h1>
							<h1 className="Drink-info-a-glass">{drink.strGlass}</h1>
						</div>
						<div className="Drink-info-ingredients">
							<h1 className="Drink-info-ingredients-h1">Ingredients</h1>
							<h2>{drink.strMeasure1} {drink.strIngredient1}</h2>
							<h2>{drink.strMeasure2} {drink.strIngredient2}</h2>
							<h2>{drink.strMeasure3} {drink.strIngredient3}</h2>
							<h2>{drink.strMeasure4} {drink.strIngredient4}</h2>
							<h2>{drink.strMeasure5} {drink.strIngredient5}</h2>
							<h2>{drink.strMeasure6} {drink.strIngredient6}</h2>
							<h2>{drink.strMeasure7} {drink.strIngredient7}</h2>
							<h2>{drink.strMeasure8} {drink.strIngredient8} </h2>
							<h2>{drink.strMeasure9} {drink.strIngredient9} </h2>
						</div>
						<div className="Drink-Instructions">
							<h2 className="Drink-Instructions-h1">Instructions</h2>
							<p className="Drink-Instructions-p"> {drink.strInstructions}</p>
						</div>
					</div>

				</div>
			);
		}

		return (
			<div className="Drink-render">
				{content}
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	const { activeDrink, error, isLoading } = state.drinks;
	return {
		drinkId: props.match.params.drinkId,
		drink: activeDrink,
		error,
		isLoading,
	};
}

export default connect(mapStateToProps, { loadDrink })(Drink);
