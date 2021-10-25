
import { getItemsMenuReducer, initialState } from '../reducer'
import { mock } from './__mock__/mock'

describe('Reducer test', () =>{
  it('Should return switch case SELECT_ITEMS', () =>{
  const actions = {
      type: 'SELECT_ITEMS',
      payload: mock.menu
  }


    expect(getItemsMenuReducer(initialState, actions)).toEqual(mock.expect)
    

    
  })
})