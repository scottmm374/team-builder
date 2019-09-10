import React, { useState } from 'react';

function Form(props) {
    const initialTeam = { name: "", email: "", role: "" };
    const [ newTeam, setNewTeam ] = useState (initialTeam)
        

    const handleChange = event => {
        setNewTeam({...newTeam,
             [event.target.name]: event.target.value});
      };
      
      const handleSubmit = event => {
        event.preventDefault();
        props.setTeam([...props.team, newTeam]);
        resetForm();
      }

      const resetForm = () => {
          setNewTeam(initialTeam);
      }

      console.log(newTeam, "newTeam")
    return (
        <div className="App">
          <form onSubmit={handleSubmit}>
            <label>
              Name: 
              <input 
                type="text"
                name="name"
                value={newTeam.name}
                onChange={handleChange}
                />
            </label>
            <label>
              Email: 
              <input 
                type="text"
                name="email"
                value={newTeam.email}
                onChange={handleChange}
                />
            </label>
            <label>
              Role: 
              <input 
                type="text"
                name="role"
                value={newTeam.role}
                onChange={handleChange}
                />
            </label>
            <button>Enter</button>
          </form>
        </div>
      );
    }
    
    export default Form;



