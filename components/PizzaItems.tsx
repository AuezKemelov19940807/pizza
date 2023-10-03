import { pizzasData } from '@/data/pizza'
import { PizzaItem } from '.'
interface IPizzaProps {}

const PizzaItems: React.FC<IPizzaProps> = () => {
  return (
    <section
      id="items"
      className="grid sm:grid-cols-1 gap-y-8 sm:gap-x-4 xl:gap-x-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-12"
    >
      {pizzasData.map((pizza, index) => (
        <PizzaItem key={index} pizza={pizza} />
      ))}
    </section>
  )
}

export default PizzaItems
