import React from "react";
import { connect } from "react-redux";
import { fetchCountries } from "../actions";

class CountriesList extends React.Component {
  state = {
    searchTerm: "",
    searchResults: []
  };

  componentDidMount() {
    this.props.fetchCountries();
    this.setState({ searchResults: this.props.countries });
  }

  render() {
    console.log("searchResults", this.state.searchResults);
    return (
      <div>
        <form>
          <div className="ui search">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search country..."
                value={this.state.searchTerm}
                onChange={e =>
                  this.setState({
                    searchTerm: e.target.value.toLowerCase()
                  })
                }
              />
              <i className="search icon" />
            </div>
          </div>
        </form>

        <table className="ui inverted blue celled table">
          <thead>
            <tr>
              <th>Country</th>
              <th>
                Total Cases <i className="sort amount down icon" />
              </th>
              <th>New Cases</th>
              <th>Total Deaths</th>
              <th>New Deaths</th>
              <th>Active Cases</th>
              <th>Total Tests</th>
              <th>Case/Test Ratio</th>
              <th>Death Rate</th>
            </tr>
          </thead>

          {this.props.countries ? (
            <tbody>
              {this.props.countries.map(country => {
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

                    <td data-label="Total Cases">{country.cases}</td>
                    <td data-label="New Cases">{country.todayCases}</td>
                    <td data-label="Total Deaths">{country.deaths}</td>
                    <td data-label="New Deaths">{country.todayDeaths}</td>
                    <td data-label="Active Cases">{country.active}</td>
                    <td data-label="Total Tests">
                      {country.tests ? country.tests : "N/A"}
                    </td>
                    <td data-label="Case/Test Ratio">
                      {country.tests
                        ? `${Math.round(
                            (country.cases / country.tests) * 100
                          )}%`
                        : "N/A"}
                    </td>
                    <td data-label="Death Rate">
                      {`${Math.round((country.deaths / country.cases) * 100)}%`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <div colSpan="8" className="ui icon message">
                <i className="notched circle loading icon"></i>
                <div className="content">
                  <div className="header">Just one second</div>
                  <p>We're fetching that latest data on Covid-19 for you.</p>
                </div>
              </div>
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
