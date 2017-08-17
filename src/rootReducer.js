import { combineReducers } from 'redux'
import {todos, filter} from './Home/HomeReducers.js' 
import { firebaseStateReducer } from 'react-redux-firebase'

const todoApp = combineReducers({
  todos,
  filter,
  firebase: firebaseStateReducer
})

export default todoApp