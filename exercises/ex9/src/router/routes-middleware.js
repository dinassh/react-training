import UsersEffects from 'modules/users/users-effects'
import { Creators } from 'modules/users/users-actions'
import * as routes from 'router/routes'
// import { response } from 'express'

export const getUsersMWare = (router) => (toState, fromState, done) => {

  // fetch data and call done
  if (toState.name === routes.USER_DETAILS) {

    const store = router.getDependencies().store

    store.dispatch(Creators.loadUserDetails(null))

    UsersEffects.getUserDetails(toState.params.id).then((response) => store.dispatch(Creators.loadUserDetails(response.data)))
  }

  if (toState.name === routes.USER_CREATE) {

    const store = router.getDependencies().store

    UsersEffects.getSkills().then((response) => store.dispatch(Creators.loadSkills(response.data)))
  }

  done();
}
