import React from 'react';

const Friend = props => {

    function deleteFriend(e, friend) {
        e.preventDefault();
        props.deleteFriend(friend);
    }
    return (
        <div className="friend">
            <h2>{props.friend.name}</h2>
            <p>{props.friend.age} years old</p>
            <p>Contact info: {props.friend.email}</p>
            <button>Update info</button>
            <button onClick={e => deleteFriend(e, props.friend)}>Delete friend</button>
        </div>
    );
};

export default Friend;