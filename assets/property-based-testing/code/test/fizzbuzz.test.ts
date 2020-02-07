import { range, reverse, equals } from 'ramda'
import { assert, property, nat } from 'fast-check'

function rrange(a: number, b: number): number[] {
  return a < b ? range(a, b + 1) : reverse(range(b, a + 1))
}

function fizzbuzz(a: number, b: number): string[] {
  return rrange(a, b).map(n => {
    if (n % 15 === 0) {
      return 'fizzbuzz'
    } else if (n % 5 === 0) {
      return 'buzz'
    } else if (n % 3 === 0) {
      return 'fizz'
    }
    return `${n}`
  })
}

describe('fizzbuzz', () => {
  test('result has same length as the range provided', () => {
    assert(
      property(
        nat(1000),
        nat(1000),
        (a, b) => fizzbuzz(a, b).length === Math.sqrt((b - a) * (b - a)) + 1
      )
    )
  })

  test('multiples of 3 begin with fizz', () => {
    assert(
      property(
        nat().map(i => i * 3),
        n => fizzbuzz(n, n)[0].startsWith('fizz')
      )
    )
  })

  test('multiples of 5 end with buzz', () => {
    assert(
      property(
        nat().map(i => i * 5),
        n => fizzbuzz(n, n)[0].endsWith('buzz')
      )
    )
  })

  test('multiples of 15 are fizzbuzz', () => {
    assert(
      property(
        nat().map(i => i * 15),
        n => fizzbuzz(n, n)[0] === 'fizzbuzz'
      )
    )
  })

  test('dirty: other numbers are preserved', () => {
    assert(
      property(
        nat().filter(n => n % 3 > 0 && n % 5 > 0),
        n => fizzbuzz(n, n)[0] === `${n}`
      )
    )
  })

  test('outputs can only be one of fizz, buzz, fizzbuzz or the number', () => {
    assert(
      property(nat(), n =>
        [`${n}`, 'fizz', 'buzz', 'fizzbuzz'].includes(fizzbuzz(n, n)[0])
      )
    )
  })

  test('output is ordered', () => {
    assert(
      property(nat(1000), nat(1000), (a, b) =>
        equals(
          fizzbuzz(a, b),
          rrange(a, b).map(n => fizzbuzz(n, n)[0])
        )
      )
    )
  })
})
