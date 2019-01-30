import React, { Component } from 'react';
import FriendsListContainer from './containers/FriendsListContainer';
import FriendFormContainer from './containers/FriendFormContainer';
import Navigation from './components/Navigation/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <FriendFormContainer />
        <FriendsListContainer />
      </>
    );
  }
}

export default App;
