import {combineReducers, createStore} from 'redux'
import {errorsReducer} from "./reducers/errors";
import {featuresReducer} from "./reducers/features";

export const store = createStore(
  combineReducers({
    features: featuresReducer,
    errors: errorsReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
