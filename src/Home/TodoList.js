import React from 'react'
import { connect } from 'react-redux'
import { List, ListItem } from 'material-ui/List'
import { toggleTodo } from './HomeActionCreators.js'
import Checkbox from 'material-ui/Checkbox'
import { getFirebase, firebaseConnect, dataToJS } from 'react-redux-firebase'
import { compose } from 'redux'


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos
    case 'COMPLETED':
      return todos.filter(t => t.completed)
    case 'ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(dataToJS(state, 'todos').todos, state.filter)
})

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: todo => {
      console.log(`setting: /todos/${todo.id}/completed to ${!todo.completed}`)
      getFirebase().set(`/todos/${todo.id}/completed`, !todo.completed)
      dispatch(toggleTodo(todo))
    }
  }
}

const TodoListView = ({ todos, onTodoClick }) => {
  // console.log(this.props)
  return (<List>
    {todos.map(todo => (
      <ListItem
        style={{ fontFamily: "Roboto" }}
        key={todo.id}
        primaryText={todo.text}
        leftCheckbox={<Checkbox
          checked={todo.completed}
          onClick={() => onTodoClick(todo)} />
        } />
    ))}
  </List>)
}

const fbWrapped = firebaseConnect([
  'todos'
])(TodoListView)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(fbWrapped)