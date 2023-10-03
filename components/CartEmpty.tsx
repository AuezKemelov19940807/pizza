import { FC, useContext } from 'react'
//image next
import Image from 'next/image'
//icons
import { BsEmojiSmile } from 'react-icons/bs'
import { BiSolidShoppingBag } from 'react-icons/bi'
import { CartContext } from '@/context/cartContext'
interface ICartEmpty {}

const CartEmpty: FC<ICartEmpty> = () => {
  const { setIsCartOpen } = useContext(CartContext)

  const handleNavWithScreen = (element_id: string) => {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
    setIsCartOpen(false)
  }

  return (
    <div className="mt-20 z-50">
      <div>
        {/* image */}
        <div className="flex items-center justify-center">
          <Image src={'/empty.png'} width={450} height={450} alt="" />
        </div>
        {/* text */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Your cart is <span className="text-orange">empty!</span>
          </h1>
          <p className="text-xl font-bold mb-4 flex flex-col md:flex-row items-center justify-center gap-2">
            Add something to make me happy
            <span>
              <BsEmojiSmile className="text-orange text-2xl " />
            </span>
          </p>
        </div>
        {/* btn */}
        <div className="flex justify-center">
          <button
            onClick={() => handleNavWithScreen('items')}
            className="mt-5 gradient btn btn-lg mb-5 xl:mb-0 font-semibold flex items-center gap-x-1 text-xl"
          >
            <span>
              {' '}
              <BiSolidShoppingBag />{' '}
            </span>{' '}
            Return to shop
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartEmpty
