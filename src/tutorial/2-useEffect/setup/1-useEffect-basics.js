import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    count > 0
      ? (document.title = `Você clicou ${count} vezes`)
      : (document.title = "batata");
  }, [count]);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <section>
      <h1>{count}</h1>
      <button className="btn" onClick={addCount}>
        clique aqui
      </button>
    </section>
  );
};

export default UseEffectBasics;
