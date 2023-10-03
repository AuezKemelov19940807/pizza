'use client'
import { FC, useContext, useEffect } from 'react'
//context
import { CartContext } from '@/context/cartContext'
//components
import { Cart } from '.'
interface ICartMobileProps {}

const CartMobile: FC<ICartMobileProps> = () => {
  const { isCartOpen } = useContext(CartContext)

  return (
    <div
      className={`${
        isCartOpen ? `left-0` : `left-[-100%]`
      }  fixed overflow-auto z-50 top-0 w-full h-full bg-white transition-all duration-300 shadow-2xl md:hidden`}
    >
      <Cart />
    </div>
  )
}

export default CartMobile
