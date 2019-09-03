import React from "react";
import Like from "./actions/Like";
import Dislike from "./actions/Dislike";
import Superlike from "./actions/Superlike";
import Rewind from "./actions/Rewind";

const Actions = ({ person, modifyChoices }) => (
  <div id="actions">
    <Rewind userId={person.id} />
    <Dislike userId={person.id} modifyChoices={modifyChoices} />
    <Like userId={person.id} modifyChoices={modifyChoices} />
    <Superlike userId={person.id} modifyChoices={modifyChoices} />
  </div>
);

export default Actions;
