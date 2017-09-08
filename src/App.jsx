import "./App.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Home from "pages/Home";
import FourOhFour from "pages/404";
import Navigation from "components/Navigation";
import  SearchDrinks  from "pages/SearchDrinks";
import IngSearch from "pages/IngSearch";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import Drink from "pages/Drink";


const store = createStore(reducers, applyMiddleware(reduxThunk));


class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Navigation/>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route exact path="/SearchDrinks" component={SearchDrinks}/>
							<Route path="/drinks/:drinkId" component={Drink} />
							<Route exact path="/IngSearch" component={IngSearch}/>
							<Route path="*" component={FourOhFour} />
						</Switch>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
