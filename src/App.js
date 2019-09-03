import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Person from "./components/Person";
import Lonely from "./components/Lonely";
import data from "./data.json";

const App = () => {
  const [people, setPeople] = useState(data);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [likedUsers, setLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  const removePerson = (peopleDataSrc, userId) => {
    peopleDataSrc = peopleDataSrc.filter(user => user.id !== userId);
    return peopleDataSrc;
  };

  const modifyChoices = (userId, action) => {
    const newPeople = [...people];
    const newSuperLikedUsers = [...superLikedUsers];
    const newLikedUsers = [...likedUsers];
    const newDisLikedUsers = [...dislikedUsers];

    switch (action) {
      case "ADD_TO_LIKED_USERS":
        console.log("here in like ");
        console.log("people : " + JSON.stringify(people));
        console.log("active user : " + JSON.stringify(people[activeUser]));
        console.log("new people : " + JSON.stringify(newPeople));

        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);
          newLikedUsers.push(data[userId]);
          console.log("new liked people  : " + JSON.stringify(newLikedUsers));

          setLikedUsers(newLikedUsers);
          setPeople(removePerson(people, userId));
          console.log("people after  : " + JSON.stringify(people));
        }
        break;
      case "ADD_TO_DISLIKED_USERS":
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDisLikedUsers.push(data[userId]);

          setDislikedUsers(newDisLikedUsers);
          setPeople(removePerson(people, userId));
        }
        break;
      case "ADD_TO_SUPERLIKED_USERS":
        if (!people[activeUser].superLikedUsers.includes(userId)) {
          newPeople[activeUser].superLikedUsers.push(userId);
          newSuperLikedUsers.push(data[userId]);

          setSuperLikedUsers(newSuperLikedUsers);
          setPeople(removePerson(people, userId));
        }
        break;
      default:
        return people;
    }
  };
  // console.log("people:" + JSON.stringify(people[1]));
  return (
    <div className="App">
      <Header />

      {people[1] ? (
        <Person
          key={people[1].id}
          person={people[1]}
          modifyChoices={modifyChoices}
          likedUsers={likedUsers}
        />
      ) : (
        <Lonely
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
          superLikedUsers={superLikedUsers}
        />
      )}
    </div>
  );
};

export default App;
