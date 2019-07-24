import React, { useState } from "react";
import DictCard from "./components/DictCard";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [team, setTeam] = useState([
    { name: "Bonesaw", role: "healer" },
    { name: "Taylor Hebert", role: "DPS" }
  ]);

  function addMember(newMember) {
    setTeam([...team, newMember].sort());
  }

  return (
    <div className="App">
      <div className="grid">
        {team.map(member => <DictCard data={member} />)}
      </div>
      <Form submitFun={addMember} />
    </div>
  );
}

export default App;
