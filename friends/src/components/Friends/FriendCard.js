import React from 'react';
import Friend from './Friend';

const FriendCard = props => {
    return (
        <div><Friend deleteFriend={props.deleteFriend} friend={props.friend} /></div>
    );
};

export default FriendCard;