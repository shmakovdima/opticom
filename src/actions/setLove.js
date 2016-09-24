export function setLOVE(id) {
  console.log('id: '+ loved)
  return {
    type: 'SET_LOVE',
    payload: loved
  }
}