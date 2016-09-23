export function setEco(variant) {
  console.log('eco_mode: '+variant)
  return {
    type: 'SET_ECO',
    payload: variant
  }
}