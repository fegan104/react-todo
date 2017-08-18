import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { addTodo } from './HomeActionCreators.js'
import { compose } from 'redux'
import { firebaseConnect, dataToJS } from 'react-redux-firebase'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleAdd = () => {
    let pushRef = this.props.firebase.push('/todos', { text: this.state.value, completed: false });
    let pushId = pushRef.key
    pushRef.then(() => {
      this.props.dispatch(addTodo(this.state.value, pushId))
      this.setState({
        value: "",
      });
    })
      .catch((err) => {
        console.log('Error creating todo:', err) // error is also set to authError
      })
  }

  render() {
    return (
      <div>
        <TextField hintText="Enter New Todo"
          value={this.state.value}
          onChange={this.handleChange} />
        <RaisedButton style={{ marginLeft: 16 }}
          label="Add"
          onClick={e => this.handleAdd()} />
      </div>
    )
  }
}

export default compose(
  firebaseConnect([
    'todos'
  ]),
  connect(
    ({ firebase }) => ({ // state.firebase
      todos: dataToJS(firebase, 'todos')
    })
  )
)(AddTodo)