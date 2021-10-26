import { createStore } from 'redux'

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

export const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/decremented' })
