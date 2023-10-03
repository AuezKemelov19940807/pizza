//type pizza
interface IPizzasDataProps {
  id: number
  name: string
  description: string
  image: string
  priceSm: number
  priceMd: number
  priceLg: number
  toppings: IToppingDataProps[]
}

//type addCart
 interface IAddPizzaProps {
  name: string
  crust: string
  size: string
  image: string
  id: number
  price: number
  additionalTopping: IToppingDataProps[]
  amount: number
}

//type toppings
interface IToppingDataProps {
  image: string
  name: string
  price: number
}
