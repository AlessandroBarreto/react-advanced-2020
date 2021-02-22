import React, { useContext } from "react";
import {MyContext} from "../../../MyContext"
import Children from "./children"
// more components
// fix - context api, redux (for more complex cases)


const ContextAPI = () => {
  const {count, setCount } = useContext(MyContext)

  const addCounter = () => setCount(count + 1)
  const removeCounter = () => setCount(count - 1);
  return (
    <div>
      <h3>ContextAPI counter: {count}</h3>
      <button className="btn" onClick={removeCounter}>
        remove
      </button>
      <button className="btn" onClick={addCounter}>
        add
      </button>
      <Children/>
    </div>
  );
};
/*   const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
}; */

export default ContextAPI;
