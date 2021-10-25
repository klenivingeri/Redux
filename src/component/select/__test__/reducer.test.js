
import { getItemsMenuReducer, initialState } from '../reducer'
import * as type from '../constants'
import { mock } from './__mock__/mock'

describe('Reducer test', () =>{
  it('Should return switch default', () =>{
    expect(getItemsMenuReducer(initialState, {})).toEqual(initialState)
  })
})

  it('Should return switch case SELECT_ITEMS', () =>{
  const actions = {
      type: type.SELECT_ITEMS,
      payload: mock.data
  }
    expect(getItemsMenuReducer(initialState, actions)).toEqual(mock.expect)
})