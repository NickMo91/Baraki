import "./SearchDrinks.scss";
import React from "react";
import { searchDrinks } from "actions/drinks";
import { connect } from "react-redux";
import DrinkResult from "components/DrinkResult";
import Loader from "components/Loader";


class SearchDrinks extends React.Component {
	state = {
		search: "",
	};


	_handleChange = (ev) => {
		this.setState({ search: ev.target.value });
		console.log(this.state);
	};

_handleSubmit = (ev) => {
	ev.preventDefault();
	this.props.searchDrinks(this.state.search);
}



render() {
	let content;

	if (this.props.isLoading) {
		content = <Loader className="loader">Pouring...</Loader>;
	}
	else {
		content = [0, 1, 2].map((col) => {
			return (
				<div>
					{this.props.drinks
						.filter((drink, idx) => idx % 3 === col)
						.map((drink) => {
							return <DrinkResult drink={drink} key={drink.idDrink}/>;
						})
					}
				</div>
			);
		});
	}

	return (
		<div className="DrinksSearch">
			<div className="DrinksSearch-form">
				<form className="DrinksSearch-form-form" onSubmit={this._handleSubmit}>
					<input
						className="DrinksSearch-form-form-input"
						placeholder="Pick your poison"
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

export default connect(mapStateToProps, { searchDrinks })(SearchDrinks);
