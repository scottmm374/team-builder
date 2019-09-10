import React from 'react';

function TeamMemberList(props) {
    return (
        <div>
        {props.team.map((member, index) => (
            <div className="team-members" key={index}>
                <h3> Name: {member.name}</h3>
                <p>Role: {member.role}</p>
            </div>
        ))}
        </div>
    )
}

export default TeamMemberList;