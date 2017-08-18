import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './rootReducer.js'
import { BrowserRouter } from 'react-router-dom'
import { compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import Firebase from 'firebase';


// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyAGxrHtVDQ_JMVs90nplXMexjatuB1m5Ts',
  authDomain: 'react-todo-90261.firebaseapp.com',
  databaseURL: 'https://react-todo-90261.firebaseio.com/',
  storageBucket: 'gs://react-todo-90261.appspot.com/'
}
// react-redux-firebase options
const config = {
  // userProfile: 'users', // firebase root where user profiles are stored
  // enableLogging: false, // enable/disable Firebase's database logging
}
Firebase.initializeApp(firebaseConfig);

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, config)
)(createStore)

// Create store with reducers and initial state
let initialState = new Object()
Firebase.database().ref('/todos').once('value').then(function (snapshot) {
  initialState.todos = Object.keys(snapshot.val()).map(key => {
    let data = snapshot.val()[key]
    // console.log(val[key])
    return {
      id: key,
      completed: data.completed,
      text: data.text
    }
  })
  initialState.filter = "ALL"
  console.log(initialState)
  const store = createStoreWithFirebase(reducer, initialState)

  ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('app'));
});