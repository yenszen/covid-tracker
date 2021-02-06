import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CountriesList from "./CountriesList";
import Dashboard from "./Dashboard";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="ui container">
        <div className="my-header">
          <h1 style={{ color: "white", margin: "1rem 0" }}>Covid-19 Tracker</h1>
          <nav>
            <Link className="link-item" to="/">
              Overall
            </Link>
            <Link className="link-item" to="/countries">
              By Country
            </Link>
          </nav>
        </div>

        <div className="ui info message">
          <div className="header">Handy Tips</div>
          <ul className="list">
            <li>
              Navigation on top right corner to alternate between overall and
              country statistics
            </li>
            <li>
              For mobile users - switch to landscape mode to view more info
            </li>
          </ul>
        </div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/countries" component={CountriesList} />
        <footer
          style={{ color: "white", textAlign: "center", margin: "1rem 0" }}
        >
          <h4>Copyright 2020 Yap Yen Szen</h4>
        </footer>
      </div>
    </Router>
  );
};

export default App;
