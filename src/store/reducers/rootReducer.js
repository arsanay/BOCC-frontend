import authReducer from './authReducer'
import projectReducer from './projectReducer'
import getProjectReducer from './getProjectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  getproject: getProjectReducer
});

export default rootReducer

// the key name will be the data property on the state object