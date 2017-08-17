import React from 'react'
import ListContainer from './ListContainer.js'
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
      <ListContainer />
    </div>
    <FilterContainer />
  </div>
)

export default Home