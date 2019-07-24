import React, { useState } from "react";
import DictCard from "./components/DictCard";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [team, setTeam] = useState([
    { name: "Bonesaw", role: "healer" },
    { name: "Taylor Hebert", role: "DPS", power: "bug control", email: "taylor@parahumans.online" }
  ]);
  const [toEdit, setToEdit] = useState();

  function addMember(newMember) {
    const sorted = [...team, newMember].sort((a, b) => a.name.localeCompare(b.name));
    console.log(sorted);
    console.log("aaaaa" > "bbbbbbbbbb")
    setTeam(sorted);
  }

  return (
    <div className="App">
      <div className="grid">
        {team.map(member => <DictCard data={member} fun={setToEdit} buttonName="edit" />)}
      </div>
      <Form submitFun={addMember} targetMember={toEdit} />
    </div>
  );
}

export default App;
