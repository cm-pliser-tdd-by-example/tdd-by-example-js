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
// - [x] FrancとDollarの比較
// - [ ] 通貨の概念

'use strict'
import Money from '../src/money'
import assert from 'power-assert'

test('$5 * 2 = $10', () => {
    const five = Money.dollar(5)
    assert(Money.dollar(10).equals(five.times(2)))
    assert(Money.dollar(15).equals(five.times(3)))
});

test('5 CHF * 2 = 10 CHF', () => {
    const five = Money.franc(5)
    assert(Money.franc(10).equals(five.times(2)))
    assert(Money.franc(15).equals(five.times(3)))
});



test('equals()', () => {
  assert(Money.dollar(5).equals(Money.dollar(5)))
  assert(false == Money.dollar(5).equals(Money.dollar(6)))
  assert(Money.franc(5).equals(Money.franc(5)))
  assert(false == Money.franc(5).equals(Money.franc(6)))
  assert(false == Money.franc(5).equals(Money.dollar(5)))
});