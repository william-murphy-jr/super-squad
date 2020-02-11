import React, { Component } from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import addCharacterById, { removeCharacterById } from '../actions'

import './CharactersList.css';

class CharactersList extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log('props ', props)
  // }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <h4>Characters</h4>
          <ul className="list-group">
            {
              this.props.characters.map(character => {
                return (
                  <li className="list-group-item" key={ character.id + "id"}>
                    <div className="list-item">{ character.name}
                    </div>
                    <div className='list-item  right-button' onClick={ () => this.props.addCharacterById(character.id) }>
                      Add + 
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="col-6">
          <h4>Hero List</h4>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps ', state);
  return {
    characters: state.characters,
    heros: state.heros,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCharacterById, removeCharacterById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
