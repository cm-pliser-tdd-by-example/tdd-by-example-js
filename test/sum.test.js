'use strict'
import Sum from '../src/sum'
import assert from 'power-assert'

test('adds 1 + 2 to equal 3', () => {
  assert(new Sum().sum(1, 2) === 3)
});