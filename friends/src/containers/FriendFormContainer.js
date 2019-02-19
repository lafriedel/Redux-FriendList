import React from "react";
// import { connect } from "react-redux";
// import { postNewFriend, updateFriend } from "../actions";

import FriendForm from "../components/Friends/FriendForm";

class FriendFormContainer extends React.Component {
  // state = {
  //   friend: {
  //     name: "",
  //     age: "",
  //     email: ""
  //   }
  // };

  // handleInputChanges = e => {
  //     this.setState({
  //       friend: {
  //         ...this.state.friend,
  //         [e.target.name]: e.target.value
  //       }

  //     })
  // };

  // addFriend = (e) => {
  //   e.preventDefault();
  //     this.props.postNewFriend(this.state.friend);
  // };

  // updateFriend = e => {
  //   e.preventDefault();
  //   this.props.updateFriend(this.state.friend);
  // }

  render() {
    return (
      <div className="friend-form">
        <FriendForm 
            postNewFriend={this.props.postNewFriend}
            handleInputChanges={this.props.handleInputChanges}
            addFriend={this.props.addFriend}
            updateFriend={this.props.updateFriend}
            friend={this.props.friend}
            friends={this.props.friends}
        />
      </div>

    );
  }
}

// const mapStateToProps = state => ({
//   friends: state.friends,
//   isUpdating: state.isUpdating
// })

// export default connect(
//   mapStateToProps,
//   { postNewFriend, updateFriend }
// )(FriendFormContainer);

export default FriendFormContainer;
