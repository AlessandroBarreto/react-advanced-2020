import React, { useContext } from "react";
import { MyContext } from "../../../MyContext";

const Children = () => {
  const { count, setCount } = useContext(MyContext);

  return (
    <div>
      <h3>Children counter: {count}</h3>
    </div>
  );
};

export default Children;
