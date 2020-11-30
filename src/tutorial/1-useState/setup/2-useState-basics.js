import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("First Title");

  const handleClick = () => {
    title === "First Title"
      ? setTitle("Surprise Motherfucker")
      : setTitle("First Title");
  };

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={handleClick}>Click here</button>
    </section>
  );
};

export default UseStateBasics;
