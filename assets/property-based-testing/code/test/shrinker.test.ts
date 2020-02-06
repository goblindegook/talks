import { assert, property, nat } from 'fast-check'

test.skip('failing test without shrinker', () => {
  const datetime = nat()
    .map(n => new Date(n * 3600))
    .noShrink()

  assert(property(datetime, d => d < new Date()))
})

test.skip('failing test with shrinker', () => {
  const datetime = nat().map(n => new Date(n * 3600))

  assert(property(datetime, d => d < new Date()))
})
