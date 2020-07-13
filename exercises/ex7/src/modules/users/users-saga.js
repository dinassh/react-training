import { call, fork, put, takeEvery } from 'redux-saga/effects'
import UsersEffects from './users-effects'
import { Types, Creators } from './users-actions'
import { userList } from 'modules/entities/entities-schema'
import { normalizeAndStore } from '@salsita/react-entities'
import { normalize } from 'normalizr'

function* getUsers() {
    try {
      const users = yield call(UsersEffects.getUsers)

      // const userIds = yield call(normalizeAndStore, users.data, userList)

      const normalizedData = normalize(users.data, userList)
      console.log('normalizedData', { data: normalizedData.entities, userIds: normalizedData.result })

      // yield put(Creators.usersLoaded(data, userIds))
      yield put(Creators.usersLoaded(normalizedData.entities, normalizedData.result))

    } catch (e) {
      console.error('Problem with fetching users.', e)
    }
  }

function* addUser(user) {
  try {
    yield call(UsersEffects.addUser, user)
    yield call(getUsers)

  } catch (error) {
    console.error('Problem with adding user.', error)
  }
}

export function* usersSaga() {
  yield fork(getUsers)
  yield takeEvery(Types.ADD_USER, addUser)
}
