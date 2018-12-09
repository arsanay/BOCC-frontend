import authReducer from './authReducer'
import projectReducer from './projectReducer'
import getProjectReducer from './getProjectReducer'
import getProjectByIdReducer from './getProjectByIdReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  getproject: getProjectReducer,
  getprojectbyid: getProjectByIdReducer
});

export default rootReducer

// the key name will be the data property on the state object