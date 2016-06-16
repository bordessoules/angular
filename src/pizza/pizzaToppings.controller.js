export class PizzaToppingsComponentController {
    addTopping(topping) {
        this.onAddTopping({
            $event: { topping: topping }
        })
        // EVALUATION DE $ctrl.addTopping($event)
        // En remplaçant $event par { topping }
        // DONC Appel de $ctrl.addTopping({ topping: topping })
    }
    delTop(topping) {
        this.tops.splice(this.tops.indexOf(topping), 1)
    }
    dropped() {
        this.addTopping(this.draggedTopping)
    }
}