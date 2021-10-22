import { 
  CLICK_UPDATE_VALUE,
  GET_DIGIMON
} from '../constantes'

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
})

export const getDigimon = () => {
  const digimon = 'Agumon test'
  return {
    type: GET_DIGIMON,
    digimons: digimon
  }
}