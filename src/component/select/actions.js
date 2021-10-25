import { SELECT_ITEMS, DIGIMONS } from './constants'
import axios from 'axios'

export const getSearchByDateOptions = () => {
  const menu = ['item 1','item 2','item 3','item 4','item 5','item 6']
  return {
    type: SELECT_ITEMS,
    payload: menu
  }
}

export const getDigimons = () => async dispatch => {
  try{
    const digimons =  await axios.get('https://digimon-api.vercel.app/api/digimon')
      dispatch( {
          type: DIGIMONS,
          payload: digimons.data
      })
  }
  catch(e){
      dispatch( {
          type: DIGIMONS,
          payload: console.log(e),
      })
  }

}