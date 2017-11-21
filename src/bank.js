import Money from './money'

export default class Bank {

    reduce(source, to) { 
        const amount = source.augend.amount() + source.addend.amount()
        return new Money(amount, to)
    }

}