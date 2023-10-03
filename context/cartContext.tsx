'use client'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  ReactNode,
  FC,
} from 'react'
//interface cart context
interface ICartContextProps {
  cart: IAddPizzaProps[]
  setCart: Dispatch<SetStateAction<IAddPizzaProps[]>>
  addCartItem: (item: IAddPizzaProps) => void
  isCartOpen: boolean
  setIsCartOpen: (isCartOpen: boolean) => void
  cartTotalItems: number
  cartTotalPrice: number
  deleteCartItem: (idnex: number) => void
  cartIncrese: (index: number) => void
  cartDecrease: (index: number) => void
}

export const CartContext = createContext<ICartContextProps>(
  {} as ICartContextProps
)

interface ICartProviderProps {
  children: ReactNode
}

const CartProvider: FC<ICartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<IAddPizzaProps[]>([])
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

  const addCartItem = ({
    id,
    image,
    name,
    crust,
    size,
    price,
    additionalTopping,
  }: IAddPizzaProps) => {
    const cartItemIndex = cart.findIndex(
      (item) =>
        item.id === id &&
        item.crust === crust &&
        item.price === price &&
        item.size &&
        size &&
        JSON.stringify(item.additionalTopping) ===
          JSON.stringify(additionalTopping)
    )

    const newITem = {
      id,
      image,
      name,
      crust,
      size,
      price,
      additionalTopping,
      amount: 1,
    }

    if (cartItemIndex === -1) {
      setCart([...cart, newITem])
    } else {
      const newCart = [...cart]
      newCart[cartItemIndex].amount += 1
      setCart(newCart)
    }
    setIsCartOpen(true)
  }

  const deleteCartItem = (index: number) => {
    setCart((item) => {
      return item.filter((__, i) => i !== index)
    })
  }

  const cartTotalItems = cart.reduce((a, c) => a + c.amount, 0)
  const cartTotalPrice = cart.reduce((a, c) => a + c.price * c.amount, 0)

  const cartIncrese = (index: number) => {
    const findIdIndexItem = cart.findIndex((__, i) => i === index)
    const newCart = [...cart]
    newCart[findIdIndexItem].amount++
    setCart(newCart)
  }

  const cartDecrease = (index: number) => {
    const findIdIndexItem = cart.findIndex((__, i) => i === index)
    const newCart = [...cart]
    newCart[findIdIndexItem].amount > 1 && newCart[findIdIndexItem].amount--
    setCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addCartItem,
        isCartOpen,
        setIsCartOpen,
        deleteCartItem,
        cartTotalItems,
        cartTotalPrice,
        cartIncrese,
        cartDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
