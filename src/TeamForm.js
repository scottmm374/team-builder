import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Form, FormGroup, Container, Input } from 'reactstrap';


const NewFormGroup = styled(FormGroup)`
width: 50%;
margin-left: 276px;
margin-top: 86px;
`;

const NewForm = styled(Form)`
background-color: rgba(119, 119, 125, 0.58);
box-shadow: 0 4px 15px black;
padding-top: 30px;
margin-top: 66px;
`;

const NewButton = styled(Button)`
width: 175px;
margin: 30px 0;
box-shadow: 0 4px 15px black;
`;

function TeamForm(props) {
    const initialTeam = { name: "", email: "", role: "" };
    const [newTeam, setNewTeam] = useState(initialTeam)


    const handleChange = event => {
        setNewTeam({
            ...newTeam,
            [event.target.name]: event.target.value
        });
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
            <Container >
                <NewForm onSubmit={handleSubmit}>
                    <h1>Add Team Members</h1>
                    <NewFormGroup>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={newTeam.name}
                            onChange={handleChange}
                        />
                    </NewFormGroup>
                    <NewFormGroup>
                        <Input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={newTeam.email}
                            onChange={handleChange}
                        />
                    </NewFormGroup>
                    <NewFormGroup>
                        <Input
                            type="text"
                            name="role"
                            placeholder="Role"
                            value={newTeam.role}
                            onChange={handleChange}
                        />
                    </NewFormGroup>


                    <NewButton color="secondary" size="lg">Submit</NewButton>
                </NewForm>
            </Container>
        </div>

    );
}

export default TeamForm;



