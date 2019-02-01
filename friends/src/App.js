import React, { Component } from "react";
import FriendsListContainer from "./containers/FriendsListContainer";
import FriendFormContainer from "./containers/FriendFormContainer";

import { getFriends } from "./actions";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <>
        <div className="headline">
          <h1>Friends or Frenemies?</h1>
        </div>

        <FriendFormContainer />
        <FriendsListContainer />
      </>
    );
  }
}

export default connect(
  null,
  { getFriends }
)(App);
