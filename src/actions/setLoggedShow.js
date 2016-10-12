export function setLoggedShow(variant) {
  console.log('SET_LOGGED_SHOW: '+variant)
  return {
    type: 'SET_LOGGED_SHOW',
    payload: variant
  }
}