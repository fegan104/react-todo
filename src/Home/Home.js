import React from 'react'
import TodoList from './TodoList.js'
import FilterContainer from './FilterContainer'
import AddTodo from './AddTodo.js'

let style = {
  height: "100%",
  width: "100%",
  display: 'flex',
  justifyContent: 'center'
}

const Home = () => (
  <div style={style}>
    <div>
      <AddTodo />
      <TodoList />
    </div>
    <FilterContainer />
  </div>
)

export default Home