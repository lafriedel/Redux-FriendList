import React, { Component } from "react";
import FriendsListContainer from "./containers/FriendsListContainer";
import FriendFormContainer from "./containers/FriendFormContainer";

import { getFriends, postNewFriend, updateFriend } from "./actions";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  state = {
    friend: {
      name: "",
      age: "",
      email: ""
    }
  };

  handleInputChanges = e => {
      this.setState({
        friend: {
          ...this.state.friend,
          [e.target.name]: e.target.value
        }

      })
  };

  addFriend = (e) => {
    e.preventDefault();
      this.props.postNewFriend(this.state.friend);
  };

  updateFriend = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.friend);
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <>
        <div className="headline">
          <h1>Friends or Frenemies?</h1>
        </div>

        <FriendFormContainer 
          handleInputChanges={this.handleInputChanges}
          addFriend={this.addFriend}
          updateFriend={this.updateFriend}
          friend={this.state.friend}
          isUpdating={this.props.isUpdating}
        />
        <FriendsListContainer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  isUpdating: state.isUpdating
})

export default connect(
  mapStateToProps,
  { getFriends, postNewFriend, updateFriend }
)(App);
