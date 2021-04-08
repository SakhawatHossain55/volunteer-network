import React from 'react';
import { Link } from 'react-router-dom';
import './AddEvent.css'

const AddEvent = () => {
    return (
        <div className="adminWrapper col-lg-3 col-md-4 p-5">
          <h2><Link to="/">Volunteer Network</Link></h2>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action">
              <Link to="/eventList">Manage Event</Link>
            </li>
            <li className="list-group-item list-group-item-action">
              <Link to="/admin">Add Event</Link>
            </li>
          </ul>
        </div>
    );
};

export default AddEvent;