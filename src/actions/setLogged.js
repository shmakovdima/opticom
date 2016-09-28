export function setLogged(variant) {
  console.log('SET_LOGGED: '+variant)
  return {
    type: 'SET_LOGGED',
    payload: variant
  }
}