const initialState = {
  only_eco: false
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_ECO':
      return {...state, only_eco: action.payload}
    default:
      return state;
  }
}