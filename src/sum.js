'use strict'

import Money from './money'

export default class Sum { 

  constructor(augend, addend) { 
    this.augend = augend
    this.addend = addend
  }

  plus(addend) { 
    return new Sum(this, addend)
  }

  times(multiplier) { 
    return new Sum(this.augend.times(multiplier), this.addend.multiplier(multiplier))
  }

  reduce(bank, to) { 
    const amount = this.augend.reduce(bank, to).amount() + this.addend.reduce(bank, to).amount()
    return new Money(amount, to)
  }

}
