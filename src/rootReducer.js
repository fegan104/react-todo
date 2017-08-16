import { combineReducers } from 'redux'
import {todos, filter} from './Home/HomeReducers.js' 

const todoApp = combineReducers({
  todos,
  filter
})

export default todoApp