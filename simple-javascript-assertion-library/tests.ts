import { subtract, sum } from './math'
import { expect, test } from './assertion-library'

let result, expected

result = subtract(7,3)
expected = 4

expect(result).toBe(expected)

function sumTest() {
  result = sum(3,7)
  expected = 10
  expect(result).toBe(expected)
}

test('sum add numbers', sumTest())