import React, { useState } from "react";
import DictCard from "./components/DictCard";
import "./App.css";

function App() {
  const [team, setTeam] = useState([{ name: "Taylor Hebert", role: "DPS" }]);
  return (
    <div className="App">
      {team.map(member => <DictCard data={member} />)}
    </div>
  );
}

export default App;
