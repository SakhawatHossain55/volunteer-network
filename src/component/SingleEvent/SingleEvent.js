import { Button } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './SingleEvent.css'

const SingleEvent = () => {
    const { _id } = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [singleEvent, setSingleEvent] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/singleEvent/${_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0]);
            setSingleEvent(data[0])
        })
    }, [])

    const handleDonation = () => {
        const newDonation = {...loggedInUser, ...singleEvent}
        fetch('http://localhost:5000/donation', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newDonation)
        })
        .then(res => res.json())
        .then(data => {console.log(data)})
    }

    const {imageURL, name, date, description} = singleEvent;
    return (
        <div className="event rounded container shadow-lg p-3 mb-5 bg-body rounded p-4">
            <img className="pb-5 rounded singleImage" src={imageURL} alt=""/>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{description}</p>
            {/* <button onClick={handleDonation} className="ml-auto btn btn-warning">Donation</button> */}
            <Button onClick={handleDonation} className="ml-auto" variant="warning">Warning</Button>
        </div>
    );
};

export default SingleEvent;