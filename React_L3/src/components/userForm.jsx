import React from "react";

const UserForm = (props) => {
  const { id, avatar, name, deleteFunction } = props;
  return (
    <>
      <h3>{id}</h3>
      <img src={avatar} alt={name} />

      <button value={id} onClick={deleteFunction}>
        Delete Picture
      </button>
    </>
  );
};

export default UserForm;
