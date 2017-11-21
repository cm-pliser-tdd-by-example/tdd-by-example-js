import Sum from './sum'

export default class Money {

    constructor(amount, currency){
        this._amount = amount
        this._currency = currency
    }

    equals(other) {
        return this._currency === other._currency
          && this._amount === other._amount
    }

    amount() { 
        return this._amount
    }

    currency(){
        return this._currency
    }

    times(multiplier) { 
        return new Money(this._amount * multiplier, this._currency)
    }

    plus(addend) { 
        return new Sum(this, addend)
    }

    static dollar(amount) {
        return new Money(amount, "USD")
    }

    static franc(amount) {
        return new Money(amount, "CHF")
    }
}