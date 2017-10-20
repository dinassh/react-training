import transitionPath from "router5.transition-path";
import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { actionTypes } from "redux-router5";

import * as Routes from "modules/routing/routes";
import * as Effects from "modules/crud/crud-effects";
import * as Schema from "modules/crud/crud-schema";
import identityFn from "helpers/identity-fn";
import Actions from "modules/crud/crud-actions";
import { normalizeAndStore } from "modules/entity-repository/entity-repository-saga";

/**
 * Returns effect & schema pair which will be used for fetching & normalizing the entity based on provided route.
 * @param {String} Route
 * @param {Object} Entire application state - so that effect can be parameterized if necessary
 *
 * @returns {Object} Object containing effect to be executed and schema for normalizing the result
 */
const mapRouteToFetchParams = route => {
  switch (route) {
    case Routes.USERS_LIST:
      return {
        effect: Effects.getUsers,
        schema: Schema.users
      };

    default:
      return null;
  }
};

/**
 * Fetches CRUD entity/ies based on provided route.
 * Fetched entity/ies is/are automatically normalized and
 * reference to it stored in the app state
 */
export function* fetchEntities(route) {
  const fetchParams = mapRouteToFetchParams(route);

  // Some routes might not have CRUD fetching defined
  // We'll skip these
  if (fetchParams) {
    // Fetch state so that it's possible to pass it
    // to effectParamsFactory to return params
    // of the effect
    const state = yield select(identityFn);

    const { effect, schema, effectParamsFactory = () => [] } = fetchParams;

    // Just call the effect
    const data = yield call(effect, ...effectParamsFactory(state));

    // Normalize the response
    const result = yield call(normalizeAndStore, data, schema);

    // And store the result
    yield put(Actions.Creators.entitiesFetched(route, result));
  }
}

/**
 * Handles sucessful route transition and automatically calls
 * fetch for all corresponding routes
 * 
 * @param {Object} router5/TRANSITION_SUCCESS action
 */
export function* onRouteTransition({ payload: { route, previousRoute } }) {
  // Find routing transition path
  const { toActivate } = transitionPath(route, previousRoute);

  // Call fetch for all activated routes
  yield all(toActivate.map(route => call(fetchEntities, route)));
}

export default function* crudSaga() {
  yield all([takeEvery(actionTypes.TRANSITION_SUCCESS, onRouteTransition)]);
}
