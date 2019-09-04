import React from "react";

const Dislike = ({ userId, modifyChoices }) => (
  <button
    type="button"
    onClick={() => modifyChoices(userId, "ADD_TO_DISLIKED_USERS")}
  >
    <img src="images/app/dislike.png" alt="dislike" />
  </button>
);

export default Dislike;
