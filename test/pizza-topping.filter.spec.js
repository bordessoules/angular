import { Pizza } from '../src/pizza/pizza'

describe('Test du filtre Topping', function () {
    var toppingFilter

    beforeEach(angular.mock.module('dtang'));

    beforeEach(angular.mock.inject(function ($filter) {
        toppingFilter = $filter('pizzaToppings')
    }))

    it('should show toppings string', function () {
        let pizza = new Pizza({
            name: 'test',
            toppings: [
                'un',
                'deux',
                'trois'
            ]
        })
        expect(toppingFilter(pizza)).toEqual("un, deux, trois")
    })

})