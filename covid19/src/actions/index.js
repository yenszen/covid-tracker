import axios from "axios";
import { FETCH_COUNTRIES, FETCH_OVERALL } from "./types";

export const fetchCountries = () => dispatch => {
  return axios
    .get("https://corona.lmao.ninja/v2/countries/")
    .then(res => {
      console.log("fetchCountries", res);

      const filtered = res.data.filter(
        country => country.country !== "Diamond Princess"
      );

      const response = filtered.sort((a, b) => {
        if (a.cases > b.cases) {
          return -1;
        } else if (a.cases < b.cases) {
          return 1;
        } else {
          return 0;
        }
      });
      dispatch({ type: FETCH_COUNTRIES, payload: response });
    })
    .catch(err => console.log(err));
};

export const fetchOverall = () => dispatch => {
  return axios
    .get("https://corona.lmao.ninja/v2/all")
    .then(res => {
      console.log("fetchOverall", res);
      dispatch({ type: FETCH_OVERALL, payload: res.data });
    })
    .catch(err => console.log(err));
};
