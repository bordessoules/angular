import {PizzaToppingsComponentController} from './pizzaToppings.controller.js'
export const PizzaToppingsComponent={
    bindings: {
        tops: '<toppings',
        dipos : '<',
        onAddTopping: '&'

    },
    controller: PizzaToppingsComponentController,
    template : `<div>
                <div class="col-xs-6" my-drop="$ctrl.dropped()">
                    <h4>toppings</h4>
                    <ul class="list-group">
                        <li class="list-group-item"
                         ng-repeat="top in $ctrl.tops track by $index"><a ng-click="$ctrl.delTop(top)">{{top}}</a></li>
                    </ul>
                </div>
                <div class="col-xs-6">
                    <h4>toppings dipos</h4>
                    <ul class="list-group">
                        <li class="list-group-item" 
                            draggable = true
                            my-drag="$ctrl.draggedTopping = key"
                            ng-repeat="(key,value) in $ctrl.dipos" >
                                <a href ng-click="$ctrl.addTopping(key)">{{key}}</a>
                        </li>
                    </ul>
                </div>
                </div>
                `
}
