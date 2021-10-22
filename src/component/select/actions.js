import { SELECT_ITEMS  } from './constants'

export const getSearchByDateOptions = () => {
  const itemsMenu = ['item 1','item 2','item 3','item 4','item 5','item 6']
  return {
    type: SELECT_ITEMS,
    itemsMenu: itemsMenu
  }
}