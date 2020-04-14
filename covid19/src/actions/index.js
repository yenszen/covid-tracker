import axios from "axios";
import { FETCH_COUNTRIES } from "./types";

export const fetchCountries = () => dispatch => {
  axios
    .get("https://corona.lmao.ninja/countries/")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_COUNTRIES, payload: res.data });
    })
    .catch(err => console.log(err));
};
