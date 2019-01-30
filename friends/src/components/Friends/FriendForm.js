import React from "react";

const FriendForm = props => {
  return (
    <>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="number" name="age" placeholder="Age" />
        <input type="email" name="email" placeholder="Email" />
        <button>Add friend</button>
      </form>
    </>
  );
};

export default FriendForm;
