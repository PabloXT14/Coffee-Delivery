import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'
import { cartReducer } from '../reducers/cart/reducer'
import { ActionTypes, addCoffeeToCartAction } from '../reducers/cart/actions'

/* ===== TYPE ===== */
export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    coffeeItemId: string,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: string) => void
  cleanCart: () => void
  cartItemsTotal: number
  deliveryPrice: number
}

interface CartContextProviderProps {
  children: ReactNode
}

/* ===== LOCAL STORAGE KEY ===== */
const COFFEE_ITEMS_STORAGE_KEY = '@coffeeDelivery:cartItems-1.0.0'

/* ===== CONTEXT ===== */
export const CartContext = createContext({} as CartContextType)

/* ===== PROVIDER ===== */
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cartItems: [] },
    () => {
      const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
      if (storedCartItems) {
        return JSON.parse(storedCartItems)
      }
      return {
        cartItems: [],
      }
    },
  )

  // const [cartItems, setCartItems] = useState<CartItem[]>(() => {
  //   const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
  //   if (storedCartItems) {
  //     return JSON.parse(storedCartItems)
  //   }
  //   return []
  // })

  const { cartItems } = cartState

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  const deliveryPrice = 3.5 // fica a sua escolha

  function addCoffeeToCart(coffee: CartItem) {
    // const coffeeAlreadyExistsInCart = cartItems.findIndex(
    //   (cartItem) => cartItem.id === coffee.id,
    // )
    // const newCart = produce(cartItems, (draft) => {
    //   if (coffeeAlreadyExistsInCart < 0) {
    //     draft.push(coffee)
    //   } else {
    //     draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
    //   }
    // })
    // setCartItems(newCart)
    dispatch(addCoffeeToCartAction(coffee))
  }

  function changeCartItemQuantity(
    cartItemId: string,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    // setCartItems(newCart)
  }

  function removeCartItem(cartItemId: string) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    // setCartItems(newCart)
  }

  function cleanCart() {
    // setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartState))
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
        cartItemsTotal,
        deliveryPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
