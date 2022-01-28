import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { actionTypes, failure, loadDataSuccess } from './actions'

import {getPokemonFromStorage, savePokemonToStorage} from '@/state/persist';

function* loadDataSaga() {
  try {
    const data = getPokemonFromStorage();
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
  ])
}

export default rootSaga