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
