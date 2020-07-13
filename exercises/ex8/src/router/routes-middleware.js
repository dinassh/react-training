import UsersEffects from 'modules/users/users-effects'
import { Creators } from 'modules/users/users-actions'
import * as routes from 'router/routes'

export const getUsersMWare = (router) => (toState, fromState, done) => {

  // fetch data and call done
  if (toState.name === routes.USER_DETAILS) {

    let store = router.getDependencies().store
    
    store.dispatch(Creators.loadUserDetails(null))

    UsersEffects.getUserDetails(toState.params.id).then((response) => store.dispatch(Creators.loadUserDetails(response.data)))
  }

  done();
};