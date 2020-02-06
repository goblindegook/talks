import { assert, property, float, array, integer } from 'fast-check'
import { equals, sort } from 'ramda'

function mySort(collection: readonly number[]): readonly number[] {
  const collectionCopy = [...collection]
  collectionCopy.sort((a, b) => a - b)
  return collectionCopy
}

describe('sort()', () => {
  test('length does not change', () => {
    assert(
      property(
        array(float()),
        collection => collection.length === mySort(collection).length
      )
    )
  })

  test('idempotence', () => {
    assert(
      property(array(float()), collection =>
        equals(mySort(collection), mySort(mySort(collection)))
      )
    )
  })

  test('compare with ramda/sort', () => {
    assert(
      property(array(integer()), collection => {
        return equals(
          mySort(collection),
          sort((a, b) => a - b, collection)
        )
      })
    )
  })
})
