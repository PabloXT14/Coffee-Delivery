import { createContext, ReactNode, useContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

/* ===== TYPE ===== */
export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

/* ===== CONTEXT ===== */
export const CartContext = createContext({} as CartContextType)

/* ===== PROVIDER ===== */
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  // console.log(cartItems)

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
