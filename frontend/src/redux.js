import {combineReducers, createStore} from 'redux'
import {errorsReducer} from "./redux-errors";

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
  combineReducers({
    counter: counterReducer,
    errors: errorsReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
