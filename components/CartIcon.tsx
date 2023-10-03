'use client'
//context
import { CartContext } from '@/context/cartContext'
import { FC, useContext } from 'react'
//icons
import { FaBagShopping } from 'react-icons/fa6'
interface ICartIconProps {}

const CartIcon: FC<ICartIconProps> = () => {
  const { cartTotalItems, setIsCartOpen } = useContext(CartContext)

  const handleCartOpen = () => {
    setIsCartOpen(true)
  }

  return (
    <div
      onClick={handleCartOpen}
      className="lg:hidden fixed bottom-5 right-5 w-16 h-16 bg-black/70 rounded-full flex items-center justify-center cursor-pointer"
    >
      <FaBagShopping className="text-3xl text-white " />
      <span className="absolute bottom-2 right-2 text-white gradient w-5 h-5 rounded-full flex items-center justify-center text-[13px]">
        {cartTotalItems}
      </span>
    </div>
  )
}

export default CartIcon
