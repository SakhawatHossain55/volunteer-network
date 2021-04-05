import React from "react";
import "./Event.css";

const Event = ({ event }) => {
  console.log(event);
  return (
    <div className="col-lg-3  col-md-6 ">
      <div className="events-style rounded">
        <img className="rounded" style={{ height: "300px" }} src={event.imageURL} alt="" />
        <h3>{event.name} </h3>
      </div>
    </div>
  );
};

export default Event;
