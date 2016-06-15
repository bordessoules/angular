import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
import { PizzaController } from './pizza.controller'
import {PizzaService} from './pizza.service.js'
export default

  angular.module('dtang.pizza', [])
    .controller('PizzaListController', PizzaListController)
    .controller('PizzaController', PizzaController)

    .filter('pizzaToppings', pizzaToppingsFilter)

    .service('PizzaService', PizzaService) // si PizzaService est une classe cf pizza.service
    //    .factory("PizzaService", PizzaService)  // si PizzaService est une fonction cf pizza.service
    .name