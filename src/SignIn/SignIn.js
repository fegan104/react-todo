import React, { Component } from 'react'
import GoogleButton from 'react-google-button'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  pathToJS
} from 'react-redux-firebase'


class SignIn extends Component {

  state = {
    isLoading: false
  }

  googleLogin = loginData => {
    this.setState({ isLoading: true })
    return this.props.firebase
      .login({ provider: 'google' })
      .then(() => {
        this.setState({ isLoading: false })
        console.log(this.props.auth)
        // this is where you can redirect to another route
      })
      .catch((error) => {
        this.setState({ isLoading: false })
        console.log('there was an error', error)
        console.log('error prop:', this.props.authError) // thanks to connect
      })
  }

  render() {
    const { authError } = this.props
    const { auth } = this.props
    const { snackCanOpen } = this.state

    if (!isLoaded(auth)) {
      return (
        <div>
          <span>Loading</span>
        </div>
      )
    }

    if (isEmpty(auth)) {
      return (
        <div>
          <span>Login page</span>
          <GoogleButton onClick={this.googleLogin} />
        </div>
      )
    }

    return (
      <div>
        <p>Welcome!</p>
        <button onClick={e => this.props.firebase.logout()}>
          LOGOUT
      </button>
      </div>
    )

  }
}

export default compose(
  firebaseConnect(),
  connect(({ firebase }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth')
  })
  )
)(SignIn)