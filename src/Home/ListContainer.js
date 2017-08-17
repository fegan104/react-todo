import React from 'react'
import { connect } from 'react-redux'
import { List, ListItem } from 'material-ui/List'
import { toggleTodo } from './HomeActionCreators.js'
import Checkbox from 'material-ui/Checkbox';

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
  todos: getVisibleTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const TodoList = ({todos, onTodoClick}) => (
  <List>
    {todos.map(todo => (
      <ListItem
        style={{ fontFamily: "Roboto" }}
        key={todo.id}
        primaryText={todo.text}
        leftCheckbox={<Checkbox
          checked={todo.completed}
          onClick={() => onTodoClick(todo.id)} />
        } />
    ))}
  </List>
)


const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ListContainer