import { range, reverse } from 'ramda'
import { assert, property, nat } from 'fast-check'

function r(a: number, b: number): number[] {
  return a < b ? range(a, b + 1) : reverse(range(b, a + 1))
}

function fizzbuzz(a: number, b: number): string[] {
  return r(a, b).map(n => {
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

  test('other numbers are preserved', () => {
    assert(
      property(
        nat().filter(n => n % 3 !== 0 && n % 5 !== 0),
        n => fizzbuzz(n, n)[0] === `${n}`
      )
    )
  })

  test('result has same length as the range provided', () => {
    assert(
      property(nat(1000), nat(1000), (a, b) => {
        return fizzbuzz(a, b).length === Math.sqrt((b - a) * (b - a)) + 1
      })
    )
  })
})
