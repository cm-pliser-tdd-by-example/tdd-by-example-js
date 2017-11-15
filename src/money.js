export default class Money {

    constructor(amount, currency){
        this._amount = amount
        this._currency = currency
    }

    equals(other) {
        return this._currency === other._currency
          && this._amount === other._amount
    }

    currency(){
        return this._currency
    }

    times(multiplier) { 
        return new Money(this._amount * multiplier, this._currency)
    }

    plus(addend) { 
        return new Money(this._amount + addend._amount, this._currency)
    }

    static dollar(amount) {
        return new Money(amount, "USD")
    }

    static franc(amount) {
        return new Money(amount, "CHF")
    }
}