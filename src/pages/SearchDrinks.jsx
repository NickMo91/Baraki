import "./SearchDrinks.scss";
import React from "react";
import { searchDrinks } from "actions/drinks";
import { connect } from "react-redux";



class SearchDrinks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
		};
	}

	_handleChange = (ev) => {
		this.setState({ search: ev.target.value });
		console.log(this.state);
	};

_handleSubmit = (ev) => {
	ev.preventDefault();
	this.props.searchDrinks(this.state.search);
}



render() {
	return (
		<div className="DrinkSearch">
			<h1>Drink search</h1>
			<div className="DrinksSearch-form">
				<form className="DrinksSearch-form-form" onSubmit={this._handleSubmit}>
					<input
						className="DrinksSearch-form-input"
						placeholder="Search for Drinks"
						onChange={this._handleChange}
						value={this.state.search}
					/>
					<button className="DrinksSearch-form-btn">Go</button>
				</form>
			</div>
			<div className="DrinkSearch-Drinks">
				<h1>hello</h1>
			</div>
		</div>
	);
}
}

function mapStateToProps(state) {
	const { drinks  } = state.drinks;

	return {
		drinks,
	};
}

export default connect(mapStateToProps, { searchDrinks })(SearchDrinks);
