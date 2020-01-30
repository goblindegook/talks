import { Action, actionCreatorFactory, isType } from 'typescript-fsa'

// Creating actions:

const actionCreator = actionCreatorFactory()

interface HelloPayload {
  name: string
}

const helloCreator = actionCreator<HelloPayload>('HELLO')

helloCreator({ name: 'world' }) // dispatch this

// Reducing actions:

function reducer<T>(state: T, action: Action<unknown>): T {
  // We don't know what action this is to safely handle its payload...
  console.log(action.payload.name)

  // ...until we use a type guard.
  if (isType(action, helloCreator)) {
    console.log(action.payload.name)
  }

  return state
}
