//<-- cart desktop, cart modile
import { CartContext } from '@/context/cartContext'
import { FC, useContext } from 'react'

//icons
import { MdOutlineClose } from 'react-icons/md'
import { FaBagShopping } from 'react-icons/fa6'
interface ICartTopProps {}

const CartTop: FC<ICartTopProps> = () => {
  const { setIsCartOpen, cartTotalItems } = useContext(CartContext)
  //close cart
  const handleCloseCart = () => {
    setIsCartOpen(false)
  }

  return (
    <div className="border-b">
      <div className="px-10 py-6">
        <div className="flex items-center gap-x-2 font-semibold">
          <span>
            <FaBagShopping className="text-orange" />
          </span>
          <p>
            Shopping bag (<span className="font-bold">{cartTotalItems}</span>)
          </p>
        </div>
        <button onClick={handleCloseCart} className="absolute top-5 right-3">
          <MdOutlineClose className="text-3xl text-orange transition-all duration-300 hover:scale-110" />
        </button>
      </div>
    </div>
  )
}

export default CartTop
