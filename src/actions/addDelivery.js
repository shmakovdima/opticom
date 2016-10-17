export function addDelivery (variant) {
  console.log(variant)
  return {
    type: 'ADD_DELIVERY',
    payload: variant
  }
}