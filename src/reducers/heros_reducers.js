import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';

function heros(state = [], action) {
  let heros = [];
  switch(action.type) {
    case ADD_CHARACTER:
      heros = [...state, createCharacter(action.id)];
      return heros;
    case REMOVE_CHARACTER:
      heros = state.filter(hero => action.id !== hero.id);
      return heros;
    default:
      return state;
  }
}

function createCharacter(id) {
  let character = characters_json.find(c => c.id === id);
  // console.log('character: ', character)
  return character;
}

export default heros;
