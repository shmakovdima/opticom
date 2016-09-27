export function setWindowWidth(width) {
  console.log('window width: '+ width)
  return {
    type: 'SET_WINDOWWIDTH',
    payload: width
  }
}