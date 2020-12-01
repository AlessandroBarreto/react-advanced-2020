import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [hide, setHide] = useState(false);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);

  return (
    <section>
      <h1>{hide ? "Escondeu!!!" : "Window size"}</h1>
      <h2>{hide || size + "PX"}</h2>
      <h3>{hide && "ops... click again"}</h3>
      <button className="btn" onClick={() => setHide(!hide)}>
        {hide ? "show" : "hide"}
      </button>
    </section>
  );
};

export default ShowHide;
