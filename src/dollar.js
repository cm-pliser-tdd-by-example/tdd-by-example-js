export default class Dollar { 

    constructor(amount) { 
        this.amount = amount
    }

    times(multiplier) { 
        return new Dollar(this.amount * multiplier)
    }

    equals(other) {
        return this.amount === other.amount
    }

}