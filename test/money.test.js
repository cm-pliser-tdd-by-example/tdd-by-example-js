//TODO
// - [ ] $5 + 10 CHF = $10(レートが2:1の場合)
// - [x] $5 * 2 = $10
// - [x] amountをprivate にする
// - [x] DOllarの副作用どうする?
// - [ ] Moneyの丸め処理どうする?
// - [x] equals()
// - [ ] hashCode()
// - [ ] nullとの等価性比較
// - [ ] 他のオブジェクトとの等価性比較
// - [x] 5CHF * 2 = 10 CHF
// - [ ] DollarをFrancの重複
// - [x] equalsの一般化
// - [ ] timesの一般化
// - [ ] FrancとDollarの比較

'use strict'
import Dollar from '../src/dollar'
import Franc from '../src/franc'
import assert from 'power-assert'

test('$5 * 2 = $10', () => {
    const five = new Dollar(5)
    assert(new Dollar(10).equals(five.times(2)))
    assert(new Dollar(15).equals(five.times(3)))
});

test('5 CHF * 2 = 10 CHF', () => {
    const five = new Franc(5)
    assert(new Franc(10).equals(five.times(2)))
    assert(new Franc(15).equals(five.times(3)))
});



test('equals()', () => {
  assert(new Dollar(5).equals(new Dollar(5)))
  assert(false == new Dollar(5).equals(new Dollar(6)))
  assert(new Franc(5).equals(new Franc(5)))
  assert(false == new Franc(5).equals(new Franc(6)))
  assert(false == new Franc(5).equals(new Dollar(5)))
});