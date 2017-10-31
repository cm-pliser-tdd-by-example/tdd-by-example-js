//TODO
// - [ ] $5 + 10 CHF = $10(レートが2:1の場合)
// - [x] $5 * 2 = $10
// - [ ] amountをprivate にする
// - [ ] DOllarの副作用どうする?
// - [ ] Moneyの丸め処理どうする?

'use strict'
import Dollar from '../src/dollar'
import assert from 'power-assert'

test('$5 * 2 = $10', () => {
    let five = new Dollar(5)
    five.times(2)
    assert(10 === five.amount)
  });