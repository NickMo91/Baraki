import "./404.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class FourOhFour extends Component {
	render() {
		return (
			<div className="error-page">
				<h1 className="error-page-error">ERROR!</h1>
				<h1 className="error-page-four">404</h1>
				<div>
					<Link to="/">
						<p className="error-page-link">Go Back To Home Page.</p>
					</Link>
			 </div>
			</div>
		);
	}
}

export default FourOhFour;
