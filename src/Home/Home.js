import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import { List, ListItem } from 'material-ui/List'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux'
import ListContainer from './ListContainer.js'
import FilterContainer from './FilterContainer'
import AddTodo from './AddTodo.js'

const Home = () => (
  <div style={{ height: "100%", width: "100%", display: 'flex', justifyContent: 'center' }}>
    <div>
      <AddTodo />
      <ListContainer />
    </div>
    <FilterContainer />
  </div>
)
/**
 * @State N/A.
 * 
 * @Actions AddTodo : {
 *  type : "ADD_TODO",
 *  payload : {data:"Get groceries.", id:123, complete: false}
 * }
 */
// class TodoInput extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: '',
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//       value: event.target.value,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <TextField hintText="Enter New Todo"
//           value={this.state.value}
//           onChange={this.handleChange} />
//         <RaisedButton style={{ marginLeft: 16 }}
//           label="Add"
//           onClick={onAdd(this.state.value)} />
//       </div>
//     )
//   }
// }

/**
 * @State TodosArray, VisibilityFilter
 * 
 * @Actions ToggleTodo :{
 *  type: "TOGGLE_TODO",
 *  payload:"{id:<todo item's id>}"
 * }
 */
// class TodoList extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: []
//     }
//   }
//   getVisibleTodos(todos, filter) {
//     switch (filter) {
//       case 'SHOW_ALL':
//         return todos
//       case 'SHOW_COMPLETED':
//         return todos.filter(t => t.completed)
//       case 'SHOW_ACTIVE':
//         return todos.filter(t => !t.completed)
//     }
//   }

//   mapStateToProps(state) {
//     this.setState({ todos: state.todos });
//     return {
//       todos: getVisibleTodos(state.todos, state.visibilityFilter)
//     }
//   }

//   mapDispatchToProps(dispatch) {
//     return {
//       onTodoClick: id => {
//         dispatch(toggleTodo(id))
//       }
//     }
//   }

//   render() {
//     if (state.todos.length === 0)
//       return (<div>Add Todos</div>)

//     return (
//       <List>
//         {props.todos.map(todo => (
//           <ListItem key={todo.id}
//             primaryText={todo.text}
//             onClick={onTodoClick(todo.id)} />
//         ))}
//       </List>
//     )
//   }
// }

/**
 * @State CurrentFilter
 * 
 * @Actions SetFilter : {
 *  type: "SET_FILTER",
 *  payload : {filter : "completed"}
 * }
 */
// class FilterButton extends React.Component {
//   state = {
//     open: false,
//   };

//   handleOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const actions = [
//       <FlatButton
//         label="Cancel"
//         primary={true}
//         onClick={this.handleClose} />,
//       <FlatButton
//         label="Filter"
//         primary={true}
//         onClick={this.handleClose} />,
//     ];
//     return (
//       <div>
//         <FloatingActionButton style={{ margin: 16, position: "absolute", bottom: 0, right: 0 }}
//           onClick={this.handleOpen}>
//           <ContentFilter />
//         </FloatingActionButton>

//         <Dialog
//           title="Select Todos to show"
//           actions={actions}
//           modal={false}
//           open={this.state.open}
//           onRequestClose={this.handleClose}>
//           <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
//             <RadioButton
//               value="ALL"
//               label="All"
//               style={styles.radioButton} />
//             <RadioButton
//               value="ACTIVE"
//               label="Active"
//               onClick
//               style={styles.radioButton} />
//             <RadioButton
//               value="COMPLETED"
//               label="Completed"
//               style={styles.radioButton} />
//           </RadioButtonGroup>
//         </Dialog>
//       </div>
//     )
//   }
// }

export default Home