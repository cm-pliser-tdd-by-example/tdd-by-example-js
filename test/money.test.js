//TODO
// - [ ] $5 + 10 CHF = $10(レートが2:1の場合)
// - [x] $5 * 2 = $10
// - [ ] amountをprivate にする
// - [x] DOllarの副作用どうする?
// - [ ] Moneyの丸め処理どうする?
// - [ ] equals()

'use strict'
import Dollar from '../src/dollar'
import assert from 'power-assert'

test('$5 * 2 = $10', () => {
    let five = new Dollar(5)
    let product = five.times(2)
    assert(10 === product.amount)
    product = five.times(3)
    assert(15 === product.amount)
  });