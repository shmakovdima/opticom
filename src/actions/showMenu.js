export function showMenu(variant) {
  console.log('show menu: '+variant)
  return {
    type: 'SHOW_MENU',
    payload: variant
  }
}