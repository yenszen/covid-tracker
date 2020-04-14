import { FETCH_COUNTRIES } from "../actions/types";

export const reducers = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};
