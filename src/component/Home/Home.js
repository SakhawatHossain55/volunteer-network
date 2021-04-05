import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Event from "../Event/Event";

const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://shielded-caverns-15768.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
  }, []);

  return (
    <Container>
      <div className="row">
        {events.map((event) => (
          <Event event={event}></Event>
        ))}
      </div>
    </Container>
  );
};
export default Home;
