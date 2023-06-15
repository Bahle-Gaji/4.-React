import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import User from './User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserForm from './UserForm';

class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/edit/:id' element={<UserForm />} />
            <Route path='/add' element={<UserForm />} />
            <Route exact path='/' element={<User />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;

class NotFound extends Component {
  render(){
    return <div>Not Found</div>
  }
}