import React, { useState } from "react";
import Setup from "./tutorial/8-useContext/setup/1-context-api";
import { MyContext } from "./MyContext";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <MyContext.Provider value={{ count, setCount }}>
        <h3>App Counter: {count}</h3>
        <Setup />
      </MyContext.Provider>
    </div>
  );
}
