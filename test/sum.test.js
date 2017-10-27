import Sum from '../src/sum'

test('adds 1 + 2 to equal 3', () => {
  expect(new Sum().sum(1, 2)).toBe(3)
});