import React, { Component } from 'react';
import FriendsListContainer from './containers/FriendsListContainer';
import FriendFormContainer from './containers/FriendFormContainer';
import Navigation from './components/Navigation/Navigation';

import { getFriends } from './actions'

import './App.css';

class App extends Component {

  componentDidMount() {
    
  }

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
