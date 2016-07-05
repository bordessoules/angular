import { Pizza } from './Pizza'

export class PizzaListController {
  constructor($timeout, PizzaService,$location) {
    this.$location = $location
    this.$timeout = $timeout
    this.PizzaService = PizzaService
    this.getPizzas()
    // tri par défaut
    this.predicate = 'name'


  }
  getPizzas() {
    return this.PizzaService.getPizzas()
      .then(pizzas => {
        this.pizzas = this.initPizzas(pizzas)
      })
  }
  initPizzas(pizzas) {
    return pizzas
      .map(pizza => {
        pizza._id = pizza.id
        pizza._toppings = pizza.toppings2string()
        pizza._toppingsLength = (pizza.toppings || []).length
        return pizza
      })
  }
  addPizza(pizzaName = 'new pizza') {
    let pizza = new Pizza({
      name: pizzaName,
      toppings: []
    })

    this.PizzaService.addPizza(pizza).then((pizzas) => {
      this.pizzas = this.initPizzas(pizzas)

    })
      .catch(err => {
        window.alert('Pb lors de l\'ajout de la pizza')
      })
  }
  newPizza(pizzaName = 'new pizza') {
    let pizza = new Pizza({
      name: pizzaName,
      toppings: []
    })
    
    this.PizzaService.newPizza(pizza).then((pizza) => {
        console.log(pizza.id)
        this.$location.path('/pizzas'+pizza.id)
    })
      .catch(err => {
        window.alert('Pb lors de l\'ajout de la pizza')
      })
  }
  delPizza(pizza) {
    console.log(pizza)

    return this.PizzaService.deletePizza(pizza).then((pizzas) => {
      this.pizzas = this.initPizzas(pizzas)

    }).catch(err => {
      window.alert('Pb lors de la supression la pizza')
    })
  }

  cookPizza(pizza) {    
      pizza.status = 1
      return this.PizzaService.putPizza(pizza).then((pizzas) => {
      this.pizzas = this.initPizzas(pizzas)

    }).catch(err => {
        window.alert('Pb lors de la cuissonde la pizza')
      })
  }

  cookPizzas() {
    const pizza = this.pizzas.find(p => p.status === 0)
    if (!pizza) return
    this.cookPizza(pizza)
      .then(this.cookPizzas.bind(this))
  }

  keep() {
    return function (pizza) {
      if (!this.query) return true
      return pizza.name.indexOf(this.query) !== -1
        || (pizza.toppings || []).join('').indexOf(this.query) !== -1
    }.bind(this)
  }
  /*
  sortPizzas () {
    return function (pizza) {
      if (this.predicate === 'name' || this.predicate === 'status') {
        return pizza[this.predicate]
      }
      if (this.predicate === 'toppings') {
        return (pizza.toppings || []).length
      }
      return 1
    }.bind(this)
  }*/

}
PizzaListController.$inject = ['$timeout', 'PizzaService','$location']