import { Pizza } from './Pizza'

export class PizzaController {
  constructor () {
    this.pizza = {
      name: ''
    }
    this.pizza2 = new Pizza('')
    this.toppings =[
        'tomato_sauce',
        'mozzarella',
        'mushrooms',
        'ham',
        'eggs',
        'artichoke',
        'green_olives',
        'onion',
        'sweet_corn',
        'green_peppers',
        'black_olives',
        'peas',
        'salami'
        ]
  }
 savePizza () {
    console.log('save', this.pizza)
  }

}