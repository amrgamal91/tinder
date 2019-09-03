import React from "react";

const Superlike = ({ userId, modifyChoices }) => (
  <button
    type="button"
    onClick={() => modifyChoices(userId, "ADD_TO_SUPERLIKED_USERS")}
  >
    <img src="/images/app/superlike.png" alt="superlike" />
  </button>
);

export default Superlike;
