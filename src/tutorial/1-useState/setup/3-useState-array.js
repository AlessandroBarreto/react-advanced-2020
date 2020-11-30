import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const handleClickAll = () => {
    people.length === 0 ? setPeople(data) : setPeople([]);
  };

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map(({ id, name }) => {
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={handleClickAll}>
        {people.length === 0 ? 'add items' : 'clear items'}
      </button>
    </>
  );
};

export default UseStateArray;
