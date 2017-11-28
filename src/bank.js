import Money from './money'
import pair from './pair'

export default class Bank {

    constructor() { 
        this._rates = new Map()
    }

    reduce(source, to) { 
        return source.reduce(this, to)
    }

    addRate(from, to, rate) { 
        this._rates.set(pair(from, to), rate)
    }

    rate(from, to) { 
        if(from === to) return 1
        return this._rates.get(pair(from, to))
    }

}