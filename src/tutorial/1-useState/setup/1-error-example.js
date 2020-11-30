import React from "react";
import { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("First Title");

  const handleClick = () => {
    setTitle("Surprise Motherfucker");
  };

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={handleClick}>Click here</button>
    </section>
  );
};

export default ErrorExample;
