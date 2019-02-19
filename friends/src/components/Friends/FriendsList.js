import React from 'react';
import FriendCard from './FriendCard';

const FriendsList = props => {

    return (
        <div className="friends-list">
            {props.friends.map(friend => {
                return <FriendCard deleteFriend={props.deleteFriend} key={friend.id} friend={friend} />
            })}
        </div>
    );
};

export default FriendsList;