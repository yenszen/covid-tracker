import React from "react";
import { connect } from "react-redux";
import { fetchOverall } from "../actions";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchOverall();
  }

  formatNumber = input => {
    input.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
  };

  render() {
    if (!this.props.overall) {
      return (
        <div className="ui icon message">
          <i className="notched circle loading icon"></i>
          <div className="content">
            <div className="header">Just one second</div>
            <p>Fetching the latest data on Covid-19...</p>
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <h2 className="ui green inverted header">World Statistics</h2>
        <div
          className="ui inverted segment"
          style={{ margin: "2rem 0", textAlign: "center" }}
        >
          <div className="ui blue inverted statistic">
            <div className="value">
              {this.props.overall.cases.toLocaleString()}
            </div>
            <div className="label">Total Cases</div>
          </div>
          <div className="ui red inverted statistic">
            <div className="value">
              {this.props.overall.deaths.toLocaleString()}
            </div>
            <div className="label">Total Deaths</div>
          </div>
          <div className="ui blue inverted statistic">
            <div className="value">
              {this.props.overall.active.toLocaleString()}
            </div>
            <div className="label">Total Active Cases</div>
          </div>
          <div className="ui red inverted statistic">
            <div className="value">
              {this.props.overall.todayCases.toLocaleString()}
            </div>
            <div className="label">Total New Cases</div>
          </div>
          <div className="ui blue inverted statistic">
            <div className="value">
              {this.props.overall.todayDeaths.toLocaleString()}
            </div>
            <div className="label">Total New Deaths</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { overall: state.overall };
};

export default connect(mapStateToProps, { fetchOverall })(Dashboard);
