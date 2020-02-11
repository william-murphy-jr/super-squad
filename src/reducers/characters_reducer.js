import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import __DEV from '../../src/config';

function characters(state = characters_json, action) {
  let characters = [];
  switch(action.type) {
    case ADD_CHARACTER:
      characters = state.filter(item => (item.id !== action.id));
      __DEV && console.log('__DEV characters array: ', characters);
      return characters;
    case REMOVE_CHARACTER:
      characters = [...state, addHero(action.id)];
      return characters;
    default:
      return state;
  }
}

function addHero(id) {
  const hero = characters_json.find(character => character.id === id);
  return hero;
}

export default characters;