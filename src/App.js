import React, { useState } from "react";
import DictCard from "./components/DictCard";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [team, setTeam] = useState([
    { name: "Bonesaw", role: "healer", power: "extreme surgery", email: "imgoodnowiswear@bloodbath.net" },
    { name: "Taylor Hebert", role: "DPS", power: "bug control", email: "taylor@parahumans.online" }
  ]);
  const [toEdit, setToEdit] = useState();

  function sameMember(a, b) {
    return a.name === b.name;
  }

  function addMember(newMember) {
    const sorted = [...team, newMember].sort((a, b) => a.name.localeCompare(b.name));
    setTeam(sorted);
  }

  function editMember(member) {
    const edited = team.map(old => {
      if (sameMember(old, member)) {
        return member;
      }
      return old;
    });
    setTeam(edited);
    setToEdit(null);
  }

  return (
    <div className="App">
      <div className="grid">
        {team.map(member => <DictCard data={member} fun={setToEdit} buttonName="edit" />)}
      </div>
      <Form submitFun={toEdit ? editMember : addMember} targetMember={toEdit} />
    </div>
  );
}

export default App;
