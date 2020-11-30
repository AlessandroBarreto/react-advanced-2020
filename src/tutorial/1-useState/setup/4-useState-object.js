import React, { useState } from "react";

const personInfo = {
  name: "alessandro",
  age: 26,
  message: "random message",
};

const UseStateObject = () => {
  const [person, setPerson] = useState(personInfo);

  const changeMessage = () => {
    person.message === "random message"
      ? setPerson({ ...person, message: "message changed" })
      : setPerson(personInfo);
  };

  return (
    <React.Fragment>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.message}</h1>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
