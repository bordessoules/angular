import {Pizza, map} from './Pizza.js'
import {ListPizza} from './ListPizza.js'

export class PizzaListController {
    constructor() {
        this.pizzas = new ListPizza()
        this.pizzas.addPizza(new Pizza('reine'))
        this.pizzas.addPizza(new Pizza('marguarita'))
    }
    addPizzaClick(pizzaName){
        pizzas.addPizza(new Pizza(pizzaName))
    }

    getPizzas(){
        
    }
}