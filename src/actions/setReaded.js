export function setReaded(variant) {
  console.log('id: '+ variant)
  return {
    type: 'SET_READED',
    payload: variant
  }
}