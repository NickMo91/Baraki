import "./App.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "pages/Home";
import FourOhFour from "pages/404";
import Navigation from "components/Navigation";
import  SearchDrinks  from "pages/SearchDrinks";
import IngSearch from "pages/IngSearch";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/SearchDrinks" component={SearchDrinks}/>
						<Route exact path="/IngSearch" component={IngSearch}/>
						<Route path="*" component={FourOhFour} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
