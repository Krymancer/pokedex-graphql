import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import rootReducer from './reducer'
import rootSaga from './saga'

const bindMiddleware = (middleware : any) => {
  return applyMiddleware(...middleware)
}

export const makeStore = (context : any) => {
  const sagaMiddleware = createSagaMiddleware()
  const store : any = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(makeStore, { debug: true })