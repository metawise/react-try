import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './posts/PostsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsList/>
      </div>
    );
  }
}

export default App;
