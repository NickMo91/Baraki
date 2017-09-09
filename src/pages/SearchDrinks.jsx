import "./SearchDrinks.scss";
import React from "react";
import { searchDrinks } from "actions/drinks";
import { connect } from "react-redux";
import DrinkResult from "components/DrinkResult";
import Loader from "components/Loader";


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
	let content;

	if (this.props.isLoading) {
		return <Loader/>;
	}
	if (this.props.drinks === null) {
		return content = (
			<div>
				<h1>Couldn't find drink(s). Please try again!</h1>
			</div>
		);
	}
	return (
		content =
		(<div className="DrinksSearch">
			<div className="DrinksSearch-form">

				<form className="DrinksSearch-form-form" onSubmit={this._handleSubmit}>
					<h1 className="DrinksSearch-text">I am looking for </h1>
					<input
						className="DrinksSearch-form-form-input"
						placeholder="What are you looking for"
						onChange={this._handleChange}
						value={this.state.search}
					/>
					<button className="DrinksSearch-form-form-btn">Go</button>
				</form>
			</div>
			{<DrinkResult drink={this.props.drinks} />}
		</div>)
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
