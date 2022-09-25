import { produce } from 'immer'
import { Coffee } from '../../pages/Home/components/CoffeeCard'
import { ActionTypes } from './actions'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartState {
  cartItems: CartItem[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART: {
      const coffeeAlreadyExistsInCart = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.newCoffee.id,
      )

      const newCartState = produce(state, (draft) => {
        if (coffeeAlreadyExistsInCart < 0) {
          draft.cartItems.push(action.payload.newCoffee)
        } else {
          draft.cartItems[coffeeAlreadyExistsInCart].quantity +=
            action.payload.newCoffee.quantity
        }
      })
      return newCartState
    }
    default:
      return state
  }
}
