export function setReaded(variant) {
  console.log(variant)
  return {
    type: 'SET_READED',
    payload: variant
  }
}