const INITIAL_STATE = {
	drinks: [],
	activeDrink: null,
	error: null,
};

export default function(state = INITIAL_STATE, action) {
	console.log(action);

	switch (action.type) {
	// Search
	case "DRINKS_SEARCH_START":
		return {
			...state,
			gifs: [],
		};

	case "DRINKS_SEARCH_SUCCESS":
		return {
			...state,
			gifs: action.drinks,
		};

		// Load
	case "DRINKS_LOAD_START":
		return {
			...state,
			activeGif: null,
		};

	case "GIFS_LOAD_SUCCESS":
		return {
			...state,
			activeGif: action.drinks,
		};

		// Error cases
	case "DRINGS_SEARCH_FAILURE":
	case "DRINK_LOAD_FAILURE":
		return {
			...state,
			error: action.error,
		};

	default:
		return state;
	}
}
