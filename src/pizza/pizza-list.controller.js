import { Pizza } from './Pizza'

export class PizzaListController {
  constructor ($timeout) {
    this.$timeout = $timeout

    this.pizzas = [
      new Pizza({ name: 'un', status: 'not cooked', toppings: ['eggs', 'mushrooms'] }),
      new Pizza({ name: 'deux', status: 'not cooked', toppings: [] }),
      new Pizza({ name: 'trois', status: 'not cooked', toppings: ['eggs', 'eggs', 'mushrooms'] }),
      new Pizza({ name: 'quatre', status: 'not cooked' }),
      new Pizza({ name: 'cinq', status: 'not cooked' })
    ]
  }

  addPizza () {
    this.pizzas.push({
      name: 'new pizza'
    })
  }

  cookPizza (pizza) {
    return this.$timeout(() => {
      pizza.status = 1
    }, 3000)
  }

  cookPizzas () {
    const pizza = this.pizzas.find(p => p.status === 0)
    if (!pizza) return
    this.cookPizza(pizza)
      .then(this.cookPizzas.bind(this))
  }

}