//TODO
// - [ ] $5 + 10 CHF = $10(レートが2:1の場合)
// - [ ] hashCode()
// - [ ] Moneyの丸め処理どうする?
// - [ ] nullとの等価性比較
// - [ ] 他のオブジェクトとの等価性比較

'use strict'
import Money from '../src/money'
import Bank from '../src/bank'
import Sum from '../src/sum'
import assert from 'power-assert'

test('$5 * 2 = $10', () => {
    const five = Money.dollar(5)
    assert(Money.dollar(10).equals(five.times(2)))
    assert(Money.dollar(15).equals(five.times(3)))
});

test('equals()', () => {
  assert(Money.dollar(5).equals(Money.dollar(5)))
  assert(false == Money.dollar(5).equals(Money.dollar(6)))
  assert(false == Money.franc(5).equals(Money.dollar(5)))
});

test('通貨の概念', () => {
  assert("USD" === Money.dollar(1).currency())
  assert("CHF" === Money.franc(1).currency())
})

test('簡単な足し算 $5+$5=$10', () => { 
  const five = Money.dollar(5)
  const sum = five.plus(five)
  const bank = new Bank()
  const reduced = bank.reduce(sum, "USD")
  assert(Money.dollar(10).equals(reduced))
})

test('#plusがSumを返す', () => { 
  const five = Money.dollar(5)
  const result = five.plus(five)
  assert(five.equals(result.augend))
  assert(five.equals(result.addend))
})

test('Sum#reduce', () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4))
  const bank = new Bank()
  const result = bank.reduce(sum, "USD")
  assert(Money.dollar(7).equals(result))
})