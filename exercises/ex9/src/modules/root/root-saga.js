import { fork } from 'redux-saga/effects'
import { usersSaga } from 'modules/users/users-saga'

export function* rootSaga() {
  yield fork(usersSaga)
}
