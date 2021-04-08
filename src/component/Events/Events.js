import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import SelectedEvents from '../SelectedEvents/SelectedEvents';
import './Events.css'

const Events = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const [singleEvent, setSingleEvent] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allDonation/?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(loggedInUser.email);
            setSingleEvent(data)
        })
    }, [])

    return (
        <div>
            <Container>
            <Header />
            <div className="row">
              { 
                 singleEvent.length == 0 ? <Row><Spinner animation="grow" /></Row> :  singleEvent.map(event => <SelectedEvents singleEvent={event}></SelectedEvents>) 
              }
            </div>
            </Container>
        </div>
    );
};

export default Events;