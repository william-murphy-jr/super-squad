import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SquadStats extends Component {
  getStrength(stats) {
    let value = this.props.heros.reduce((acc, hero) => (acc + hero[stats]), 0);
    return value;
  }

  render() {
    console.log('this.props.heros: ', this.props.heros);
    return (
      <div className="col-2">
        <h4>Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="list-item">Speed: { this.getStrength('speed') }</div>
          </li>
          <li className="list-group-item">
            <div className="list-item">Strength: { this.getStrength('strength') }</div>
          </li>
          <li className="list-group-item">
            <div className="list-item">intelligence: { this.getStrength('intelligence') }</div>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { heros: state.heros }
}

export default connect(mapStateToProps, null)(SquadStats);
