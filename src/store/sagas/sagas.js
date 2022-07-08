import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { sagaActionsTypes } from '../actions/sagaActions';

export function * workerSaga (action) {
  try {
    const response = yield call(()=> axios(action.payload.request))
    console.log(response.data)
    
    yield put({
      type: action.payload.success,
      payload:{
        token: response.data.token
      }
    })
  } catch (err) {
    yield put({
      type: action.payload.failed,
      payload: {
        error: err
      }
    })
  }
}

export function * watcherSaga(){
  yield takeLatest(sagaActionsTypes.CALL_REQUEST, workerSaga)
}