import angular from 'angular'
import { PizzaController } from './pizza.controller'

export default

  angular.module('dtang.pizza', [])
    .controller('PizzaController', PizzaController)
    .name