export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

export default function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id: id,
  };
  return action;
} 

export function removeCharacterById(id) {
  return {
    type: REMOVE_CHARACTER,
    id: id,
  }
}
