'use strict'

import Money from './money'

export default class Sum { 

  constructor(augend, addend) { 
    this.augend = augend
    this.addend = addend
  }

  reduce(to) { 
    const amount = this.augend.amount() + this.addend.amount()
    return new Money(amount, to)
  }

}
