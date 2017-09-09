const INITIAL_STATE = {
	drinks: [],
	activeDrink: null,
	isLoading: false,
	error: null,
};

export default function(state = INITIAL_STATE, action) {
	console.log(action);

	switch (action.type) {
	// Search
	case "DRINKS_SEARCH_START":
		return {
			...state,
			isLoading: true,
			drinks: [],
		};

	case "DRINKS_SEARCH_SUCCESS":
		return {
			...state,
			isLoading: false,
			drinks: action.drinks,
		};

		// Load
	case "DRINKS_LOAD_START":
		return {
			...state,
			isLoading: true,
			activeDrink: null,
		};

	case "DRINKS_LOAD_SUCCESS":
		return {
			...state,
			isLoading: false,
			activeDrink: action.drink,
		};

		// Error cases
	case "DRINGS_SEARCH_FAILURE":
	case "DRINK_LOAD_FAILURE":
		return {
			...state,
			isLoading: false,
			error: action.error,
		};

	default:
		return state;
	}
}
