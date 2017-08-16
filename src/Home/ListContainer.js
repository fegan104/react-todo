import React from 'react'
import { connect } from 'react-redux'
import { List, ListItem } from 'material-ui/List'
import { toggleTodo } from './HomeActionCreators.js'

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

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const TodoList = (todos) => {
  if (todos.todos.length === 0)
    return (<div>Add Todos</div>)

  return (
    <List>
      {console.log(todos)}
      {todos.todos.map(todo => (
        <ListItem key={todo.id}
          primaryText={todo.text}
          onClick={e => toggleTodo(todo.id)} />
      ))}
    </List>
  )
}

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ListContainer