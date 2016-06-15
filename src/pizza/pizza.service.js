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
export class PizzaService {
    constructor($timeout, $http) {
        this.$timeout = $timeout
        this.$http = $http
    }

    getPizzas() {
        return this.$http({ // ou en utilisant un helper http : this.$http.get('http://localhost:1337/pizzas')
            url: 'http://localhost:1337/pizzas',
            method: 'GET'
        }).then(response => {
            return response.data
        })
            .then(pizzas => pizzas.map(pizzaJson => new Pizza(pizzaJson))) // on converti les objet recuperer par http en pizza
    }
    addPizza(pizza) {
        return this.$http.post('http://localhost:1337/pizzas', {
            name: pizza.name,
            toppings: pizza.toppings,
            status: pizza.status
        }).then(response => {
            return this.getPizzas()
        })
        /* return this.$timeout(1000)
             .then(() => {
                 pizzas.push(pizza)
                 return pizzas
             })*/
    }
    putPizza(pizza) {
        console.log('pizza id : ',pizza)
        return this.$http.put('http://localhost:1337/pizzas/'+pizza.id, {
            id: pizza.id,
            name: pizza.name,
            toppings: pizza.toppings,
            status: pizza.status
        }).then(response => {
            return this.getPizzas()
        })
    }
     deletePizza(pizza) {
        return this.$http.delete('http://localhost:1337/pizzas/'+pizza.id, {
            id: pizza.id,
            name: pizza.name,
            toppings: pizza.toppings,
            status: pizza.status
        }).then(response => {
            return this.getPizzas()
        })
    }
}
PizzaService.$inject = ['$timeout', '$http'] // on inject le timeout et le http
//*/