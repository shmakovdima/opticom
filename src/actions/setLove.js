export function setLove(loved) {
  console.log('id: '+ loved)
  return {
    type: 'SET_LOVE',
    payload: loved
  }
}