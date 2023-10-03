'use client'
//<--PizzaToppings

//image next
import Image from 'next/image'
//icons
import { MdDone } from 'react-icons/md'
import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react'

interface IToppingProps {
  topping: IToppingDataProps
  setAddToppingPrice: (price: number) => void
  setAddTopping: Dispatch<SetStateAction<IToppingDataProps[]>>
  addTopping: IToppingDataProps[]
}

const Topping: FC<IToppingProps> = ({ topping, setAddTopping, addTopping }) => {
  // checked state
  const [isChecked, setIsChecked] = useState<boolean>(false)
  //change checked
  const handleChange = () => setIsChecked(!isChecked)

  const handleTopping = () => {
    if (isChecked) {
      const newTopping = new Set([...addTopping, { ...topping }])
      setAddTopping(Array.from(newTopping))
    } else {
      const newTopping = addTopping.filter(
        (toppingObj) => toppingObj.name !== topping.name
      )
      setAddTopping(newTopping)
    }
  }

  useEffect(() => {
    handleTopping()
  }, [isChecked])

  return (
    <div className="relative">
      <input
        type="checkbox"
        id={topping.name}
        checked={isChecked}
        name={topping.name}
        onChange={handleChange}
        className="hidden peer"
      />
      <label
        htmlFor={topping.name}
        className={`${
          isChecked && `border-[#ea580c]`
        }  border rounded-lg min-w-[80px] max-w-[100px] h-[140px] flex flex-col  items-center  cursor-pointer  cursor-pointer h-full w-full p-2`}
        onClick={handleTopping}
      >
        <div className="mb-2 select-none">
          <Image src={topping.image} width={70} height={70} alt="" />
        </div>
        <h3 className="text-center capitalize select-none ">{topping.name}</h3>
      </label>
      <div className={`absolute  top-1 right-1`}>
        {isChecked && <MdDone className="text-[#ea580c] text-xl" />}
      </div>
    </div>
  )
}

export default Topping
