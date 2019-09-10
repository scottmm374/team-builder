import React, { useState } from 'react';
import TeamForm from './TeamForm';
import TeamMemberList from './TeamMemberList';
import './App.css';

function App() {
  const [team, setTeam] = useState([
    {
      name: 'Michelle',
      email: 'michelle@gmail.com',
      role: 'Student',
    },
    {
      name: 'Ryan',
      email: 'Ryan@gmail.com',
      role: 'SL',
    },
    {
      name: 'Chris',
      email: 'Chris@gmail.com',
      role: 'Student',
    },
  ])


  console.log("team", team);

  return (
    <div>
      <TeamMemberList team={team} />
      <TeamForm team={team} setTeam={setTeam} />
    </div>
  )

}
export default App;
