'use client'
import { FC, useContext, useEffect, useState } from 'react'
//context
import { CartContext } from '@/context/cartContext'
//modal
import Modal from 'react-modal'
//icons
import { MdOutlineClose } from 'react-icons/md'
//image next
import Image from 'next/image'
// Make sure to bind modal to your appElement
Modal.setAppElement('body')
interface ICartBottomProps {}

const CartBottom: FC<ICartBottomProps> = () => {
  const { cartTotalPrice, setIsCartOpen, cart, setCart } =
    useContext(CartContext)
  const [isCheckout, setIsCheckout] = useState<boolean>(false)
  //modal state
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [count, setCount] = useState<number>(5)

  useEffect(() => {
    if (isCheckout) {
      const timer = setTimeout(function () {
        if (count > 1) {
          setCount(count - 1)
        }
      }, 1000)
      return function () {
        clearTimeout(timer)
      }
    }
  }, [count, isCheckout])

  useEffect(() => {
    if (isCheckout) {
      const timer = setTimeout(() => {
        setIsCheckout(false)
        setModalIsOpen(false)
        setCart([])
      }, 5000)

      return function () {
        clearTimeout(timer)
      }
    }
  }, [isCheckout, setCart, modalIsOpen])

  //modal open
  function openModal() {
    setModalIsOpen(true)
    setIsCartOpen(false)
  }
  //modal close
  function closeModal() {
    setModalIsOpen(false)
  }

  //modal style
  const modalBg = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
  }

  return (
    <div className="px-5 mt-5 font-extrabold">
      {/* btn & text &  total  */}
      <div>
        {/* text &  total */}
        <div className="flex justify-between">
          <p>Total:</p>
          <p>
            <span>${cartTotalPrice.toFixed(2)}</span>
          </p>
        </div>
        <button
          onClick={openModal}
          className="mt-5 w-full gradient btn btn-lg mb-5 xl:mb-0"
        >
          Checkout
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalBg}
        className={`fixed top-2/4 left-1/2 right-auto bottom-auto -mr-[50%] -translate-x-2/4 -translate-y-1/2 bg-white lg:w-[900px] lg:h-[600px] w-full h-full  lg:rounded-3xl p-2 lg:p-10 overflow-auto`}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="absolute top-2 right-2">
          <MdOutlineClose className="text-3xl text-orange transition-all duration-300 hover:scale-110" />
        </button>
        {isCheckout ? (
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center gap-y-10">
              <h1 className="text-2xl">
                Thank you! The order has been placed!
              </h1>
              <div className="flex items-center justify-center">
                <Image src={'/success-1.gif'} width={150} height={150} alt="" />
              </div>
              <div className="text-xl">
                The window will close in{' '}
                <span className="font-bold">{count}</span> seconds
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full pb-10">
            <h1 className="font-semibold mb-5">SHOPPING & CHECKOUT</h1>
            <div className="flex flex-col md:flex-row h-full gap-x-4">
              <form className="md:max-w-[61.5%] mb-4 md:mb-0  flex flex-col  gap-y-4 ">
                <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between gap-x-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input w-full"
                  />
                </div>
                <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between gap-x-4">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="input w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input w-full"
                  />
                </div>
                <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between gap-x-4">
                  <input
                    type="text"
                    placeholder="Street Name"
                    className="input w-full"
                  />
                  <input
                    type="text"
                    placeholder="Street No."
                    className="input w-full"
                  />
                </div>
                <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between gap-x-4">
                  <input
                    type="text"
                    placeholder="Block"
                    className="input w-full"
                  />
                  <input
                    type="text"
                    placeholder="Floor"
                    className="input w-full"
                  />
                  <input
                    type="text"
                    placeholder="Apt. No."
                    className="input w-full"
                  />
                </div>
                <textarea
                  placeholder="Mention (options)"
                  className="textarea w-full lg:h-full"
                ></textarea>
              </form>
              {/* check */}
              <div className="md:w-[38.5%] flex flex-col lg:justify-between">
                <div className=" hidden   md:flex flex-col">
                  <div className="flex h-full flex-col border rounded-md p-5 mb-5">
                    {/* title */}
                    <div className=" border-b">
                      <h1 className="mb-4 text-xl uppercase font-thin">
                        YOUR ORDER
                      </h1>
                    </div>
                    {/* items */}
                    <div className="flex-1">
                      <div className="h-[27vh] border-b  scrollbar-thin overflow-y-auto   scrollbar-thumb-[#C8C8C8] scrollbar-track-[#F1F1F1] cursor-pointer pr-2">
                        <div className="py-5">
                          {cart.map((item, index) => (
                            <div key={index} className="mb-2">
                              <div className="flex justify-between items-center">
                                <div className="font-semibold">
                                  {item.name} x <span> {item.amount} </span>{' '}
                                </div>
                                <div>
                                  ${(item.price * item.amount).toFixed(2)}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* total */}
                    <div className="flex pt-5 justify-between">
                      <span className="font-semibold">TOTAL:</span>
                      <span>${cartTotalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsCheckout(true)
                  }}
                  className="w-full  gradient btn btn-lg mb-5 xl:mb-0 font-semibold"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default CartBottom
