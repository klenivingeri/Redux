import { GET_DIGIMON } from '../constantes';

const initialState ={
  digimons: []
};

export const digimonReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_DIGIMON:
      return {
        ...state,
        digimons: action.digimons
      }
      default:
        return state
  }
}