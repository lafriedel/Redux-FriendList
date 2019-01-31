import React from "react";
import { connect } from "react-redux";
import { postNewFriend } from "../actions";

import FriendForm from "../components/Friends/FriendForm";

class FriendFormContainer extends React.Component {
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

  render() {
    return (
        <FriendForm 
            postNewFriend={this.props.postNewFriend}
            handleInputChanges={this.handleInputChanges}
            addFriend={this.addFriend}
            friend={this.state.friend}
        />
    );
  }
}

export default connect(
  null,
  { postNewFriend }
)(FriendFormContainer);
