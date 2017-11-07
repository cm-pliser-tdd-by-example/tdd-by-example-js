export default class Money {

    constructor(amount, currency){
        this._amount = amount
        this._currency = currency
    }

    equals(other) {
        return this.constructor === other.constructor
          && this._amount === other._amount
    }

    currency(){
        return this._currency
    }

    static dollar(amount) {
        return new Dollar(amount, "USD")
    }

    static franc(amount) {
        return new Franc(amount, "CHF")
    }
}

class Franc extends Money { 
    
    constructor(amount, currency) { 
        super(amount, currency)
    }
    
    times(multiplier) { 
        return new Franc(this._amount * multiplier, "CHF")
    }
    
}

class Dollar extends Money { 
    
    constructor(amount, currency) { 
        super(amount, currency)
    }
    
    times(multiplier) { 
        return new Dollar(this._amount * multiplier, "USD")
    }
    
}