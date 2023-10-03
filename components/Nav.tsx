// <-- Banner
//next image
import Image from 'next/image'
//next link
import Link from 'next/link'
//icons
import { GiRotaryPhone } from 'react-icons/gi'
import { FaBagShopping } from 'react-icons/fa6'
import { useContext } from 'react'
import { CartContext } from '@/context/cartContext'
interface INavProps {}

const Nav: React.FC<INavProps> = () => {
  const { cartTotalItems, setIsCartOpen, isCartOpen } = useContext(CartContext)

  const handleClickCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <nav className="flex flex-col mb-5 xl:mb-20  gap-y-4 lg:gap-y-0 md:flex-row items-center gap-x-8">
      {/* icon */}
      <Link href={'/'} className="flex-1">
        <Image src={'/logo.svg'} width={144} height={31} alt="" />
      </Link>
      {/* number & cart */}
      <div className="flex gap-x-6 items-center">
        {/* number */}
        <div className="flex items-center text-white">
          <a href="tel:+77783590579">
            <GiRotaryPhone className="w-[40px] h-[40px] text-[#FFA323]" />
          </a>
          <div className="flex flex-col ml-2">
            <p className="text-[13px] font-semibold">24/7 DELIVERY SERVICE</p>
            <a
              href="tel:+77783590579"
              className="text-2xl lg:text-3xl font-extrabold"
            >
              +77783590579
            </a>
          </div>
        </div>
        {/* cart */}
        <div
          className="relative cursor-pointer hidden lg:flex "
          onClick={handleClickCartOpen}
        >
          <FaBagShopping className="text-[#FFA323] w-[32px] h-[32px]" />
          <span className="absolute -bottom-3 -right-2 w-6 h-6 bg-black rounded-full text-white flex items-center justify-center text-[11px]">
            {cartTotalItems}
          </span>
        </div>
      </div>
    </nav>
  )
}
export default Nav
