import React from 'react';

const VolunteerRegisterList = (props) => {
    const {userName, _id, email, date, name} = props.allVolunteer;
    const deleteEvent = (id) => {
        console.log('click me', id);
        fetch(`https://localhost:5000/deleted/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully');
        })
    }
    return (
        <>
        <tbody>
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{name}</td>
            <td><button className="btn btn-danger" onClick={() => deleteEvent(_id)}>Delete</button></td>
        </tr>
        </tbody>
        
        </>
    );
};

export default VolunteerRegisterList;