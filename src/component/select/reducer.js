import { SELECT_ITEMS } from './constants'

const initialState = {
  itemsMenu: []
}

export const getItemsMenuReducer = (state = initialState, action ) => {
  switch(action.type){
    case SELECT_ITEMS:
      return {
        ...state,
        itemsMenu: action.itemsMenu
      }
      default:
        return state;
  }
}