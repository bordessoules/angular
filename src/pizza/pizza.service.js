import {Pizza} from './Pizza.js'
/* VERSION FUNCTION
export function PizzaService($timeout) {
    var pizzas = [
        new Pizza({ name: 'un', status: 0, toppings: ['eggs', 'mushrooms'] }),
        new Pizza({ name: 'deux', status: 'not cooked', toppings: [] }),
        new Pizza({ name: 'trois', status: 'not cooked', toppings: ['eggs', 'eggs', 'mushrooms'] }),
        new Pizza({ name: 'quatre', status: 0 }),
        new Pizza({ name: 'cinq', status: 'not cooked' })
    ]
    return {
        version: "1.0",

        getPizzas: function () {
            return $timeout(2000)
                .then(() => pizzas)
        },
        addPIzza(pizza){
            pizzas.push(pizza)
        }
    }
}
*/
// VERSION CLASSE
/*
var pizzas = [
    new Pizza({ name: 'un', status: 0, toppings: ['eggs', 'mushrooms'] }),
    new Pizza({ name: 'deux', status: 0, toppings: [] }),
    new Pizza({ name: 'trois', status: 1, toppings: ['eggs', 'eggs', 'mushrooms'] }),
    new Pizza({ name: 'quatre', status: 0 }),
    new Pizza({ name: 'cinq', status: 1 })
]
*/
const url = 'http://localhost:1337/pizzas'
const urlToppings = 'http://localhost:1337/toppings'

let toppings = null


export class PizzaService {
  constructor ($timeout, $http) {
    this.$timeout = $timeout
    this.$http = $http
    this.$q = $q
  }

  getPizzas () {
    return this.$http.get(url)
      .then(({data: pizzas}) => pizzas.map(pizzaJson => new Pizza(pizzaJson)))
  }

  getPizza (id) {
    return this.$http.get(url + '/' + id)
      .then(response => response.data)
  }

  savePizza (pizza) {
    return this.$http.put(url + '/' + pizza.id, pizza)
  }
  deletePizza (pizza) {
    return this.$http.delete(url + '/' + pizza.id).then(response => {
      return this.getPizzas()
    })
  }
 putPizza(pizza) {
        return this.$http.put('http://localhost:1337/pizzas/'+pizza.id, {
            id: pizza.id,
            name: pizza.name,
            toppings: pizza.toppings,
            status: pizza.status
        }).then(response => {
            return this.getPizzas()
        })
    }
  addPizza (pizza) {
    return this.$http.post(
      url,
      pizza // ou pizza.json() si besoin
    ).then(response => {
      return this.getPizzas()
    })
  }

  getToppings () {
    if (this.toppings) {
      return this.$q.resolve(this.toppings)
    } else {
      return this.$http.get(urlToppings)
        .then(response => {
          this.toppings = response.data
          return this.toppings
        })
    }
  }
}

PizzaService.$inject = ['$timeout', '$http', '$q']// on inject le timeout et le http
//*/