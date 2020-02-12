import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SquadStats extends Component {
  render() {
    return (
      <div>
        <h1>Hero Score</h1>
      </div>
    );
  }
}

export default connect(null, null)(SquadStats);
