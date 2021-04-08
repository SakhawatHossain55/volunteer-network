import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner, Table } from 'react-bootstrap';
import AddEvent from '../AddEvent/AddEvent';
import VolunteerRegisterList from '../VolunteerRegisterList/VolunteerRegisterList';

const EventList = () => {
    const [allVolunteer, setAllVolunteer] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/donation`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllVolunteer(data)
        })
    }, [])
    return (
        <Container fluid>
            <Row className="vh-100">
                <AddEvent />
                <div className="col-lg-9 col-md-8 p-5">
                    <h2 className="mb-5">Volunteer register list</h2>
                    <Table striped bordered hover className="p-3 shadow">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Registating Date</th>
                                <th>Volunteer List</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                             allVolunteer.length == 0 ? <Row className="align-items-center justify-content-center text-center"><Spinner animation="grow" /></Row> :  allVolunteer.map(volunteer => <VolunteerRegisterList allVolunteer={volunteer}></VolunteerRegisterList>)
                        }
                    </Table>
                </div>
            </Row>
        </Container>
    );
};

export default EventList;

