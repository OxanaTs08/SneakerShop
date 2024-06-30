import {DELETE_ITEM, SAVE_CART_LIST} from "../actions"

export const initialState = {
  cart: []
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
      case 'SAVE_CART_LIST':
      return {
        ...state,
        cart: action.payload
      }
    ;
    default:
      return state
  }
}

export default shopReducer