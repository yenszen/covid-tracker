import { FETCH_COUNTRIES, FETCH_OVERALL } from "../actions/types";

export const reducers = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { ...state, countries: action.payload };
    case FETCH_OVERALL:
      return { ...state, overall: action.payload };
    default:
      return state;
  }
};
