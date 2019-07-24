import React, { useState } from "react";
import DictCard from "./components/DictCard";
import "./App.css";

function App() {
  const [team, setTeam] = useState([
    { name: "Taylor Hebert", role: "DPS" },
    { name: "Bonesaw", role: "healer" }
  ]);
  return (
    <div className="App">
      <div className="grid">
        {team.map(member => <DictCard data={member} />)}
      </div>

    </div>
  );
}

export default App;
