'use client'
import { useEffect, useState, useCallback, useContext } from 'react'
//type pizza

//image next
import Image from 'next/image'
//modal
import Modal from 'react-modal'
//icons
import { MdOutlineClose } from 'react-icons/md'

//components
import { PizzaDough, PizzaSize, PizzaToppings } from '.'
import { CartContext } from '@/context/cartContext'
//modal style
const modalBg = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
}

// Make sure to bind modal to your appElement
Modal.setAppElement('body')

interface IPizzaItem {
  pizza: IPizzasDataProps
}

const PizzaItem: React.FC<IPizzaItem> = ({ pizza }) => {
  //modal state
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  //size state
  const [size, setSize] = useState<string>('small')
  const [dough, setDough] = useState<string>('traditional')
  const [pricePizza, setPricePizza] = useState<number>(0)
  const [addTopping, setAddTopping] = useState<IToppingDataProps[]>([])
  const [addToppingPrice, setAddToppingPrice] = useState<number>(0)
  //context
  const { addCartItem } = useContext(CartContext)

  const calc = useCallback(
    (price: number) => Number((addToppingPrice + price).toFixed(2)),
    [addToppingPrice]
  )

  //modal close

  //body style
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [modalIsOpen])

  //size
  useEffect(() => {
    size === 'small'
      ? setPricePizza(calc(pizza.priceSm))
      : size === 'medium'
      ? setPricePizza(calc(pizza.priceMd))
      : size === 'large'
      ? setPricePizza(calc(pizza.priceLg))
      : null
  }, [size, pizza.priceSm, pizza.priceMd, pizza.priceLg, addToppingPrice, calc])

  //topping array
  useEffect(() => {
    if (addTopping.length > 0) {
      const toppingPrice = addTopping.reduce((a, c) => a + c.price, 0)
      setAddToppingPrice(toppingPrice)
    } else {
      setAddToppingPrice(0)
    }
  }, [addTopping])

  //modal open
  function openModal() {
    setModalIsOpen(true)
  }
  //modal close
  function closeModal() {
    setModalIsOpen(false)
  }

  //size sm
  const SizeNumber =
    size === 'small'
      ? 25
      : size === 'medium'
      ? 30
      : size === 'large'
      ? 35
      : null

  //add cart item pizza
  const handleAddCartItem = () => {
    addCartItem({
      id: pizza.id,
      image: pizza.image,
      name: pizza.name,
      crust: dough,
      size,
      price: pricePizza,
      additionalTopping: addTopping,
      amount: 1,
    })
    setModalIsOpen(false)
  }

  return (
    <div className="flex flex-col items-center md:items-stretch h-full">
      {/* image */}
      <div className="mb-8 cursor-pointer " onClick={openModal}>
        <Image
          src={pizza.image}
          width={270}
          height={270}
          alt="pizza"
          priority
        />
      </div>
      {/* title */}
      <h2
        className="font-semibold capitalize text-xl mb-4 cursor-pointer"
        onClick={openModal}
      >
        {pizza.name}
      </h2>
      {/* description */}
      <p className="flex-1">{pizza.description}</p>
      {/* bottom */}
      <div className="flex items-center  mt-8 w-full">
        {/* left */}
        <p className="font-semibold text-lg flex-1">
          starts at <span> ${pizza.priceSm} </span>
        </p>
        {/* right btn */}
        <button onClick={openModal} className="btn btn-sm gradient">
          Choose
        </button>
      </div>
      {/* Modal */}
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
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-10">
          {/* image */}
          <div className="lg:basis-2/4 hidden md:flex">
            <Image
              src={pizza.image}
              width={450}
              height={450}
              alt=""
              objectFit="cover"
            />
          </div>

          {/* info */}
          <div className="w-full lg:basis-2/4 ">
            <div className="lg:h-[55vh] xl:h-[45vh] lg:overflow-y-scroll  lg:scrollbar-thin lg:scrollbar-thumb-[#f97316] lg:scrollbar-track-[#ffedd5] cursor-pointer">
              <h2 className="text-4xl font-semibold capitalize mb-2 mt-10 xl:mt-0">
                {pizza.name}
              </h2>
              <p className="text-2xl font-medium mb-6">
                <span>{SizeNumber}</span> sm <span>{dough}</span> crust
              </p>
              <PizzaSize image={pizza.image} size={size} setSize={setSize} />
              <PizzaDough dough={dough} setDough={setDough} />
              <PizzaToppings
                toppings={pizza.toppings}
                setAddToppingPrice={setAddToppingPrice}
                setAddTopping={setAddTopping}
                addTopping={addTopping}
              />
            </div>
            <button
              onClick={handleAddCartItem}
              className="mt-5 w-full gradient btn btn-lg mb-5 xl:mb-0"
            >
              Add to car for
              <span> ${pricePizza.toFixed(2)}</span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default PizzaItem
