import React from 'react';

const VolunteerRegisterList = (props) => {
    // console.log(props.allVolunteer);
    const {userName, _id, email, date, name} = props.allVolunteer;
    const deleteEvent = () => {
        console.log('click me');
    }
    return (
        <>
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{name}</td>
            <td><button onClick={() => deleteEvent(_id)}>Delete</button></td>
        </tr>
        </>
    );
};

export default VolunteerRegisterList;