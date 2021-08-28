import {createPolicy, createClaim, deletePolicy} from './actions'
import {accounting, claimHistory, policies} from './reducer'
import {createStore, combineReducers} from 'redux'

const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy('bikash', 20));
store.dispatch(createPolicy('Akash', 30));
store.dispatch(deletePolicy('bikash'));

export default store;
