import React from 'react';
import Friend from './Friend';

const FriendCard = props => {
    return (
        <div><Friend friend={props.friend} /></div>
    );
};

export default FriendCard;