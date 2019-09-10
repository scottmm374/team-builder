import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row, Card, CardBody } from 'reactstrap';

const NewCard = styled(Card)`
background-color: rgba(119, 119, 125, 0.58);
box-shadow: 0 4px 15px black;
`;

function TeamMemberList(props) {
    return (
        <div>

            {props.team.map((member, index) => (
                <Container>
                    <div className="team-members" key={index}>
                        <Row>
                            <Col>
                                <NewCard>
                                    <CardBody body className="text-center">
                                        <h1> Name: {member.name}</h1>
                                        <p>Role: {member.role}</p>
                                        <p>Email: {member.email}</p>
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