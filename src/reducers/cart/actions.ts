import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  CLEAN_CART = 'CLEAN_CART',
}

export function addCoffeeToCartAction(newCoffee: CartItem) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      newCoffee,
    },
  }
}
