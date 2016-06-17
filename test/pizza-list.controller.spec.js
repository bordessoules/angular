describe('Test du  PizzaListController', function () {
    var ctrl, http

    beforeEach(angular.mock.module('dtang'));

    beforeEach(angular.mock.inject(function ($rootScope, $controller, $httpBackend) {
        let scope = $rootScope.$new()
        ctrl = $controller('PizzaListController as ctrl', { $scope: scope })
        http = $httpBackend
    }))

    it('should initialise predicate to name', function () {
        expect(ctrl.predicate).toEqual('name')
    })
    it('should load pizzas', function (done) {
        http.when('GET', 'http://localhost:1337/pizzas').respond([
            {
                name: 'test',
                toppings: [
                    'un',
                    'deux',
                    'trois'
                ]
            }
        ])

        ctrl.getPizzas()
            .then(() => {
                expect(ctrl.pizzas.length).toEqual(1)
            })
            .finally(done)

        http.flush()
    })

})

