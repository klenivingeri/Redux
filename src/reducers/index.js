import { clickReducer } from './clickReducer';
import { digimonReducer } from './digimonReducer';
import { getItemsMenuReducer } from '../component/select/reducer'
import { combineReducers } from 'redux';

export const Reducers =  combineReducers({
  clickState: clickReducer,
  digimonState: digimonReducer,
  itemsMenuState: getItemsMenuReducer
});