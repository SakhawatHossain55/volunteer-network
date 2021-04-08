import { Button } from "react-bootstrap";
import React from "react";
import "./SelectedEvents.css";

const SelectedEvents = (props) => {
  // console.log(props);
  const { name, date, _id, imageURL } = props.singleEvent;


  const handleCancelClick = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        console.log("deleted successfully");
      });
  };

  return (
    <div className="col-md-6">
      <div className=" mb-4 rounded selected-events">
        <div className="row">
          <div className="col-4">
            <img  className="p-3" src={imageURL} alt="" />
          </div>
          <div className="col-8">
            <div className="p-3">
            <h3>Name: {name}</h3>
            <h3>Date: {date}</h3>
            <Button className="button " onClick={() => handleCancelClick(_id)}variant="danger">cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedEvents;
