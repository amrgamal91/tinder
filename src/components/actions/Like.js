import React from "react";

const Like = ({ userId, modifyChoices }) => (
  <button
    type="button"
    onClick={() => modifyChoices(userId, "ADD_TO_LIKED_USERS")}
  >
    <img src="/images/app/like.png" alt="like" />
  </button>
);
export default Like;
