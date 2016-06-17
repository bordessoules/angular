import angular from 'angular'
import ngRoute from 'angular-route'
import PizzaModule from './pizza'
import dragndrop from './dragndrop/dragdrop.js'
console.log(PizzaModule)

angular.module('dtang', [
  PizzaModule,
  ngRoute,
  dragndrop
])


  .config(function ($routeProvider) {

    $routeProvider

      .when('/', {
        templateUrl: 'pizza-list.html',
        controller: 'PizzaListController',
        controllerAs: '$ctrl'
      })

      .when('/about', {
        template: '<h1>ABOUT</h1>',
        controllerAs: 'ctrl',
        controller: function () {
          this.title = 'DTA'
        }
      })

      .when('/pizza/:id', {
        templateUrl: 'pizza-form.html',
        controller: 'PizzaController',
        controllerAs: '$ctrl'
      })

      .otherwise('/')

  })

angular.bootstrap(document, ['dtang'])