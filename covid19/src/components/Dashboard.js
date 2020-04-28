import React from "react";
import { connect } from "react-redux";
import { fetchOverall } from "../actions";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchOverall();
  }

  render() {
    if (!this.props.overall) {
      return <div style={{ color: "white" }}>Loading...</div>;
    }

    return (
      <React.Fragment>
        <h2 className="ui violet inverted header">Worldwide Stats</h2>
        <div
          className="ui inverted segment"
          style={{ margin: "2rem 0", textAlign: "center" }}
        >
          <div className="ui blue inverted statistic">
            <div className="value">{this.props.overall.cases}</div>
            <div className="label">Total Cases</div>
          </div>
          <div className="ui red inverted statistic">
            <div className="value">{this.props.overall.deaths}</div>
            <div className="label">Total Deaths</div>
          </div>
          <div className="ui blue inverted statistic">
            <div className="value">{this.props.overall.active}</div>
            <div className="label">Total Active Cases</div>
          </div>
          <div className="ui blue inverted statistic">
            <div className="value">{this.props.overall.todayCases}</div>
            <div className="label">Total New Cases</div>
          </div>
          <div className="ui red inverted statistic">
            <div className="value">{this.props.overall.todayDeaths}</div>
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
