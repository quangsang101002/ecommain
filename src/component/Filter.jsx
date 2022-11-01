import React, { useState } from "react";

const Filter = () => {
  const namesFromDatabase = [
    { id: 1, userName: "van halen" },
    { id: 2, userName: "obama law" },
    { id: 3, userName: "sdja halen" },
    { id: 4, userName: "vdc  halen" },
    { id: 5, userName: "hancc  halen" },
    { id: 6, userName: "dc kan halen" },
    { id: 7, userName: "lcnan halen" },
    { id: 8, userName: "cadscnasn halen" },
    { id: 9, userName: "sacnan halen" },
    { id: 10, userName: "vancfan halen" },
    { id: 11, userName: "vacncn halen" },
  ];
  const [names, setNames] = useState(namesFromDatabase);

  const filterNames = (e) => {
    const search = e.target.value.toLowerCase();
    const filteredNames = namesFromDatabase.filter((names) =>
      names.userName.toLowerCase().includes(search)
    );

    setNames(filteredNames);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>UseName</h2>
        <hr></hr>
        <input type="text" onChange={(e) => filterNames(e)}></input>
        <button onClick={(e) => filterNames(e)}>Search</button>
        <ul>
          {names.map((name) => {
            return <li key={name.id}>{name.userName}</li>;
          })}
        </ul>
      </header>
    </div>
  );
};

export default Filter;
