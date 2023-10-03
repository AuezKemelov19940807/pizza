'use client'
// <-- PizzaItem
import { FC, SetStateAction, Dispatch } from 'react'
//type

//components
import { Topping } from '.'

interface IPizzaToppingsProps {
  toppings: IToppingDataProps[]
  setAddToppingPrice: (price: number) => void
  setAddTopping: Dispatch<SetStateAction<IToppingDataProps[]>>
  addTopping: IToppingDataProps[]
}

const PizzaToppings: FC<IPizzaToppingsProps> = ({
  toppings,
  setAddToppingPrice,
  setAddTopping,
  addTopping,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Choose topping</h2>
      <ul className="flex flex-wrap gap-2">
        {/* toppings */}
        {toppings.map((topping, index) => (
          <Topping
            key={index}
            topping={topping}
            setAddToppingPrice={setAddToppingPrice}
            setAddTopping={setAddTopping}
            addTopping={addTopping}
          />
        ))}
      </ul>
    </div>
  )
}

export default PizzaToppings
