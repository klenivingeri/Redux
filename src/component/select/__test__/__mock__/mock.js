export const mock = {}

mock.data = {
  type: 'SELECT_ITEMS',
  payload: 
    ['item 1','item 2','item 3','item 4','item 5','item 6']
}
mock.expect = {
    itemsMenu:{
      ...mock.data
    },
}
