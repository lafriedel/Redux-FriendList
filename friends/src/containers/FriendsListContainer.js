import React from 'react';
import { connect } from 'react-redux';

import FriendsList from '../components/Friends/FriendsList';

const FriendsListContainer = props => {
    return (
            <FriendsList friends={props.friends} />
    );
};

const mapStateToProps = state => ({
    friends: state.friends
});

export default connect(mapStateToProps)(FriendsListContainer);