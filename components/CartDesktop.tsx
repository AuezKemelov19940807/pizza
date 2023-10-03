'use client'
import { FC, useContext } from 'react'
import { Cart } from '.'
import { CartContext } from '@/context/cartContext'

interface ICartDesktopProps {}

const CartDesktop: FC<ICartDesktopProps> = () => {
  const { isCartOpen } = useContext(CartContext)
  return (
    <div
      className={`${
        isCartOpen ? `left-0` : '-left-[200%]'
      }  fixed  hidden md:block overflow-auto z-50 top-0 w-[500px] h-full bg-white transition-all duration-300 shadow-2xl`}
    >
      <Cart />
    </div>
  )
}

export default CartDesktop
