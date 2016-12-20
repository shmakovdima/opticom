export function emptyCart(variant) {
  return {
    type: 'EMPTY_CART',
    payload: variant
  }
}