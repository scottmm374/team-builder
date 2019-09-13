import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row, Card, CardBody, Button } from 'reactstrap';

const NewCard = styled(Card)`
background-color: rgba(119, 119, 125, 0.58);
box-shadow: 0 4px 15px black;
border-bottom-left-radius: 52px;
border-top-right-radius: 52px;
border-bottom-right-radius: 10px;
border-top-left-radius: 10px;
text-align: center;
`;

const EditButton = styled(Button)`
box-shadow: 0 4px 15px black;
`;

function TeamMemberList(props) {
    return (
        <div>
            <Container>

                <NewCard>
                   <CardBody>
                   <h1>Team Members</h1> 
                   </CardBody>
                        
                    
                    </NewCard>  
            </Container>


            {props.team.map((member, index) => (
                <Container>
                    <div className="team-members" key={index}>
                        <Row>
                            <Col>
                                <NewCard>
                                    <CardBody body className="text-center">
                                        <h3> Name: {member.name}</h3>
                                        <p>Role: {member.role}</p>
                                        <p>Email: {member.email}</p>
                                        <EditButton color="secondary">Edit</EditButton>
                                    </CardBody>
                                </NewCard>
                            </Col>

                        </Row>

                    </div>
                </Container>
            ))}
        </div>
    )
}

export default TeamMemberList;