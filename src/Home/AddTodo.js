import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { addTodo } from './HomeActionCreators.js'

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

  render() {
    return (
      <div>
        <TextField hintText="Enter New Todo"
          value={this.state.value}
          onChange={this.handleChange} />
        <RaisedButton style={{ marginLeft: 16 }}
          label="Add"
          onClick={e => this.props.dispatch(addTodo(this.state.value))} />
      </div>
    )
  }
}

export default connect()(AddTodo)