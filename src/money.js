export default class Money {
    equals(other) {
        return this.constructor === other.constructor
          && this.amount === other.amount
    }
}