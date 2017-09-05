import "./SearchDrinks.scss";
import React from "react";


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



	render() {
		return (
			<div className="App">
				<h1>Drink search</h1>
				<div className="DrinksSearch">
					<form className="DrinksSearch-form">
						<input
							className="DrinksSearch-form-input"
							placeholder="Search for Drinks"
							onChange={this._handleChange}
						/>
						<button className="DrinksSearch-form-btn">Go</button>
					</form>

				</div>
			</div>
		);
	}
}

export default SearchDrinks;
