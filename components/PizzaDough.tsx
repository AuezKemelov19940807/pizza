// <-- PizzaItem
import { FC } from 'react'
// type
interface IPizzaDoughProps {
  dough: string
  setDough: (dough: string) => void
}

const PizzaDough: FC<IPizzaDoughProps> = ({ dough, setDough }) => {
  // state

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDough(e.target.value)
  }
  return (
    <div className="flex items-center gap-x-10 mb-8">
      {/* traditional */}
      <div className="flex items-center gap-x-2">
        <input
          type="radio"
          value="traditional"
          name="doughPizza"
          className="checkbox appearance-none w-4 h-4  checked:gradient rounded-full border border-gray-400 checked:border-none cursor-pointer"
          checked={dough === 'traditional'}
          onChange={onChange}
        />
        <span>Traditional</span>
      </div>
      {/* thin */}
      <div className="flex items-center gap-x-2">
        <input
          type="radio"
          value="thin"
          name="doughPizza"
          className="checkbox appearance-none w-4 h-4 rounded-full border border-gray-400  checked:gradient checked:border-none cursor-pointer"
          checked={dough === 'thin'}
          onChange={onChange}
        />
        <span>Thin</span>
      </div>
    </div>
  )
}

export default PizzaDough
