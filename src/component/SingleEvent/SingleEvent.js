import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import "./SingleEvent.css";
import { Link } from "react-router-dom";

const SingleEvent = () => {
  const { _id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [singleEvent, setSingleEvent] = useState({});
  useEffect(() => {
    fetch(`https://shielded-caverns-15768.herokuapp.com/singleEvent/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setSingleEvent(data[0]);
      });
  }, []);

  const handleDonation = () => {
    const newDonation = { ...loggedInUser, ...singleEvent };
    fetch("https://shielded-caverns-15768.herokuapp.com/donation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDonation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const { imageURL, name, date, description } = singleEvent;
  return (
    <div className="event rounded container shadow-lg p-3 mb-5 bg-body rounded p-4">
      <img className="pb-5 rounded singleImage" src={imageURL} alt="" />
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{description}</p>
      <Button as={Link} to="/events" onClick={handleDonation} className="ml-auto" variant="warning">
        Warning
      </Button>
    </div>
  );
};

export default SingleEvent;
