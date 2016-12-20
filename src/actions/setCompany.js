export function setCompany(variant) {
  console.log(variant)
  return {
    type: 'SET_COMPANY',
    payload: variant
  }
}