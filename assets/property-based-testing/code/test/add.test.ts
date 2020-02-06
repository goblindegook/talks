import { assert, property, float } from 'fast-check'

function add(a: number, b: number): number {
  return a + b
}

describe('add()', () => {
  test('commutativity', () => {
    assert(property(float(), float(), (a, b) => add(a, b) === add(b, a)))
  })

  test('associativity', () => {
    assert(
      property(
        float(),
        float(),
        float(),
        (a, b, c) => add(add(a, b), c) === add(a, add(b, c))
      )
    )
  })

  test('null element', () => {
    assert(property(float(), a => add(a, 0) === a))
  })

  test('successor', () => {
    assert(property(float(), a => add(a, 1) > a))
  })

  test('inverse', () => {
    assert(property(float(), a => add(-a, a) === 0))
  })

  test('distributivity', () => {
    assert(
      property(
        float(),
        float(),
        float(),
        (a, b, c) => a * add(b, c) === add(a * b, a * c)
      )
    )
  })
})
