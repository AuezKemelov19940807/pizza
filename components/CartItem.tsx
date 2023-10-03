// <-- cartItems
import { FC, useContext } from 'react'
//next image
import Image from 'next/image'
//icons
import { MdOutlineClose } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { CartContext } from '@/context/cartContext'
interface ICartItemProps {
  item: IAddPizzaProps
  index: number
}

const CartItem: FC<ICartItemProps> = ({ item, index }) => {
  const { deleteCartItem, cartIncrese, cartDecrease } = useContext(CartContext)

  const handleDelete = () => {
    deleteCartItem(index)
  }

  const handleIncrese = () => {
    cartIncrese(index)
  }

  const handleDecrease = () => {
    cartDecrease(index)
  }

  return (
    <div className="relative mx-5  py-5 mb-5 border-b">
      <button onClick={handleDelete} className="absolute top-6 right-0">
        <MdOutlineClose className="text-2xl text-orange transition-all duration-300 hover:scale-110 font-thin" />
      </button>
      <div>
        {/* image & info */}
        <div className="grid grid-cols-[90px_minmax(0,_1fr)] gap-x-4">
          {/* image */}
          <div className="flex items-center justify-center">
            <Image src={item.image} width={90} height={90} alt="pizza image" />
          </div>
          {/* info */}
          <div className="w-full">
            {/* name */}
            <h4 className="capitalize font-semibold text-xl ">{item.name}</h4>
            {/* crust */}
            <p className="capitalize">
              <span>{item.crust} Crust</span>
            </p>
            {/* size */}
            <p className="capitalize mb-2">
              <span> {item.size} Size </span>
            </p>
            {/* amount & price */}
            <div className="flex items-center justify-between w-full">
              {/* amount */}
              <div className="flex gap-x-4 items-center mb-3">
                {/* plus */}
                <button
                  onClick={handleDecrease}
                  className="gradient w-5 h-5 rounded-full flex items-center justify-center"
                >
                  <AiOutlineMinus className=" text-white" />
                </button>
                {/* count */}
                <span className="font-semibold select-none">
                  {' '}
                  {item.amount}{' '}
                </span>
                {/* minus */}
                <button
                  onClick={handleIncrese}
                  className="gradient w-5 h-5 rounded-full flex items-center justify-center"
                >
                  <AiOutlinePlus className=" text-white" />
                </button>
              </div>
              {/* price */}
              <div className="font-medium select-none ">
                ${(item.price * item.amount).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        {/* toppings */}
        <div className=" flex">
          <div className="mr-2 font-semibold select-none">Toppings: </div>
          {item.additionalTopping.length <= 0 ? (
            <span className="select-none"> None </span>
          ) : (
            <div className="flex flex-wrap gap-2">
              {item.additionalTopping.map((topping, index) => {
                return (
                  <div
                    className="gradient flex items-center justify-center px-4 p-1 text-white rounded-full cursor-pointer"
                    key={index}
                  >
                    <span className="text-sm capitalize ">{topping.name}</span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartItem
