import React, { useState } from "react";
import { useEffect } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [value, setValue] = useState("");
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const changeValue = () => {
    value === '' ? setValue('banana') : setValue('')
  };
  

  return (
    <section>
      <h1>{value && 'texto'}</h1>
      <h2>{"texto" || value}</h2>
      <button className="btn" onClick={changeValue}>
        change value
      </button>
    </section>
  );
};

export default ShortCircuit;
