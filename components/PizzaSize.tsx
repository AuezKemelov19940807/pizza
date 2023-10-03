// <-- PizzaItem
//next image
import Image from 'next/image'
import { FC } from 'react'

interface IPizzaSizeProps {
  image: string
  size: string
  setSize: (size: string) => void
}

const PizzaSizeItems: FC<IPizzaSizeProps> = ({ image, size, setSize }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value)
  }

  return (
    <div className="flex items-end gap-x-8 mb-8">
      {/* small */}
      <div className="flex flex-col items-center">
        <input
          id="small"
          type="radio"
          value="small"
          name="pizzaSize"
          checked={size === 'small'}
          onChange={onChange}
          className="hidden peer"
        />
        <label
          htmlFor="small"
          className="rounded-full inline-flex items-center justify-center w-full h-full cursor-pointer peer-checked:border-amber-600 border-transparent border-2 p-[1px] grayscale peer-checked:grayscale-0"
        >
          <Image src={image} width={60} height={60} alt="" />
        </label>
        <span> Small</span>
      </div>
      {/* medium */}
      <div className="flex flex-col items-center">
        <input
          id="medium"
          type="radio"
          value="medium"
          checked={size === 'medium'}
          name="pizzaSize"
          className="hidden peer"
          onChange={onChange}
        />
        <label
          htmlFor="medium"
          className="rounded-full inline-flex items-center justify-center w-full h-full cursor-pointer peer-checked:border-amber-600 border-transparent border-2 p-[1px] grayscale peer-checked:grayscale-0"
        >
          <Image src={image} width={70} height={70} alt="" />
        </label>
        <span> Medium</span>
      </div>
      {/* large */}
      <div className="flex flex-col items-center">
        <input
          id="large"
          type="radio"
          value="large"
          name="pizzaSize"
          className="hidden peer"
          checked={size === 'large'}
          onChange={onChange}
        />
        <label
          htmlFor="large"
          className="rounded-full inline-flex items-center justify-center w-full h-full cursor-pointer peer-checked:border-amber-600 border-transparent border-2 p-[1px] grayscale peer-checked:grayscale-0"
        >
          <Image src={image} width={80} height={80} alt="" />
        </label>
        <span> Large</span>
      </div>
    </div>
  )
}

export default PizzaSizeItems
