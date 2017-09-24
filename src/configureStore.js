import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { loadState, saveState } from './localStorage'
import { throttle } from 'lodash'
import rootReducer from './rootReducer'

const configureStore = () => {

  const persistedState = loadState()

  const logger = createLogger({})

  const makeStore = initialState => createStore(rootReducer, persistedState, applyMiddleware(logger))
  const store = makeStore()

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }), 1000)

  return store
}
export default configureStore