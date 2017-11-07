export default class Money {

    equals(other) {
        return this.constructor === other.constructor
          && this.amount === other.amount
    }

    static dollar(amount) {
        return new Dollar(amount)
    }

    static franc(amount) {
        return new Franc(amount)
    }
}

class Franc extends Money { 
    
    constructor(amount) { 
        super()
        this.amount = amount
    }
    
    times(multiplier) { 
        return new Franc(this.amount * multiplier)
    }
    
}

class Dollar extends Money { 
    
    constructor(amount) { 
        super()
        this.amount = amount
    }
    
    times(multiplier) { 
        return new Dollar(this.amount * multiplier)
    }
    
}