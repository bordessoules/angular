import { Pizza } from './Pizza'

export class PizzaListController {
  constructor ($timeout, PizzaService) {
    
    this.$timeout = $timeout
    this.PizzaService = PizzaService
    //console.log('PizzaService', PizzaService.getPizzas())
    PizzaService.getPizzas()
      .then(pizzas => {
        this.pizzas = this.initPizzas(pizzas)
      })

  }
  initPizzas(pizzas) {
    return pizzas
      .map(pizza => {
        pizza._toppings = pizza.toppings2string()
        pizza._toppingsLength = (pizza.toppings || []).length
        return pizza
      })
  }
  addPizza(pizzaName = 'new pizza') {
    console.log(this.PizzaService)
    let pizza = new Pizza({
      name: pizzaName,
      toppings: ['eggs']
    })

    this.PizzaService.addPizza(pizza).then((pizzas) => {
      this.pizzas = this.initPizzas(pizzas)

    })
      .catch(err => {
        window.alert('Pb lors de l\'ajout de la pizza')
      })
    //   name: pizzaName
    // })
  }

  cookPizza(pizza) {
    return this.$timeout(() => {
      pizza.status = 1
    }, 3000)
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
PizzaListController.$inject = ['$timeout', 'PizzaService']