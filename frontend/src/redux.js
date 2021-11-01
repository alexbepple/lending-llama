import {combineReducers, createStore} from 'redux'
import {errorsReducer} from "./reducers/errors";

export const store = createStore(
  combineReducers({
    errors: errorsReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
