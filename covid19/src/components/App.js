import React from "react";
import CountriesList from "./CountriesList";

const App = () => {
  return (
    <div className="ui container">
      <h1 style={{ color: "white", margin: "1rem 0" }}>Covid-19 Tracker</h1>
      <CountriesList />
      <footer style={{ color: "white", textAlign: "center", margin: "1rem 0" }}>
        <h4>Copyright 2020 Yap Yen Szen</h4>
      </footer>
    </div>
  );
};

export default App;
