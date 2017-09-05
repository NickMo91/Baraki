import React from "react";
import ReactDOM from "react-dom";


class SearchDrinks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
		};
	}
	render() {
		return (
			<div className="App">
				<h1>I am Drink search bar</h1>
				<h2>Replace me!</h2>
				<div className="DrinksSearch">
					<form className="DrinksSearch-form">
						<input
							className="DrinksSearch-form-input"
							placeholder="Search for Drinks"
						/>
						<button className="DrinksSearch-form-btn">Go</button>
					</form>

				</div>
			</div>
		);
	}
}

export default SearchDrinks;
