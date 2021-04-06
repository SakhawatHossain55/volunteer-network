import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Event from "../Event/Event";
import Header from "../Header/Header";

const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://shielded-caverns-15768.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setEvents(data);
      });
  }, []);

  return (
    <>
      <Header />
      <h1 className="text-center">I grow by helping people in need.</h1>
      <div className="container mb-5 mt-5">
        <div className="col-md-6 offset-md-3">
          <form action="/addWorks" method="post">
            <div className="row">
              <div className="col">
                <input
                  className="form-control addedWork"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Search Area"
                />
              </div>
              <div className="col-auto">
                <button type="button" className="btn btn-success">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Container>
        <div className="row">
          {events.map((event) => (
            <Event event={event} key={event._id}></Event>
          ))}
        </div>
      </Container>
    </>
  );
};
export default Home;
