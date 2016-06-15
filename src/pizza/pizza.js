export class Pizza {
  constructor ({name, toppings, status,id}) {
    this.id = id
    this.name = name
    this.toppings = toppings
    this.status = status
  }

  toppings2string (pizza) {
    if (!this.toppings) return ''
    return this.toppings

      // uniqs
      .reduce((acc, topping) => {
        if (acc.indexOf(topping) === -1) acc.push(topping)
        return acc
      }, [])

      // topping (translated (nb))
      .map(topping => {
        const size = this.toppings.filter(item => item === topping).length
        if (size > 1) return `${topping} x${size}`
        return `${topping}`
      })
      .join(', ')
  }
}