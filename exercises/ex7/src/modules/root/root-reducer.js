import { usersReducer } from 'modules/users/users-reducer'
import { combineReducers } from 'redux'
import { entitiesReducer as entities } from '@salsita/react-entities';

export const rootReducer = combineReducers({ usersReducer }, entities)
