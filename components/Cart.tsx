import { FC, useContext } from 'react'
import { CartItems, CartEmpty, CartTop, CartBottom } from '.'
import { CartContext } from '@/context/cartContext'

interface ICartProps {}

const Cart: FC<ICartProps> = () => {
  const { cart } = useContext(CartContext)
  return (
    <div className="">
      <CartTop />
      {cart.length === 0 ? <CartEmpty /> : <CartItems />}
      {cart.length > 0 && <CartBottom />}
    </div>
  )
}

export default Cart
