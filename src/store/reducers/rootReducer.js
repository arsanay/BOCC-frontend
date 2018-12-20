import signUpReducer from './signUpReducer'
import signInReducer from './signInReducer'
import projectReducer from './projectReducer'
import getProjectReducer from './getProjectReducer'
import editProjectReducer from './editProjectReducer'
import deleteProjectReducer from './deleteProjectReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  signin: signInReducer,
  signup: signUpReducer,
  project: projectReducer,
  getproject: getProjectReducer,
  editproject: editProjectReducer,
  deleteproject: deleteProjectReducer,
  maintainauth: authReducer
});

export default rootReducer

// the key name will be the data property on the state object