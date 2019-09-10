import React, { useState } from 'react';
import { Button, Form, FormGroup, Container, Input } from 'reactstrap';

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
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                     <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={newTeam.name}
                            onChange={handleChange}
                        />
                </FormGroup>
                <FormGroup>
                    <Input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={newTeam.email}
                            onChange={handleChange}
                        />
                </FormGroup>
                <FormGroup>
                    <Input
                            type="text"
                            name="role"
                            placeholder="Role"
                            value={newTeam.role}
                            onChange={handleChange}
                        />
                </FormGroup>


                <Button>Submit</Button>
            </Form>
            </Container>
        </div>
    );
}

export default TeamForm;



