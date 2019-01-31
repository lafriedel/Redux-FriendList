import React from "react";
import { connect } from "react-redux";
import { deleteFriend } from '../actions';

import FriendsList from "../components/Friends/FriendsList";

class FriendsListContainer extends React.Component {

  render() {
    return (
      <div>
        {this.props.error && <p>{this.props.error}</p>}
        <FriendsList 
            friends={this.props.friends} 
            isUpdating={this.props.isUpdating}
            deleteFriend={this.props.deleteFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  isUpdating: state.isUpdating,
  error: state.error
});

export default connect(mapStateToProps, { deleteFriend })(FriendsListContainer);
