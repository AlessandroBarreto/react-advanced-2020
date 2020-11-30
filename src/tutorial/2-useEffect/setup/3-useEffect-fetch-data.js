import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setGetData(data)});
  }, []);
  
  return (
    <section>
      <h3>github users</h3>
      {getData.map((info) => {
        return(
          <h4 key={info.id}>{info.login}</h4>
        )
      })}
    </section>
  );
};
export default UseEffectFetchData;
