import heros from './heros_reducers';
import characters from './characters_reducer';
// import removeHero from './remove_hero_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ characters, heros });

export default rootReducer;
