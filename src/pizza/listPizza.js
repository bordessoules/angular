import Dexie from 'dexie'
import { Pizza } from './pizza.js'

export class ListPizza {
  constructor () {
    this.db = new Dexie('pizzas')
    this.db.version(1).stores({
      pizzas: '++id, name'
    })
    this.db.open()
    this.pizzaAttenteCuisson = []
    this.fourActif = false
  }

  addPizza (pizza) {
    return this.db.pizzas.add(pizza)
  }

  deletePizza (pizzaId) {
    this.pizzas = this.db.pizzas.delete(pizzaId)
    return this
  }
  updatePizza (pizzaId, pizzaModification) {
    return this.db.pizzas.update(pizzaId, pizzaModification)
  }
  getPizzas () {
    return this.db.pizzas.toArray()
  }

  filtre (topping) {
    const newArray = new ListPizza()
    this.pizzas.forEach(function (item) {
      if (item.isToppingPresent(topping)) {
        newArray.addPizza(item)
      }
    })
    return newArray
  }

 
  cuissonFour () {}

  addLinePizza (pizza, idPizza, pizzaList) {}

  addHtml () {}

}