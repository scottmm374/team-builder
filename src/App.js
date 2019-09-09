import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
const [ team, setTeam ] = useState({name: '', email: '', role: ''})

const handleChange = event => {
  setTeam({...team, [event.target.name]: event.target.value});
};

const handleSubmit = event => {
  event.preventDefault();
  setTeam({ name: '', email: '', role: ''});
}

  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name: 
          <input 
            type="text"
            name="name"
            value={team.name}
            onChange={event => handleChange(event)}
            />
        </label>
        <label>
          Email: 
          <input 
            type="text"
            name="email"
            value={team.email}
            onChange={event => handleChange(event)}
            />
        </label>
        <label>
          Role: 
          <input 
            type="text"
            name="role"
            value={team.role}
            onChange={event => handleChange(event)}
            />
        </label>
      </form>
    </div>
  );
}

export default App;
