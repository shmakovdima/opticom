const initialState = {
  only_eco: false,
  show_menu: false
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_ECO':
      return {...state, only_eco: action.payload}
    case 'SHOW_MENU':
      return {...state, show_menu: action.payload}
    default:
      return state;
  }
}