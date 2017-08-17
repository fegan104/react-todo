export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) ?
         {...todo, completed: !todo.completed} : todo
      )
        
    default:
      return state
  }
}

export const filter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      console.log(action)
      return action.filter
    default:
      return state
  }
}