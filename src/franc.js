export default class Franc { 
    
        constructor(amount) { 
            this.amount = amount
        }
    
        times(multiplier) { 
            return new Franc(this.amount * multiplier)
        }
    
        equals(other) {
            return this.amount === other.amount
        }
    
    }