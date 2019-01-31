import React from "react";

const FriendForm = props => {
  return (
    <>
      <form onSubmit={(e) => props.addFriend(e)}>
        <input type="text" name="name" onChange={props.handleInputChanges} placeholder="Name" />
        <input type="number" name="age" onChange={props.handleInputChanges} placeholder="Age" />
        <input type="email" name="email" onChange={props.handleInputChanges} placeholder="Email" />
        <button>Add friend</button>
      </form>
    </>
  );
};

export default FriendForm;
