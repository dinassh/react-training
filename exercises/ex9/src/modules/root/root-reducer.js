import { usersReducer } from 'modules/users/users-reducer'
import { combineReducers } from 'redux'
import { entitiesReducer as entities } from '@salsita/react-entities';

import { router5Reducer } from 'redux-router5'

export const rootReducer = combineReducers({ usersReducer, router: router5Reducer }, entities)
