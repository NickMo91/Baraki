import DrinksAPI from "util/drinksApi";

export function searchDrinks(drink) {
	return (dispatch) => {
		dispatch({ type: "DRINKS_SEARCH_START" });

		DrinksAPI.get("/search", {
			args: { s: drink },
		}).then((res) => {
			if (res.drinks) {
				dispatch({
					type: "DRINKS_SEARCH_SUCCESS",
					drinks: res.drinks,
				});
			}
			else {
				dispatch({
					type: "DRINKS_SEARCH_FAILURE",
					error: "Search Failed",
				});
			}
		}).catch((err) => {
			dispatch({
				type: "DRINKS_SEARCH_FAILURE",
				error: "Something went wrong, try again.",
			});
		});
	};
}

export function searchIngredients(drink) {
	return (dispatch) => {
		dispatch({ type: "DRINK_SEARCH_START" });

		DrinksAPI.get("/filter", {
			args: { i: drink },
		}).then((res) => {
			if (res.drinks) {
				dispatch({
					type: "DRINKS_SEARCH_SUCCESS",
					drinks: res.drinks,
				});
			}
			else {
				dispatch({
					type: "DRINKS_SEARCH_FAILURE",
					error: "Search Failed",
				});
			}
		}).catch((err) => {
			dispatch({
				type: "DRINKS_SEARCH_FAILURE",
				error: "Something went wrong, try again.",
			});
		});
	};
}


export function loadDrink(id) {
	return (dispatch, getStore) => {
		const { drinks } = getStore().drinks;

		// First check if we have the drink. If we do, serve it right away!
		const cachedDrink = drinks.find((drink) => drink.idDrink === id);
		if (cachedDrink) {
			return dispatch({
				type: "DRINKS_LOAD_SUCCESS",
				drink: cachedDrink,
			});
		}

		// Otherwise, request it
		dispatch({ type: "DRINKS_LOAD_START" });

		DrinksAPI.get(`/search/${id}`).then((res) => {
			if (res.drinks && res.drinks.idDrink) {
				dispatch({
					type: "DRINKS_LOAD_SUCCESS",
					drink: res.drinks,
				});
			}
			else {
				dispatch({
					type: "DRINKS_LOAD_FAILURE",
					error: "Unable to find that drink",
				});
			}
		}).catch(() => {
			dispatch({
				type: "DRINKS_LOAD_FAILURE",
				error: "Something went wrong, please refresh and try again",
			});
		});
	};
}
