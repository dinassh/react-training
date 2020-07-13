import { call, fork, put, takeEvery } from 'redux-saga/effects'
import UsersEffects from './users-effects'
import { Types, Creators } from './users-actions'

function* getUsers() {
  try {
    const users = yield call(UsersEffects.getUsers)


    yield put(Creators.usersLoaded(users.data))

  } catch (e) {
    console.error('Problem with fetching users.', e)
  }
}

function* addUser(user) {
  try {
    const res = yield call(UsersEffects.addUser, user)

    yield call(getUsers)

  } catch (error) {
    console.error('Problem with adding user.', error)
  }
}

export function* usersSaga() {
  yield fork(getUsers)
  yield takeEvery(Types.ADD_USER, addUser)
}
