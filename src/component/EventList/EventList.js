import React, { useEffect, useState } from 'react';
import AddEvent from '../AddEvent/AddEvent';
import Admin from '../Admin/Admin';
import VolunteerRegisterList from '../VolunteerRegisterList/VolunteerRegisterList';

const EventList = () => {
    const [allVolunteer, setAllVolunteer] = useState([])
    useEffect(() => {
        fetch(`https://shielded-caverns-15768.herokuapp.com/events`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllVolunteer(data)
        })
    }, [])
    return (
        <div>
          
            {
                (allVolunteer.map(volunteer => <VolunteerRegisterList allVolunteer={volunteer}></VolunteerRegisterList>))
            }
        </div>
    );
};

export default EventList;