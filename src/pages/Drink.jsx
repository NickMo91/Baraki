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
				<div>
					<img className="Drink-image" src={drink.images}/>
				</div>
			);
		}

		return (
			<div className="Drink">
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
