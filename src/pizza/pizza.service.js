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
const pizzas = [
    new Pizza({ name: 'un', status: 0, toppings: ['eggs', 'mushrooms'] }),
    new Pizza({ name: 'deux', status: 0, toppings: [] }),
    new Pizza({ name: 'trois', status: 1, toppings: ['eggs', 'eggs', 'mushrooms'] }),
    new Pizza({ name: 'quatre', status: 0 }),
    new Pizza({ name: 'cinq', status: 1 })
]

export class PizzaService {
    constructor($timeout, $http) {
        this.$timeout = $timeout
        this.$http = $http
    }

    getPizzas() {
        return this.$http({ // ou en utilisant un helper http : this.$http.get('http://192.168.99.2:1337/pizzas')
            url: 'http://192.168.99.2:1337/pizzas',
            method: 'GET'
        }).then(response => {
            return response.data
        })
            .then(pizzas => pizzas.map(pizzaJson => new Pizza(pizzaJson))) // on converti les objet recuperer par http en pizza
    }
    addPizza(pizza) {
        return this.$timeout(1000)
            .then(() => {
                pizzas.push(pizza)
                return pizzas
            })
    }
}

PizzaService.$inject = ['$timeout', '$http'] // on inject le timeout et le http
//*/