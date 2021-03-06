import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk'
import Router from './Router';

class App extends Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyB1TAw6-tgzGwjKYJVmjK_thJok4_GSBF0",
      authDomain: "manager-8b39d.firebaseapp.com",
      databaseURL: "https://manager-8b39d.firebaseio.com",
      projectId: "manager-8b39d",
      storageBucket: "manager-8b39d.appspot.com",
      messagingSenderId: "462880279138"
    };
    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }

}

export default App;