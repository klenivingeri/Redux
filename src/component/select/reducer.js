import { SELECT_ITEMS, DIGIMONS, INITIAL_STATE } from './constants'

export const initialState = {
  itemsMenu: [],
}

export const getItemsMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEMS:
      return {
        ...state,
        itemsMenu: action.payload
      }
    case DIGIMONS:
      return {
        ...state,
        digimons: action.payload
      }
    default:
      return state;
  }
}