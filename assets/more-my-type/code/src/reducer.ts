interface State {
  one: string
  two: number
}

interface StringAction {
  type: 'STRING'
  payload: string
}

interface NumberAction {
  type: 'NUMBER'
  payload: number
}

type Action = StringAction | NumberAction

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'STRING':
      return {
        ...state,
        one: action.payload.trim()
      }

    case 'NUMBER':
      return {
        ...state,
        two: action.payload
      }

    default:
      return state
  }
}
