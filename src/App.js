import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import TeamForm from './TeamForm';
import TeamMemberList from './TeamMemberList';
import styled from 'styled-components';
import './App.css';


const NavLinks = styled(Link)`
text-decoration: none;
color: white;
font-size: 1.5rem;
font-weight: bold;
 margin-right: 30px;

`;

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
    <nav>
      <h1 className="nav-header">Team Builder</h1>
      <div className="nav-links">
        <NavLinks to='/'>Home</NavLinks>
        <NavLinks to='/members'>Add Member</NavLinks>
      </div>
    </nav>
    <div>
      <Route 
        path="/" exact
        render={props => <TeamMemberList team={team} {...props} />}/>
      <Route 
      path="/members" 
      render={props => <TeamForm team={team} setTeam={setTeam} {...props} />}/> 
    </div>
    </div>
  )

}
export default App;
