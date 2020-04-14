import axios from "axios";
import { FETCH_COUNTRIES } from "./types";

export const fetchCountries = () => dispatch => {
  setTimeout(() => {
    return axios
      .get("https://corona.lmao.ninja/countries/")
      .then(res => {
        console.log(res);
        const response = res.data.sort((a, b) => {
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
  }, 1000);
};
