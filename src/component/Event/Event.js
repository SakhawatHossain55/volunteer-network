import React from "react";
import { useHistory } from "react-router";
import "./Event.css";

const Event = ({ event }) => {
  const {imageURL, _id, name} = event
  const history = useHistory()
  const handleEventClick = () => {
    history.push(`/singleEvent/${_id}`)
  }
  return (
    <div className="col-lg-3  col-md-6 ">
      <div onClick={handleEventClick}>
      <div className="events-style rounded">
        <img className="rounded" style={{ height: "300px" }} src={imageURL} alt="" />
        <h3>{name} </h3>
      </div>
      </div>
    </div>
  );
};

export default Event;
