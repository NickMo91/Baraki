import React from "react";
import { searchIngredients } from "actions/drinks";
import { connect } from "react-redux";
import DrinkResult from "components/DrinkResult";
import Loader from "components/Loader";

class SearchIngredient extends React.Component {
	state = {
		search: "",
	};


	_handleChange = (ev) => {
		this.setState({ search: ev.target.value });
		console.log(this.state);
	};

_handleSubmit = (ev) => {
	ev.preventDefault();
	this.props.searchIngredients(this.state.search);
}



render() {
	let content;

	if (this.props.isLoading) {
		content = <Loader className="loader">Pouring...</Loader>;
	}
	else {
		content = this.props.drinks
			.map((drink) => {
				return <DrinkResult drink={drink} key={drink.idDrink}/>;
			});
	}

	return (
		<div className="DrinksSearch">
			<div className="DrinksSearch-form">
				<form className="DrinksSearch-form-form" onSubmit={this._handleSubmit}>
					<input
						className="DrinksSearch-form-form-input"
						placeholder="Search here.."
						onChange={this._handleChange}
						value={this.state.search}
					/>
					<button className="DrinksSearch-form-form-btn">Go</button>
				</form>
			</div>
			<div className="DrinksSearch-results">
				{content}
			</div>
		</div>
	);
}
}



function mapStateToProps(state) {
	const { drinks, isLoading } = state.drinks;

	return {
		drinks,
		isLoading,
	};
}

export default connect(mapStateToProps, { searchIngredients })(searchIngredients);
