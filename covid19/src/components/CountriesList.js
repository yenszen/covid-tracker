import React from "react";
import { connect } from "react-redux";
import { fetchCountries } from "../actions";

class CountriesList extends React.Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    return (
      <div>
        <div className="ui grid">
          <button className="ui blue button">Today</button>
          <button className="ui teal button">Yesterday</button>
          <div className="ui search">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search country..."
              />
              <i className="search icon" />
            </div>
          </div>
        </div>

        <table className="ui celled table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Total Cases</th>
              <th>New Cases</th>
              <th>Total Deaths</th>
              <th>New Deaths</th>
              <th>Active Cases</th>
              <th>Total Tests</th>
              <th>New Tests</th>
            </tr>
          </thead>

          <tbody></tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries
  };
};

export default connect(mapStateToProps, { fetchCountries })(CountriesList);
