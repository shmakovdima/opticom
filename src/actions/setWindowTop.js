export function setWindowTop(top) {
  console.log('window top: '+ top)
  return {
    type: 'SET_WINDOWTOP',
    payload: top
  }
}