import { FC, useContext } from 'react'
//context
import { CartContext } from '@/context/cartContext'
import { CartItem } from '.'
interface ICartItemsProps {}

const CartItems: FC<ICartItemsProps> = () => {
  const { cart } = useContext(CartContext)

  return (
    <ul className="h-[70vh] overflow-y-auto  scrollbar-thin scrollbar-thumb-[#f97316] scrollbar-track-[#ffedd5] mr-2 py-10">
      {cart.map((item, index) => (
        <CartItem item={item} index={index} key={index} />
      ))}
    </ul>
  )
}

export default CartItems
