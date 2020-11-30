import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const icreaseWithDelay = () => {
    setTimeout(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 2000);
  };

  return (
    <section>
      <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button className="btn" onClick={() => setCount(count + 1)}>
          increase
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setCount(0)}>
          restart
        </button>
      </div>
      <div style={{ marginTop: "50px" }}>
        <h2>{count}</h2>
        <button className="btn" onClick={icreaseWithDelay}>
          increase with delay
        </button>
      </div>
    </section>
  );
};

export default UseStateCounter;
