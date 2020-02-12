import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCharacterById } from '../actions/index';

class HeroList extends Component {
  render() {
    return (
      <div className="col-5">
        <h4>Hero Squad</h4>
        <ul className="list-group">
          {
            this.props.heros.map(hero => {
              return (
                <li className="list-group-item" key={ hero.id }>
                  <div className="list-item">{ hero.name }</div>
                  <div className="list-item right-button" onClick={() => this.props.removeCharacterById(hero.id)}>Remove -</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { heros: state.heros }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeCharacterById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
