import { Coffee } from '../../pages/Home/components/CoffeeCard'
import { ActionTypes } from './actions'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartItemsState {
  cartItems: CartItem[]
}

export function cartItemsReducer(state: CartItemsState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART: {
      const coffeeAlreadyExistsInCart = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payloadcoffee.id,
      )

      // const newCart = produce(cartItems, (draft) => {
      //   if (coffeeAlreadyExistsInCart < 0) {
      //     draft.push(coffee)
      //   } else {
      //     draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      //   }
      // })

      // setCartItems(newCart)
    }
  }
}
