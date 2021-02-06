import React from "react";
import { connect } from "react-redux";
import { fetchCountries } from "../actions";
import "./CountriesList.css";

class CountriesList extends React.Component {
  state = {
    searchTerm: "",
    searchResults: []
  };

  componentDidMount() {
    this.props.fetchCountries();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.countries !== this.props.countries) {
      this.setState({ searchResults: this.props.countries });
    }

    if (prevState.searchTerm !== this.state.searchTerm) {
      const results = this.props.countries.filter(country =>
        country.country
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
      );

      this.setState({
        searchResults: results
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <div className="ui search">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search country..."
                value={this.state.searchTerm}
                onChange={e => this.setState({ searchTerm: e.target.value })}
              />
              <i className="search icon" />
            </div>
          </div>
        </form>

        <table className="ui sortable celled unstackable table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Total Cases</th>
              <th className="mobile">New Cases</th>
              <th>Total Deaths</th>
              <th className="mobile">New Deaths</th>
              <th className="mobile">Active Cases</th>
              <th className="mobile">Total Tests</th>
              <th className="tablet">Case/Test Ratio</th>
              <th className="tablet">Crude Death Rate</th>
              <th className="tablet">Resolved Death Rate</th>
            </tr>
          </thead>

          {this.props.countries ? (
            <tbody className="ui unstackable table">
              {this.state.searchResults.map(country => {
                const deathRate = Math.round(
                  (country.deaths / country.cases) * 100
                );
                const reDeathRate = Math.round(
                  (country.deaths / (country.cases - country.active)) * 100
                );
                return (
                  <tr key={country.countryInfo._id}>
                    <td data-label="Country">
                      {country.country}{" "}
                      <img
                        className="ui mini right floated image"
                        src={country.countryInfo.flag}
                        alt="Nation flag"
                      />
                    </td>

                    <td data-label="Total Cases">
                      {country.cases.toLocaleString()}
                    </td>
                    <td data-label="New Cases" className="mobile">
                      {country.todayCases.toLocaleString()}
                    </td>
                    <td data-label="Total Deaths">
                      {country.deaths.toLocaleString()}
                    </td>
                    <td data-label="New Deaths" className="mobile">
                      {country.todayDeaths.toLocaleString()}
                    </td>
                    <td data-label="Active Cases" className="mobile">
                      {country.active.toLocaleString()}
                    </td>
                    <td data-label="Total Tests" className="mobile">
                      {country.tests ? country.tests.toLocaleString() : "N/A"}
                    </td>
                    <td data-label="Case/Test Ratio" className="tablet">
                      {country.tests
                        ? `${Math.round(
                            (country.cases / country.tests) * 100
                          )}%`
                        : "N/A"}
                    </td>
                    <td
                      data-label="Crude Death Rate"
                      className="tablet"
                    >{`${deathRate}%`}</td>
                    <td
                      data-label="Resolved Death Rate"
                      className="tablet"
                    >{`${reDeathRate}%`}</td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="10">
                  <div className="ui icon message">
                    <i className="notched circle loading icon"></i>
                    <div className="content">
                      <div className="header">Just one second</div>
                      <p>Fetching the latest data on Covid-19...</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          )}
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
